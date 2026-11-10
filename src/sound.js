// Tiny UI sound effects, synthesized with the Web Audio API (no audio files).
// Muted by default; the visitor's choice is remembered in localStorage.

const KEY = 'sound'
let ctx = null
let out = null // master chain: everything plays through a limiter so louder sounds never clip
let muted = true
try {
  muted = localStorage.getItem(KEY) !== 'on'
} catch {
  // Blocked storage: stay muted.
}
const listeners = new Set()

function audio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
    const limiter = ctx.createDynamicsCompressor()
    limiter.threshold.value = -6
    limiter.knee.value = 4
    limiter.ratio.value = 12
    limiter.attack.value = 0.002
    limiter.release.value = 0.12
    out = ctx.createGain()
    out.gain.value = 1
    out.connect(limiter).connect(ctx.destination)
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

// One short note: an oscillator with a quick attack and exponential fade.
function tone(freq, { start = 0, length = 0.08, volume = 0.08, type = 'sine', slideTo } = {}) {
  const ac = audio()
  if (!ac) return
  const t = ac.currentTime + start
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t)
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + length)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.005)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + length)
  osc.connect(gain).connect(out)
  osc.start(t)
  osc.stop(t + length + 0.02)
}

const sounds = {
  hover: () => tone(1800, { length: 0.035, volume: 0.1, type: 'triangle' }),
  click: () => tone(560, { length: 0.1, volume: 0.28, type: 'triangle', slideTo: 280 }),
  on: () => {
    tone(660, { length: 0.14, volume: 0.25, type: 'triangle' })
    tone(990, { start: 0.09, length: 0.2, volume: 0.25, type: 'triangle' })
  },
  off: () => {
    tone(880, { length: 0.14, volume: 0.22, type: 'triangle' })
    tone(520, { start: 0.09, length: 0.22, volume: 0.22, type: 'triangle' })
  },
  // Night: a soft falling sweep with a low note underneath.
  dark: () => {
    tone(880, { length: 0.35, volume: 0.18, slideTo: 330 })
    tone(220, { start: 0.08, length: 0.4, volume: 0.22, type: 'triangle' })
  },
  // Day: a bright rising sparkle.
  light: () => {
    tone(784, { length: 0.12, volume: 0.2, type: 'triangle' })
    tone(1175, { start: 0.08, length: 0.14, volume: 0.2, type: 'triangle' })
    tone(1568, { start: 0.16, length: 0.22, volume: 0.16 })
  },
}

// A soft plucked note on a pentatonic scale (any sequence sounds pleasant).
// `step` 0, 1, 2… walks up the scale across octaves.
const PENTATONIC = [0, 2, 4, 7, 9]
export function pluck(step) {
  if (muted) return
  const s = Math.max(0, Math.round(step))
  const semis = 12 * Math.floor(s / 5) + PENTATONIC[s % 5]
  const freq = 392 * 2 ** (semis / 12) // from G4 upward
  tone(freq, { length: 0.18, volume: 0.12, type: 'triangle' })
}

export function play(name) {
  if (!muted) sounds[name]?.()
}

export function isMuted() {
  return muted
}

export function setMuted(next) {
  if (next === muted) return
  // Mute: play the "off" sound before going quiet. Unmute: play "on" right after.
  if (next) sounds.off()
  muted = next
  if (!next) sounds.on()
  try {
    localStorage.setItem(KEY, next ? 'off' : 'on')
  } catch {
    // Not saved; still applies for this visit.
  }
  listeners.forEach((fn) => fn(muted))
}

export function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

// Hover ticks and click pops for every link and button on the page.
const INTERACTIVE = 'a, button, [role="tab"], summary, input[type="submit"]'
export function installUiSounds() {
  let last = null
  const onOver = (e) => {
    const el = e.target.closest?.(INTERACTIVE)
    if (el === last) return
    last = el
    if (el && e.pointerType === 'mouse') play('hover')
  }
  const onDown = (e) => {
    const el = e.target.closest?.(INTERACTIVE)
    // The speaker and day/night buttons play their own sounds.
    if (el && !el.closest('.theme-toggle')) play('click')
  }
  document.addEventListener('pointerover', onOver)
  document.addEventListener('pointerdown', onDown)
  return () => {
    document.removeEventListener('pointerover', onOver)
    document.removeEventListener('pointerdown', onDown)
  }
}
