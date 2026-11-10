import { useEffect, useState } from 'react'
import { isMuted, setMuted, subscribe } from '../sound.js'

// Speaker button: mutes or unmutes the site's UI sounds. Muted by default.
export default function SoundToggle() {
  const [muted, setState] = useState(isMuted)
  useEffect(() => subscribe(setState), [])

  return (
    <button
      type="button"
      className="theme-toggle sound-toggle"
      onClick={() => setMuted(!muted)}
      aria-pressed={!muted}
      aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      title={muted ? 'Sound off' : 'Sound on'}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4Z" />
        {muted ? (
          <path d="m16 9.5 5 5m0-5-5 5" />
        ) : (
          <>
            <path d="M15.5 9a4 4 0 0 1 0 6" />
            <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
          </>
        )}
      </svg>
    </button>
  )
}
