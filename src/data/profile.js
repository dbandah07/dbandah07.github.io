// profile
// headshot-web.jpg is the cropped, resized copy of headshot.JPG with the
// camera metadata (GPS) stripped. the original stays out of git
import headshot from '../assets/headshot-web.jpg'

export const profile = {
  name: 'Daniela Banda-Hernandez',
  role: 'Gameplay & UI Programmer / Technical Designer',
  tagline:
    'Hi! I’m a Computer Science Games student at USC who programs gameplay and UI in Unity and C#, and also works in C++. When I’m not building games, I’m usually designing and building websites.',
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
      'Making games is how I keep getting better as a programmer and keep evolving as a designer, but they meant something to me long before I ever made one. I grew up in a small town in Wisconsin, where my dad worked from sunrise to midnight to keep us afloat. Somehow he still made time for me and my siblings, and it was almost always a quick round of Mortal Kombat when he got home, since we were still up pestering my mom. Those ten-minute matches are some of my favorite memories from being a kid, and they’re a big part of why I make games now. I want to make games that give people that same feeling, whether it’s a story that sticks with them or a few minutes that bring them closer to someone they love.',
      'Outside of games, I’m minoring in Spanish and hoping to study abroad in Mexico City soon! As the daughter of Mexican immigrants, keeping my Spanish is a big part of who I am. I’m also Co-VP of Marketing for our SHPE chapter (so if you’ve seen one of our flyers, I probably made it!), and when I’m not buried in projects, I volunteer as much as I can, especially with anything that helps more Latinos get into STEM or go to college. Someday I hope to help make more room for us in the games industry, and for now that looks like showing up for the people coming up next to me.',
      'And somewhere in there, I taught myself guitar from YouTube videos! (I refused to learn Wonderwall.)',
    ],
  },
}
