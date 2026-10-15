export const profile = {
  // Non-breaking space keeps the surname "Dela Rosa" on one line when the name wraps.
  name: 'Kurt Tristan R. Dela\u00a0Rosa',
  shortName: 'Kurt Tristan',
  role: 'Front-end & game developer',
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
  objective:
    'Aspiring game and software developer with hands-on experience building 3D games in Unity and C#, plus training in Salesforce development, web fundamentals, and networking. Seeking an internship or entry-level role where I can apply my technical and problem-solving skills and keep growing as a developer.',
}

export const featured = {
  id: 'fogbound',
  title: 'Fogbound',
  tagline: 'A storm-swept horror survival game on a lost archipelago. The fog will not let you leave.',
  stats: [
    { value: 'Unity 6', label: 'Built in C#' },
    { value: '3', label: 'Difficulty levels' },
    { value: '3', label: 'Platforms: Windows, macOS, iOS' },
  ],
}

export const projects = [
  {
    id: 'fogbound',
    summary:
      "A 3D horror-survival game where you row between fog-bound islands, following a lost keeper's journal to light a signal fire and escape.",
    problem:
      'Make a small archipelago feel dangerous and alive. Players need constant pressure from storms, tides, and monsters, without ever losing track of where to go next.',
    solution:
      'An ordered quest chain with a compass HUD and readable journal pages keeps direction clear, while a storm system, rising tides, and shadow demons supply the pressure. A holy cross and boat upgrades give the player ways to fight back.',
    role: 'Gameplay programming in Unity 6 and C#: quest, storm, enemy, boat, and survival systems, plus UI, saving, and platform builds.',
    title: 'Fogbound',
    subtitle: '3D Horror / Survival Adventure',
    kind: 'Unity Game Project',
    platform: 'Windows · macOS · iOS',
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
    id: 'ilabcict',
    team: true,
    summary:
      "A web and mobile platform our capstone team built to replace chats, logbooks, and verbal requests for BulSU CICT lab maintenance with one ticketing and equipment-tracking system.",
    problem:
      "Lab issues at BulSU's CICT were reported informally through chats, logbooks, and verbal requests, so requests were hard to track and repair history was scattered.",
    solution:
      'We built centralized ticketing with tracking numbers, QR codes on equipment, a computer inventory with repair history, automated reports, and role-based access for faculty, technicians, and administrators.',
    role: 'Developer on the capstone team, working in Agile Scrum with daily standups and Figma prototypes. The web app is deployed on Vercel.',
    title: 'iLabCICT',
    subtitle: 'Laboratory Maintenance & Technical Support Management System',
    kind: 'BSIT Capstone Project · Team',
    platform: 'Web · Mobile',
    date: 'March 2026',
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
    id: 'lost-light',
    summary: 'A 2D adventure/survival game where how brightly you glow changes what you can see and how enemies react.',
    problem:
      "Turn the team's game design document and 18-scene storyboard into a playable game with real risk-reward choices.",
    solution:
      'A light system with three glow levels that drain energy at different rates, Light Essence orbs that restore energy and set checkpoints, and terrain like swamps that slows movement and drains light.',
    role: 'Developer: built the complete game from concept to playable build, including player control, enemy behavior, checkpoints, and level flow.',
    title: 'Lost Light',
    subtitle: '2D Adventure / Survival Game',
    kind: 'BSIT Game Project',
    platform: 'Android · PC',
    stack: ['Unity', 'C#'],
    points: [
      'Developed the complete game from concept to playable build, implementing all core gameplay systems, including player control, enemy behavior, checkpoints, and level flow.',
      'Programmed a light management system with three glow levels (dim, medium, bright) that drains energy at different rates and changes both visibility and enemy behavior.',
      'Built a Light Essence checkpoint system where collectible orbs restore energy and set respawn points, adding risk-reward decisions to progression.',
      'Implemented varied terrain (dark forest, swamp) that affects movement speed and light drain.',
      "Translated the team's game design document and 18-scene storyboard into a working game.",
    ],
  },
  {
    id: 'hive',
    summary: 'Mobile interface design for a dormitory management system, prototyped and refined in Figma.',
    problem:
      'The dormitory management system needed a mobile interface that was easy to navigate and consistent with the rest of the system.',
    solution:
      'Figma prototypes for the mobile app, refined through iterations on layouts, navigation, and components based on project requirements and team feedback.',
    role: 'Mobile UI/UX designer: designed, prototyped, and reviewed the mobile screens, working with the team to align them with the overall system design.',
    title: 'Hive',
    subtitle: 'Dormitory Management System',
    kind: 'BSIT Group Project',
    platform: 'Mobile UI/UX',
    stack: ['Figma', 'UI/UX Design', 'Mobile Interface Design'],
    points: [
      'Designed the mobile user interface for a dormitory management system using Figma.',
      'Refined mobile layouts, navigation, and interface components to improve usability and consistency.',
      'Created and iterated on mobile UI prototypes based on project requirements and team feedback.',
      'Collaborated with team members to align the mobile interface with the overall system design.',
    ],
  },
]

export const skills = [
  {
    group: 'Front-End',
    items: ['ReactJS (Vite)', 'TailwindCSS', 'React Native', 'Responsive UI Development', 'REST API Integration'],
  },
  {
    group: 'Creative & Design',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects', 'Figma', 'UI/UX Design'],
  },
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'Apex (Salesforce)'] },
  { group: 'Databases', items: ['PostgreSQL', 'Relational Database Design'] },
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
