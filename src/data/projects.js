// Games and projects. featured: true puts one on the front page; everything
// in this array shows on the full projects page.
//
// Thumbnails: drop the image in src/assets/, import it at the top of this
// file, then set thumbnail to the imported name. null renders the striped
// placeholder block instead.

export const projects = [
  {
    id: 'wax-out',
    title: 'Wax Out!',
    year: '2026',
    role: 'Gameplay engineer & UI/UX designer',
    blurb:
      'Built gameplay systems, UI components, and interactive features in Unity with C#. Worked alongside designers on player flows and interfaces, keeping usability aligned with the gameplay goals.',
    tools: ['Unity', 'C#', 'UI/UX'],
    link: '', // TODO: add itch.io or trailer link
    thumbnail: null,
    featured: true,
  },
  {
    id: 'open-alpha',
    title: 'Open Alpha', // TODO: swap in the actual game title
    year: '2025',
    role: 'Game design lead',
    blurb:
      'Co-designed and shipped a game on Steam and itch.io, leading character development, dialogue, and world-building. Worked with programmers to get narrative content and procedural systems running in Unity.',
    tools: ['Unity', 'Narrative Design', 'Steam'],
    link: '', // TODO: add Steam store link
    thumbnail: null,
    featured: true,
  },
]
