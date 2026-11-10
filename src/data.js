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
// `color` tints the project's page and card glow; `icon` is its logo in public/icons/.
export const projects = [
  {
    id: 'sakay',
    color: '#2563eb',
    icon: '/icons/sakay.png',
    features: [
      { title: "Search by landmark", text: "Type a mall, school, church or terminal and get autocomplete plus \"did you mean…\" suggestions." },
      { title: "Multi-leg trips", text: "The database chains rides from different routes, walking transfers included, like MRT-3 Cubao to LRT-2 Cubao." },
      { title: "Map and fares", text: "Pickup, drop-off and numbered transfer pins on a Leaflet map, with regular and student/senior/PWD fares per leg." },
      { title: "Ask once, help many", text: "A Q&A board that shows similar answered threads before you post, with upvotes and best answers." },
      { title: "Live terminal hours", text: "An \"Open now / Closed\" badge that flips exactly at opening and closing time." },
      { title: "Community-checked", text: "Routes get \"Still accurate / Outdated\" votes, and new ones go through moderation first." },
    ],
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
  },
  {
    id: 'dalo',
    color: '#0f766e',
    icon: '/icons/dalo.png',
    features: [
      { title: "QR tickets", text: "Every attendee gets a ticket tied to their account, with a 128-bit code that can't be guessed." },
      { title: "Scan in, scan out", text: "Any officer's phone becomes a scanner, and every scan is logged with who and when." },
      { title: "Self check-in", text: "A projector shows a QR code that changes every 30 seconds and only works during the event." },
      { title: "Reports that tally themselves", text: "Live attendance stats, filters, CSV export and printing." },
      { title: "Certificates that make themselves", text: "PDF e-certificates for everyone who met the rule, each with a public verification QR." },
      { title: "Hard to fake", text: "Rules live in the database, not just the UI, so attendees can't edit their own records." },
    ],
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
  },
  {
    id: 'ilabcict',
    color: '#b4371f',
    icon: '/icons/ilabcict.png',
    features: [
      { title: "Tickets with tracking numbers", text: "Maintenance requests replace chats, logbooks and verbal requests." },
      { title: "QR codes on equipment", text: "Scan a computer to open its record and repair history." },
      { title: "Role-based access", text: "Separate views for faculty, technicians and administrators." },
      { title: "Admin dashboard and reports", text: "Request status, response times and automated reports in one place." },
    ],
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
  },
  {
    id: 'fogbound',
    color: '#1e3a5f',
    icon: '/icons/fogbound.svg',
    features: [
      { title: "Quest chain with a compass", text: "Journal pages lead you island to island, and the compass always points to the next one." },
      { title: "A storm that fights back", text: "Rising tides, muffled rain indoors, distance-delayed thunder, and lightning that hunts you in the open." },
      { title: "Shadow demons", text: "They rise from the sea on every lightning flash; a holy cross burns them away." },
      { title: "Boats, swimming, stamina", text: "Rowboat buoyancy and rowing, plank collecting and boat upgrades." },
      { title: "Saves and touch controls", text: "JSON save slots, a settings menu, an intro cutscene and on-screen controls." },
      { title: "Three platforms", text: "Builds for Windows, macOS and iOS." },
    ],
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
  },
  {
    id: 'jinx',
    color: '#dc2626',
    icon: '/icons/jinx.svg',
    features: [
      { title: "Rank-to-rank calculator", text: "Pick your current and target rank and get the exact total, with a sticky running price." },
      { title: "One source of truth", text: "Rate cards and the calculator read from the same pricing module." },
      { title: "13 Kagura themes", text: "A theme picker based on Kagura's skins, each with its own splash art." },
      { title: "Live visit counter", text: "A serverless function streams new totals with Server-Sent Events, backed by Upstash Redis." },
    ],
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
  },
  {
    id: 'clipshelf',
    color: '#ea580c',
    icon: '/icons/clipshelf.png',
    features: [
      { title: "Remembers everything", text: "Text, links, images and files, plus the website a link was copied from." },
      { title: "⌃⌘V from anywhere", text: "A global shortcut opens ClipShelf from any app." },
      { title: "Search, filter, pin", text: "Find anything by kind, pin what you want to keep, and preview with Quick Look." },
      { title: "No duplicates", text: "Copying something again moves it back to the top." },
      { title: "Tidies itself", text: "Set how long items are kept and a disk budget; the oldest unpinned items go first." },
      { title: "Ready to ship", text: "A universal (Apple Silicon + Intel) DMG build script and launch promo videos." },
    ],
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
  },
  {
    id: 'mousey',
    color: '#6366f1',
    icon: '/icons/mousey.png',
    features: [
      { title: "Side-button gestures", text: "Click for Mission Control, hold and scroll for the app switcher, drag to switch Spaces." },
      { title: "Smooth scrolling", text: "Wheel ticks become momentum scrolling, with adjustable speed and glide." },
      { title: "Both directions, sorted", text: "Mouse wheels scroll the standard way while the trackpad stays natural." },
      { title: "Stays out of the way", text: "Lives in the menu bar with no Dock icon; trackpads and Magic Mice are left alone." },
    ],
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
  },
  {
    id: 'tangerine',
    color: '#f2785c',
    icon: '/icons/tangerine.png',
    features: [
      { title: "Shift-drag for a wheel", text: "Drag a file while holding Shift and its conversions appear at the cursor; add Option for actions." },
      { title: "Only what works", text: "Up to 8 tools per wheel, showing only what this Mac can produce, and never overwriting files." },
      { title: "PDF ⇄ Word", text: "PDF to Word with real tables, and Word to PDF through Microsoft Word when it's installed." },
      { title: "Feels native", text: "Follows your accent colour and Liquid Glass, with a wooden tick and trackpad tap as you move." },
      { title: "Edge-aware", text: "Near a screen edge the wheel becomes a 180° fan so every label fits." },
      { title: "100% offline", text: "No network calls, analytics or update checks." },
    ],
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
