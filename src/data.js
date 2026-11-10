export const profile = {
  // Non-breaking space keeps the surname "Dela Rosa" on one line when the name wraps.
  name: 'Kurt Tristan R. Dela\u00a0Rosa',
  shortName: 'Kurt Tristan',
  role: 'Front-end & game developer',
  // Paragraphs in the "About" parts of the site.
  about: [
    "I'm a BSIT student at Bulacan State University, majoring in Web and Mobile Development. I like building things people actually use: a commute guide for Metro Manila, an attendance system for student orgs, and small Mac apps that make everyday computer stuff nicer.",
    "I also make games in Unity, and design and edit in Photoshop, Illustrator, Premiere Pro, and After Effects. I'm looking for an internship where I can help build real products and keep learning.",
  ],
  status: 'Open to internships',
  facts: [
    { label: 'Studying', value: 'BSIT, BulSU' },
    { label: 'Focus', value: 'React · Unity' },
    { label: 'Graduating', value: '2027' },
  ],
  location: 'Mojon, City of Malolos, Bulacan',
  city: 'Malolos, Bulacan',
  phone: '+63-907-010-0786',
  phoneHref: 'tel:+639070100786',
  email: 'kurttristan.r.delarosa@gmail.com',
  // Put your résumé PDF in /public with this file name to enable the download link.
  resume: '/KurtTristanDelaRosa.pdf',
  // Put a square photo in /public with this file name to show it in the About section.
  photo: '/profile.jpg',
}

// Filters shown above the project grid, in order. `category` on each project picks one.
export const categories = [
  { id: 'web', label: 'Web' },
  { id: 'mac', label: 'Mac apps' },
  { id: 'game', label: 'Games' },
]

// Every project, in the order they appear. `featured` ones get a wide card on the home page.
// `cover` is a screenshot in public/projects/; projects without one show drawn artwork instead.
export const projects = [
  {
    id: 'sakay',
    featured: true,
    category: 'web',
    badge: 'Web app',
    title: 'Sakay',
    tagline: 'Find your ride. Ask once, help many.',
    subtitle: 'Community commute guide for Metro Manila',
    kind: 'Personal project',
    platform: 'Web · PWA',
    year: '2026',
    url: 'https://sakay-ph.vercel.app',
    cover: '/projects/sakay.jpg',
    summary:
      'A commute guide where people search one place for jeepney, bus, UV Express, tricycle, and train routes, with step-by-step directions, signboards, fares, and travel times.',
    problem:
      'Commuters ask "paano pumunta from X to Y?" in Facebook groups, and the same questions get answered again and again in posts nobody can search.',
    solution:
      'One searchable guide with multi-leg trips on a map, plus a Q&A board that checks for duplicate questions before you post, so each answer helps everyone who asks next.',
    role: 'Design and full-stack development: database, search and trip engine, maps, community features, and deployment.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Supabase', 'PostgreSQL', 'Leaflet', 'OpenStreetMap', 'Vercel'],
    points: [
      'Landmark search (malls, schools, churches, terminals) with autocomplete and "did you mean…" suggestions.',
      'Multi-leg trips: the database chains rides from different routes, including short walking transfers like MRT-3 Cubao to LRT-2 Cubao.',
      'Interactive Leaflet map with pickup, drop-off, and numbered transfer pins; regular and student/senior/PWD fares per leg.',
      'Terminal and station directory with a live "Open now / Closed" badge that flips exactly at opening and closing time.',
      'Q&A board with full-text search and duplicate detection, plus upvotes, best answers, and "Still accurate / Outdated" confirmations on routes.',
      'Imported transit lines from OpenStreetMap; member-submitted routes go through moderation before they are published.',
    ],
  },
  {
    id: 'dalo',
    featured: true,
    category: 'web',
    badge: 'Web app',
    title: 'Dalo',
    tagline: 'Attendance you can trust, certificates that make themselves.',
    subtitle: 'Event registration & attendance for student orgs',
    kind: 'Personal project',
    platform: 'Web',
    year: '2026',
    url: 'https://dalo-ph.vercel.app',
    cover: '/projects/dalo.jpg',
    summary:
      'Replaces paper sign-in sheets and Google Forms with QR tickets, scan-in/scan-out, automatic attendance reports, and e-certificates for everyone who actually stayed.',
    problem:
      'Student orgs track attendance on paper or with Google Forms, which are easy to fake and tedious to tally when it is time to give out certificates.',
    solution:
      'Each attendee gets a QR ticket tied to their account. Officers scan people in and out from their phones, and certificates generate themselves for everyone who meets the event rule.',
    role: 'Design and full-stack development: database and security rules, scanner, reports, certificate generation, and deployment.',
    stack: ['Next.js 16', 'Tailwind CSS 4', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'pdf-lib', 'QR codes', 'Vercel'],
    points: [
      'Event registration with capacity limits and open/close control.',
      "A QR ticket per attendee, tied to their account with a 128-bit random code that can't be guessed or usefully shared.",
      "Scan-in / scan-out from any officer's phone, with a timestamped audit log of who scanned whom and when.",
      'Optional self check-in: a projector shows a QR code that changes every 30 seconds and only works during the event.',
      'Live attendance stats, filters, CSV export, and printing.',
      'PDF e-certificates for attendees who meet the completion rule, each with a public verification QR code.',
      "Security enforced in the database, not just the UI: only the hosting org's officers can scan, and attendees can't edit their own records.",
    ],
  },
  {
    id: 'ilabcict',
    team: true,
    category: 'web',
    badge: 'Web & mobile',
    title: 'iLabCICT',
    tagline: 'Lab maintenance tickets instead of chats and logbooks.',
    subtitle: 'Laboratory Maintenance & Technical Support Management System',
    kind: 'BSIT Capstone Project · Team',
    platform: 'Web · Mobile',
    year: '2026',
    date: 'March 2026',
    cover: '/projects/ilabcict.jpg',
    summary:
      'A web and mobile platform our capstone team built to replace chats, logbooks, and verbal requests for BulSU CICT lab maintenance with one ticketing and equipment-tracking system.',
    problem:
      "Lab issues at BulSU's CICT were reported informally through chats, logbooks, and verbal requests, so requests were hard to track and repair history was scattered.",
    solution:
      'We built centralized ticketing with tracking numbers, QR codes on equipment, a computer inventory with repair history, automated reports, and role-based access for faculty, technicians, and administrators.',
    role: 'Developer on the capstone team, working in Agile Scrum with daily standups and Figma prototypes. The web app is deployed on Vercel.',
    stack: ['ReactJS (Vite)', 'TypeScript', 'TailwindCSS', 'React Native', 'Django', 'PostgreSQL', 'Figma'],
    points: [
      "As a team, we developed a web and mobile platform for BulSU's CICT laboratories to replace informal reporting (chats, logbooks, verbal requests) with a centralized ticketing and equipment tracking system.",
      'We built maintenance request ticketing with tracking numbers, QR code equipment access, computer inventory, repair history, and automated report generation.',
      'We implemented role-based access for faculty, technicians, and administrators, plus an admin dashboard for request status and response times.',
      'We worked in an Agile Scrum process with daily standups and Figma prototyping, and deployed the web app on Vercel.',
      'We evaluated the system against ISO/IEC 25010:2023 quality characteristics.',
    ],
  },
  {
    id: 'fogbound',
    category: 'game',
    badge: 'Unity game',
    title: 'Fogbound',
    tagline: 'A storm-swept horror survival game. The fog will not let you leave.',
    subtitle: '3D Horror / Survival Adventure',
    kind: 'Unity Game Project',
    platform: 'Windows · macOS · iOS',
    year: '2026',
    cover: '/projects/fogbound.jpg',
    summary:
      "A 3D horror-survival game where you row between fog-bound islands, following a lost keeper's journal to light a signal fire and escape.",
    problem:
      'Make a small archipelago feel dangerous and alive. Players need constant pressure from storms, tides, and monsters, without ever losing track of where to go next.',
    solution:
      'An ordered quest chain with a compass HUD and readable journal pages keeps direction clear, while a storm system, rising tides, and shadow demons supply the pressure. A holy cross and boat upgrades give the player ways to fight back.',
    role: 'Gameplay programming in Unity 6 and C#: quest, storm, enemy, boat, and survival systems, plus UI, saving, and platform builds.',
    stack: ['Unity 6', 'C#', 'Rigidbody Physics', 'Mobile Touch Controls', 'JSON Save System'],
    points: [
      "Built a 3D horror-survival game set on a fog-bound archipelago, where the player follows a lighthouse keeper's scattered journal pages from island to island to light the signal fire on Beacon Rock and call a rescue ship.",
      'Programmed an ordered quest system with a compass HUD, readable clue notes, locked doors and keys, and savepoint respawns.',
      'Created a dynamic storm: rising tides that flood the beaches, rain muffled indoors, lightning with distance-delayed thunder, and strikes that hunt players caught in the open.',
      'Designed shadow demons that rise from the sea and close in on every lightning flash, countered by a holy cross that burns them away in its light, across three difficulty levels.',
      'Implemented rowboat buoyancy and rowing, swimming, stamina, plank collecting and boat upgrades, plus a fog wall that pushes players back toward the islands.',
      'Added on-screen touch controls, JSON save slots, a settings menu, and an intro cutscene, and shipped builds for Windows, macOS, and iOS.',
    ],
  },
  {
    id: 'jinx',
    category: 'web',
    badge: 'Website',
    title: 'JINX Pilot Service',
    tagline: 'Know your total before you order.',
    subtitle: 'Website for a Mobile Legends rank-boosting service',
    kind: 'Client website',
    platform: 'Web',
    year: '2026',
    cover: '/projects/jinx.jpg',
    summary:
      "A website for JINX's Mobile Legends pilot service, with rate cards, a rank-to-rank price calculator, and a theme picker based on Kagura's skins.",
    problem:
      'Customers want to know what a climb will cost before they message, and the service needed one place to show its rates and how ordering works.',
    solution:
      'A fast single-page site where customers pick their current and target rank and get the exact total, with every rate card and the calculator reading from the same pricing rules.',
    role: 'Design and development of the whole site, including the pricing logic, calculator, live visit counter, and deployment.',
    stack: ['React', 'Vite', 'JavaScript', 'Vercel Functions', 'Upstash Redis', 'Server-Sent Events'],
    points: [
      'Rank-to-rank price calculator with rank pickers, steppers, and a sticky running total.',
      'Rate cards and calculator both read from one pricing module, so rates only ever change in one place.',
      "Theme picker with 13 color themes based on Kagura's skins, each with its own splash art.",
      'Live visit counter: a serverless function streams new totals to the browser with Server-Sent Events, backed by Upstash Redis.',
      'How-it-works, FAQ, and contact sections, plus a short how-to-use promo video.',
    ],
  },
  {
    id: 'clipshelf',
    category: 'mac',
    badge: 'macOS app',
    title: 'ClipShelf',
    tagline: 'Everything you copy. In one place.',
    subtitle: 'Clipboard history manager for the Mac',
    kind: 'Personal project',
    platform: 'macOS',
    year: '2026',
    cover: '/projects/clipshelf.jpg',
    summary:
      'A menu-bar clipboard manager that keeps everything you copy (text, links, images, and files), searchable from anywhere with one shortcut.',
    problem:
      "macOS only remembers the last thing you copied. Anything copied before it is gone.",
    solution:
      'ClipShelf quietly saves your clipboard history, lets you search and filter it, and brings it up from any app with ⌃⌘V.',
    role: 'Design and development of the app, its release pipeline, and its promo videos.',
    stack: ['Swift', 'SwiftUI', 'AppKit', 'Swift Package Manager', 'Quick Look'],
    points: [
      'Captures text, links, images, and files, and remembers the website a link was copied from.',
      'Global ⌃⌘V shortcut opens the ClipShelf window from any app.',
      'Search and filter by kind, pin items to keep them, and preview anything with Quick Look.',
      'Re-copying something moves it back to the top instead of making a duplicate.',
      'Settings for how long items are kept and a disk budget; the oldest unpinned items are cleared first.',
      'Lives in the menu bar and only shows a Dock icon while its window is open.',
      'Release script builds a universal (Apple Silicon + Intel) app into a DMG, ready for signing and notarization; landscape and portrait promo videos made for launch.',
    ],
  },
  {
    id: 'mousey',
    category: 'mac',
    badge: 'macOS app',
    title: 'Mousey',
    tagline: 'Now it moves like a Magic Mouse.',
    subtitle: 'Mouse gestures and smooth scrolling for the Mac',
    kind: 'Personal project',
    platform: 'macOS',
    year: '2026',
    cover: '/projects/mousey.jpg',
    summary:
      'Makes a regular mouse feel like a Magic Mouse on macOS: smooth scrolling, plus side-button gestures for Mission Control, app switching, and Spaces.',
    problem:
      "Regular mice feel clunky on a Mac: scrolling jumps in steps, and the side buttons don't do anything useful outside the browser.",
    solution:
      'A small menu-bar app that turns wheel ticks into smooth, momentum scrolling and gives each side button configurable click, hold-and-scroll, and drag gestures.',
    role: 'Design and development of the app and its promo video.',
    stack: ['Swift', 'AppKit', 'CGEventTap', 'Accessibility API'],
    points: [
      'Global event tap that routes mouse button and scroll events system-wide.',
      'Side-button gestures: click for Mission Control or the previous app, hold and scroll for the app switcher, drag to switch Spaces or open App Exposé.',
      "Smooth scrolling with momentum and acceleration, adjustable speed and glide; trackpads and Magic Mice are left alone.",
      'Mouse wheels can scroll in the standard direction while the trackpad keeps natural scrolling.',
      'Runs from the menu bar with no Dock icon, with every gesture configurable in Settings.',
    ],
  },
  {
    id: 'tangerine',
    category: 'mac',
    badge: 'macOS app',
    title: 'TangerineClone',
    tagline: 'Hold ⇧ while dragging a file. Drop it to convert.',
    subtitle: 'Offline file converter in a radial wheel (Tangerine-inspired)',
    kind: 'Personal project',
    platform: 'macOS',
    year: '2026',
    cover: '/projects/tangerine.jpg',
    summary:
      'My own take on Tangerine for Mac: hold Shift while dragging a file and a wheel of conversions for that file type appears at the cursor. Drop it on one and the result is saved next to the original.',
    problem:
      'Converting a file usually means opening another app or uploading it to a website, which is slow and sends your files to someone else.',
    solution:
      'A zero-click, offline wheel right where you are already dragging, built only on Apple frameworks and tools that ship with macOS, with no network access at all.',
    role: 'Design and development, including the radial overlay, file tools, and settings.',
    stack: ['Swift', 'SwiftUI', 'AppKit', 'AVFoundation', 'PDFKit', 'Vision'],
    points: [
      'Shift-drag a file to get a wheel of conversions for its type; add Option for a wheel of actions.',
      'Up to 8 tools per wheel, offering only what this Mac can actually produce; results are written next to the original and never overwrite it.',
      'PDF to Word with real Word tables, and Word to PDF through Microsoft Word when it is installed.',
      'Near a screen edge the wheel becomes a 180° fan so every label still fits.',
      "Follows the system accent color and Liquid Glass look, with a wooden tick sound and trackpad tap as you move between options.",
      'Completely offline: no network calls, analytics, or update checks.',
    ],
  },
]

export const skills = [
  {
    group: 'Front-End',
    items: ['ReactJS (Vite)', 'Next.js', 'TailwindCSS', 'React Native', 'Responsive UI Development', 'REST API Integration'],
  },
  {
    group: 'Back-End & Data',
    items: ['Supabase', 'PostgreSQL', 'Relational Database Design', 'Row-Level Security', 'Vercel Functions', 'Redis (Upstash)'],
  },
  {
    group: 'Mac Apps',
    items: ['Swift', 'SwiftUI', 'AppKit', 'Swift Package Manager'],
  },
  {
    group: 'Creative & Design',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects', 'Figma', 'UI/UX Design'],
  },
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'Apex (Salesforce)'] },
  {
    group: 'Game Development',
    items: [
      'Unity',
      'C#',
      'Animator Controllers',
      'Cinemachine',
      'Third- & first-person controllers',
      'Light & enemy behavior systems',
      'Checkpoint systems',
      'Terrain & audio setup',
    ],
  },
  {
    group: 'Salesforce',
    items: ['Declarative Automation', 'Data & Security Modeling', 'Visualforce', 'Lightning Web Components', 'Agentforce'],
  },
  { group: 'Networking', items: ['IP addressing', 'Basic troubleshooting'] },
  {
    group: 'AI & Development',
    items: ['Claude', 'Google Gemini', 'ChatGPT', 'AI-Assisted Coding', 'Prompt Engineering', 'Code Debugging'],
  },
  {
    group: 'Tools & Practices',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Vercel', 'Agile/Scrum', 'Debugging', 'Software Testing', 'SDLC'],
  },
]

export const certifications = [
  { name: 'Information Technology Specialist in Python', date: 'Oct 2026' },
  { name: 'Gemini Certified University Student', date: 'Sep 2026' },
  { name: 'Salesforce Supported Virtual Internship Program', date: 'Jan 2026' },
  { name: 'Agentblazer Champion Workshop', date: 'Sep 2025' },
  { name: 'Network Addressing and Basic Troubleshooting', date: 'Mar 2025' },
  { name: 'Introduction to HTML', date: 'Apr 2023' },
  { name: 'Blockchain 101', date: 'Apr 2023' },
]

export const education = {
  school: 'Bulacan State University',
  degree: 'BS Information Technology',
  major: 'Major in Web and Mobile Development',
  years: '2023 – 2027 (Expected)',
}

export const awards = [{ name: "President's Lister", org: 'Bulacan State University', date: '2024 – 2025' }]

export const interests = [
  'Game Development (Unity and 3D game design)',
  'Atmospheric and Story-Driven Game Design',
  'Web and Mobile Application Development',
  'Salesforce Development and AI Agents (Agentforce)',
  'Artificial Intelligence and AI-Assisted Development',
]
