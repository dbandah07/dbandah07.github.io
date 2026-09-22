// thumbnail covers:
import invasionOfAI from '../assets/InvasionofAIintheScientificCommunity.png'
import laVivaVidaCover from '../assets/LaVivaVida/Banda_D_LaVivaVida_SnrProj7.jpg'
import asteriusTitle from '../assets/AsteriusTitle.png'
import waxOut from '../assets/waxit!.png'
import neuromancerCover from '../assets/neuromancer.png'
import openYourBrowser from '../assets/open-your-browser.png'
import prettyGirls from '../assets/prettygirls.jpg'
import recuerdame from '../assets/recuerdame.jpg'
import smoothTalking from '../assets/smooth-talking-pickpocket.png'
import hwangHyunjin from '../assets/theprince.jpg'
import theRockstar from '../assets/therockstar.jpg'
import youth from '../assets/youth.jpg'

// featured = true -> goes on homepgae
const folder = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)

    
// magazine spreads, cover first -> back cover
const laVivaVidaPages = folder(
  import.meta.glob('../assets/LaVivaVida/*.jpg', {
    eager: true,
    import: 'default',
  }),
)

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
    blurb:
      'Built gameplay systems, UI components, and interactive features in Unity with C#. Worked alongside designers on player flows and interfaces, keeping usability aligned with the gameplay goals.',
    tools: ['Unity', 'C#', 'UI/UX'],
    link: '',
    thumbnail: waxOut,
    featured: true,
  },
  {
    id: 'oyb',
    categories: ['Game Dev'],
    title: 'Open Your Browser (OYB)',
    year: '2025',
    role: 'Design lead · Open Alpha',
    blurb:
      "A point-and-click 2D adventure where you play an art student trying to unsubmit the fan art that slipped into a college portfolio, fighting through a desktop overrun with pop-ups, rogue minigames, and glitches to reach the admission portal. Co-design lead on the team that shipped it to itch.io. Led character development, dialogue, and world-building, and worked with programmers to get narrative content running in Unity.",
    tools: ['Unity', 'Narrative Design', 'Design', 'Leadership'],
    link: 'https://open-alpha-usc.itch.io/open-your-browser',
    thumbnail: openYourBrowser,
    featured: true,
  },
  {
    id: 'neuromancer',
    categories: ['Game Dev'],
    title: 'Neuromancer',
    year: '2025',
    role: 'Programming team · Open Alpha',
    blurb:
      'A humorous narrative simulation where you play an evil wizard whose minions keep turning up mid-crisis after losing to the hero. Brew them a potion or sit them down for therapy, because if they give up, so does your war effort. On the programming team, implementing gameplay and UI pieces in Unity, the health bar among them.',
    tools: ['Unity', 'Programming'],
    link: 'https://open-alpha-usc.itch.io/neuromancer',
    thumbnail: neuromancerCover,
    featured: true,
  },
  {
    id: 'smooth-talking-pickpocket',
    categories: ['Game Dev'],
    title: 'Smooth Talking Pickpocket',
    year: '2024',
    role: 'Design team · Open Alpha',
    blurb:
      "A narrative pickpocketing adventure set in New London, where you play a thief with five days to build a reputation before the gala. Every mark is a conversation held together by a trust bar, and a stealth minigame decides whether you leave with their item or in handcuffs. On the design team, doing character work and dialogue implementation, including two of the game's fan-favorite characters.",
    tools: ['Unity', 'Narrative Design', 'Design'],
    link: 'https://open-alpha-usc.itch.io/smooth-talking-pickpocket',
    thumbnail: smoothTalking,
    featured: true,
  },
  {
    id: 'asterius',
    categories: ['Board Games', 'Art'],
    title: 'Asterius',
    year: '2024',
    role: 'Art & design · CTIN 488',
    blurb:
      'A 3v1 tabletop board game where three heroes push into a spiraling labyrinth for the treasure at its center, and the fourth player is the labyrinth itself, rotating tiles out from under them, hiding traps on the board, flooding the maze with gas after five rounds, and releasing the Guardian the moment the treasure moves. Did most of the art and design, including the character cards and the tool and trap decks.',
    tools: ['Board game', 'Illustration', 'Systems design'],
    link: '',
    thumbnail: asteriusTitle,
    gallery: asteriusGallery,
    galleryNoun: 'cards',
    featured: true,
  },

  // art: .
  {
    id: 'invasion-of-ai',
    categories: ['Art'],
    title: 'Invasion of AI in the Scientific Community',
    year: '2025',
    medium: 'Graphic designer · The Nucleus',
    blurb:
      'Editorial graphic for a Nucleus article on how far AI has pushed into scientific research.',
    tools: [],
    link: '',
    thumbnail: invasionOfAI,
    gallery: [invasionOfAI],
    featured: false,
  },
  {
    id: 'la-viva-vida',
    categories: ['Art'],
    title: 'La Viva Vida',
    year: '2024',
    medium: 'Articles and illustrations · Senior magazine',
    tools: [],
    link: '',
    thumbnail: laVivaVidaCover,
    gallery: laVivaVidaPages,
    galleryNoun: 'pages',
    art: true,
    featured: false,
  },
  {
    id: 'recuerdame',
    categories: ['Art'],
    title: 'Recuerdame',
    year: '2024',
    medium: 'Type Design',
    tools: [],
    link: '',
    thumbnail: recuerdame,
    gallery: [recuerdame],
    art: true,
    featured: false,
  },
  {
    id: 'pretty-girls',
    categories: ['Art'],
    title: 'Pretty Girls',
    year: '2024',
    medium: 'Mixed media',
    tools: [],
    link: '',
    thumbnail: prettyGirls,
    gallery: [prettyGirls],
    art: true,
    featured: false,
  },
  {
    id: 'hwang-hyunjin',
    categories: ['Art'],
    title: 'Hwang Hyunjin',
    year: '2023',
    medium: 'Pencil',
    tools: [],
    link: '',
    thumbnail: hwangHyunjin,
    gallery: [hwangHyunjin],
    art: true,
    featured: false,
  },
  {
    id: 'youth',
    categories: ['Art'],
    title: 'Youth?',
    year: '2022',
    medium: 'Digital illustration',
    tools: [],
    link: '',
    thumbnail: youth,
    gallery: [youth],
    art: true,
    featured: false,
  },
  {
    id: 'the-rockstar',
    categories: ['Art'],
    title: 'The Rockstar',
    year: '2021',
    medium: 'Pencil',
    tools: [],
    link: '',
    thumbnail: theRockstar,
    gallery: [theRockstar],
    art: true,
    featured: false,
  },
]
