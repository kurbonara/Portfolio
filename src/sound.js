// Tiny UI sound effects, synthesized with the Web Audio API (no audio files).
// Muted by default; the visitor's choice is remembered in localStorage.

const KEY = 'sound'
let ctx = null
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
  osc.connect(gain).connect(ac.destination)
  osc.start(t)
  osc.stop(t + length + 0.02)
}

const sounds = {
  hover: () => tone(1800, { length: 0.03, volume: 0.025, type: 'triangle' }),
  click: () => tone(520, { length: 0.09, volume: 0.07, slideTo: 260 }),
  on: () => {
    tone(660, { length: 0.12, volume: 0.07 })
    tone(990, { start: 0.09, length: 0.16, volume: 0.07 })
  },
  off: () => {
    tone(880, { length: 0.12, volume: 0.06 })
    tone(520, { start: 0.09, length: 0.18, volume: 0.06 })
  },
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
    // The speaker button plays its own on/off sound.
    if (el && !el.closest('.sound-toggle')) play('click')
  }
  document.addEventListener('pointerover', onOver)
  document.addEventListener('pointerdown', onDown)
  return () => {
    document.removeEventListener('pointerover', onOver)
    document.removeEventListener('pointerdown', onDown)
  }
}
