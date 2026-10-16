// thumbnail covers:
import asteriusTitle from '../assets/AsteriusTitle.png'
import waxOut from '../assets/waxit!.png'
import neuromancerCover from '../assets/neuromancer.png'
import openYourBrowser from '../assets/open-your-browser.png'
import smoothTalking from '../assets/smooth-talking-pickpocket.png'

// featured = true -> goes on homepage
// summary = what the game is, contribution = what i did on it
const folder = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)

// character cards first, then the tool and trap decks
const asteriusGallery = [
  ...folder(
    import.meta.glob('../assets/asterius_chars/*.png', {
      eager: true,
      import: 'default',
    }),
  ),
  ...folder(
    import.meta.glob('../assets/asterius_assets/*.png', {
      eager: true,
      import: 'default',
    }),
  ),
]

export const projects = [
  {
    id: 'wax-out',
    categories: ['Game Dev', 'UI/UX'],
    title: 'Wax Out!',
    year: '2025-2026',
    role: 'Gameplay engineer & UI/UX designer',
    summary: '',
    contribution:
      'I handled a lot of the gameplay and UI programming in Unity and C#, and worked closely with our designers on player flows so the interface actually helped you play instead of getting in the way.',
    tools: ['Unity', 'C#', 'Gameplay', 'UI'],
    thumbnail: waxOut,
    featured: true,
  },
  {
    id: 'neuromancer',
    categories: ['Game Dev', 'UI/UX'],
    title: 'Neuromancer',
    year: '2025',
    role: 'Programmer · Open Alpha',
    summary:
      'A comedy narrative sim where you play an evil wizard whose minions keep showing up mid-crisis after losing to the hero. Brew them a potion or sit them down for therapy, because if they give up, so does your war effort.',
    contribution:
      'As part of the programming team, I worked on gameplay and UI features in Unity, implementing things like the health bar, timer countdowns, and last minute debugging/rewiring during crunch week',
    tools: ['Unity', 'C#', 'Gameplay', 'UI'],
    trailer: 'https://www.youtube.com/watch?v=jCNF8_JqKMw',
    thumbnail: neuromancerCover,
    featured: true,
  },
  {
    id: 'oyb',
    categories: ['Game Dev'],
    title: 'Open Your Browser (OYB)',
    year: '2025',
    role: 'Co-design lead · Open Alpha',
    summary:
      'A 2D point-and-click adventure about an art student whose fan art accidentally slipped into their college portfolio. To get it back out, you have to fight through a desktop overrun with pop-ups, rogue minigames, and glitches to reach the admissions portal.',
    contribution:
      'As one of the design leads, I owned the characters, dialogue, and world-building, and worked closely with our programmers to get the story and procedural systems running in Unity before we shipped it on itch.io.',
    tools: ['Unity', 'Narrative design', 'Systems', 'Leadership'],
    trailer: 'https://www.youtube.com/watch?v=HFW5g92OqKA',
    thumbnail: openYourBrowser,
    featured: true,
  },
  {
    id: 'smooth-talking-pickpocket',
    categories: ['Game Dev'],
    title: 'Smooth Talking Pickpocket',
    year: '2024',
    role: 'Designer · Open Alpha',
    summary:
      'A narrative pickpocketing game set in a fake city, New London, where you’ve got five days to make a name for yourself as a thief before the gala. Every mark is a conversation held together by a trust bar, and a stealth minigame decides whether you walk away with their stuff or in handcuffs.',
    contribution:
      'As a member of the design team, I helped brainstorm, build narrative, and create characters alongside implementing their dialogue, including two that ended up being fan favorites.',
    tools: ['Unity', 'Dialogue implementation', 'Narrative design'],
    trailer: 'https://www.youtube.com/watch?v=4jUYEbB-ga8',
    thumbnail: smoothTalking,
    featured: true,
  },
  {
    id: 'asterius',
    categories: ['Board Games'],
    title: 'Asterius',
    year: '2024',
    role: 'Designer & artist · CTIN 488',
    summary:
      'A 3v1 board game where three heroes push into a spiraling labyrinth after the treasure at its center, and the fourth player is the labyrinth itself. It spends the game rotating tiles out from under them, hiding traps, flooding the maze with gas after five rounds, and finally releasing the Guardian the moment the treasure moves.',
    contribution:
      'I drew all of the art, from the character cards to the tool and trap decks, and designed the game mechanics and flow alongside my teammates.',
    tools: ['Board game', 'Systems design', 'Illustration'],
    thumbnail: asteriusTitle,
    gallery: asteriusGallery,
    galleryNoun: 'cards',
    featured: true,
  },
]
