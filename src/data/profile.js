// Shared site info. Components read from here, so a value only has to
// change in one place.

export const profile = {
  name: 'Daniela Banda-Hernandez',
  role: 'Game Programmer & Designer',
  tagline:
    'Computer science student at USC Games building gameplay systems, interfaces, and interactive 3D experiences in Unity, React, and C#.',
  location: 'Los Angeles, CA',

  // sits under the name in the header, not in the experience list
  education: {
    degree: 'B.S. Computer Science (Games)',
    school: 'University of Southern California',
    period: 'Expected May 2028',
  },
  email: 'dbh7202006@gmail.com',

  // public/ is served from the site root, so public/resume.pdf -> /resume.pdf
  resumeUrl: '/resume.pdf',

  links: [
    { label: 'GitHub', href: 'https://github.com/dbandah07' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniela-banda-hernandez',
    },
  ],
}
