// Night-sea scene behind the Fogbound card: islands, a lighthouse with a sweeping beam, and drifting fog.
// fit="meet" shows the whole scene; fit="slice" crops it to fill a short, wide frame.
export default function FogScene({ fit = 'meet' }) {
  return (
    <div className="feature__scene" aria-hidden="true">
      <svg viewBox="0 0 1200 400" preserveAspectRatio={`xMaxYMax ${fit}`}>
        <defs>
          <linearGradient id="beam-r" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#ffd68c" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffd68c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam-l" x1="1" x2="0" y1="0" y2="0">
            <stop offset="0" stopColor="#ffd68c" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffd68c" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lamp-glow">
            <stop offset="0" stopColor="#ffe2a8" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffe2a8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="scene__beam">
          <polygon points="901,124 1400,40 1400,208" fill="url(#beam-r)" />
          <polygon points="901,124 402,40 402,208" fill="url(#beam-l)" />
        </g>
        <path className="scene__isle scene__isle--far" d="M0 300 L0 268 Q60 240 140 262 Q200 250 260 276 L300 300 Z" />
        <path className="scene__isle scene__isle--far" d="M470 300 Q520 284 570 289 Q600 292 625 300 Z" />
        <path className="scene__isle" d="M740 300 Q800 266 860 261 Q900 252 960 257 Q1030 265 1090 300 Z" />
        {/* Lighthouse: tapered tower, stripe, balcony, lantern room, roof. */}
        <polygon className="scene__isle" points="878,262 924,262 914,148 888,148" />
        <polygon className="scene__tower-band" points="883,212 919,212 917,192 885,192" />
        <rect className="scene__tower-window" x="897" y="168" width="8" height="12" rx="4" />
        <rect className="scene__isle" x="880" y="141" width="42" height="7" rx="1" />
        <rect className="scene__isle" x="886" y="137" width="30" height="4" />
        <rect className="scene__isle" x="887" y="111" width="28" height="26" />
        <rect className="scene__lamp" x="891" y="114" width="20" height="20" />
        <rect className="scene__isle" x="900" y="114" width="2" height="20" />
        <polygon className="scene__isle" points="883,111 901,92 919,111" />
        <rect className="scene__isle" x="900" y="84" width="2" height="9" />
        <circle cx="901" cy="124" r="56" fill="url(#lamp-glow)" />
        <rect className="scene__sea" x="0" y="300" width="1200" height="100" />
        <g className="scene__glints">
          <rect x="888" y="312" width="26" height="1.5" />
          <rect x="880" y="326" width="42" height="1.5" />
          <rect x="892" y="342" width="18" height="1.5" />
        </g>
      </svg>
      <div className="fog fog--1" />
      <div className="fog fog--2" />
      <div className="fog fog--3" />
    </div>
  )
}
