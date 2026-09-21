// Work, project and leadership history, pulled from public/resume.pdf.
// Newest first. id has to be unique -- it's the React list key.
// tools can be an empty array for roles with no tech stack.

export const experience = [
  {
    id: 'usc',
    period: '2024 — May 2028',
    role: 'B.S. Computer Science (Games)',
    org: 'University of Southern California',
    location: 'Los Angeles, CA',
    highlights: [
      'Coursework in Data Structures & Object-Oriented Design, Mobile Game Development, and Video Game Programming.',
      'HSF Scholar, HITEC Scholar, and QuestBridge Scholar.',
    ],
    tools: ['C++', 'C#', 'JavaScript', 'Unity', 'Unreal Engine'],
  },
  {
    id: 'usc-games-career-center',
    period: 'Sep 2026 — Present',
    role: 'Student Assistant',
    org: 'USC Games Career Center',
    location: 'Los Angeles, CA',
    highlights: [
      'Support career fairs, workshops, and industry events connecting USC Games students with studios, recruiters, and alumni.',
      'Coordinate events, student communications, and career resources promoting opportunities within the games industry.',
    ],
    tools: [],
  },
  {
    id: 'booz-allen',
    period: 'Jun 2026 — Aug 2026',
    role: 'Software Engineering Intern',
    org: 'Booz Allen Hamilton',
    location: 'El Segundo, CA',
    highlights: [
      'Led frontend and UX development across 80 React components and pages for a mission-planning application.',
      'Built an interactive React Three Fiber globe visualizing Earth, satellite orbits, ground assets, and coverage areas.',
      'Created mission tools featuring timeline playback, calendar scheduling, pipeline views, and constellation controls.',
      'Designed the landing page, 3D intro sequence, logo, and visual identity to establish cohesive product branding.',
      'Integrated REST APIs for mission-plan storage, location data, database routing, and TLE reloading.',
    ],
    tools: ['React', 'React Three Fiber', 'REST APIs', 'UI/UX'],
  },
  {
    id: 'lvlnity',
    period: 'Jan 2026 — Present',
    role: 'Backend & Full-stack Developer',
    org: 'Lvlnity',
    location: 'Los Angeles, CA',
    highlights: [
      'Co-founded and developed a scalable, game-inspired social platform for collaborative project sharing.',
      'Architected database schemas, REST APIs, authentication flows, and core backend application logic.',
      'Built secure full-stack features connecting responsive frontend interfaces with backend services.',
    ],
    tools: ['REST APIs', 'Databases', 'Authentication', 'Full-stack'],
  },
]
