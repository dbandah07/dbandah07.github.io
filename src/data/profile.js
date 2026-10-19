// profile
// headshot-web.jpg is the cropped, resized copy of headshot.JPG with the
// camera metadata (GPS) stripped. the original stays out of git
import headshot from '../assets/headshot-web.jpg'

export const profile = {
  name: 'Daniela Banda-Hernandez',
  role: 'Gameplay Programmer & UI/UX Engineer',
  tagline:
    'Hi! I’m a current Computer Science Games student at USC who programs gameplay and UI in Unity and C#. When not building, or designing games, I build and design websites.',
  location: 'Los Angeles, CA',

  // school, degree, and graduation date
  education: {
    degree: 'B.S. Computer Science (Games)',
    school: 'University of Southern California',
    period: 'Expected May 2028',
  },
  email: 'dbh7202006@gmail.com',

  // public/resume.pdf -> /resume.pdf
  resumeUrl: '/resume.pdf',

  links: [
    { label: 'GitHub', href: 'https://github.com/dbandah07' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniela-banda-hernandez',
    },
  ],

  // about page. headshot: null shows the placeholder box
  about: {
    headshot,
    bio: [
      'Making games is how I keep getting better as a programmer and keep evolving as a designer, but they meant something to me long before I ever made one. Growing up, my family lived paycheck to paycheck, and my dad worked from sunrise to midnight to provide for us. Somehow he still made time for us, and it was always some little match of Mortal Kombat. So I grew up seeing games as a way to relax and have fun, but also as a way to tell a story and bond with the people you love, even if you only have ten minutes for a battle. That time was so precious to me as a kid, and it still is twenty years later.',
      'When I’m not coding I’m usually designing something as Co-VP of Marketing for our SHPE chapter, so a lot of the flyers and graphics you’ll see from us are mine. And somewhere in there, I taught myself guitar from YouTube videos.',
    ],
  },
}
