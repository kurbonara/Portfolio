export const profile = {
  name: 'Kurt Tristan R. Dela Rosa',
  shortName: 'Kurt Tristan',
  location: 'Mojon, City of Malolos, Bulacan',
  phone: '+63-948-253-8193',
  phoneHref: 'tel:+639482538193',
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
    title: 'iLabCICT',
    subtitle: 'Laboratory Maintenance & Technical Support Management System',
    kind: 'BSIT Capstone Project',
    platform: 'Web · Mobile',
    stack: ['ReactJS (Vite)', 'TypeScript', 'TailwindCSS', 'React Native', 'Django', 'PostgreSQL', 'Figma'],
    points: [
      "Developed a web and mobile platform for BulSU's CICT laboratories to replace informal reporting (chats, logbooks, verbal requests) with a centralized ticketing and equipment tracking system.",
      'Built maintenance request ticketing with tracking numbers, QR code equipment access, computer inventory, repair history, and automated report generation.',
      'Implemented role-based access for faculty, technicians, and administrators, plus an admin dashboard for request status and response times.',
      'Worked in an Agile Scrum process with daily standups and Figma prototyping; deployed the web app on Vercel.',
      'Evaluated against ISO/IEC 25010:2023 quality characteristics.',
    ],
  },
  {
    id: 'lost-light',
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
  { name: 'Information Technology Specialist — Python', date: 'Oct 2026' },
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
