// thumbnail covers:
import asteriusTitle from '../assets/AsteriusTitle.png'
import homesickCover from '../assets/homesick.jpg'
import neuromancerCover from '../assets/neuromancer.png'
import openYourBrowser from '../assets/open-your-browser.png'
import smoothTalking from '../assets/smooth-talking-pickpocket.png'
import urSoMessy from '../assets/ur-so-messy.jpg'

// breakdown diagrams (made in draw.io, still editable there):
import homesickMemSeq from '../assets/diagrams/homesick_memSeq.drawio.svg'
import homesickObjLife from '../assets/diagrams/homesick_objLife.drawio.svg'
import urSoMessyAffection from '../assets/diagrams/urSoMessy_affectionSystem.drawio.svg'

// featured = true -> goes on homepage
// summary = what the game is, contribution = what i did on it
//
// project page (/projects/<id>). all of this is optional, and the card only
// links to the page once the project has links or at least one breakdown:
//   engine, team, duration -> quick facts beside the trailer
//   links: [{ label: 'Play on itch.io', href: '...' }]
//   codeNote: a line under the links, for when the code can't be shared
//   breakdowns: [{ title, body or points, media, mediaAlt, caption, code }]
//     body = a paragraph, points = a list of bullet points.
//     **double stars** around words make them bold
//     media = an imported gif, image, or .mp4. code = link to the script
//     mediaAlt = what the media shows, for screen readers (title if left out)
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
    id: 'homesick',
    categories: ['Game Dev'],
    title: 'Homesick',
    year: '2026',
    role: 'Solo developer · CTIN 489',
    summary:
      'A first-person 3D narrative game about packing up your childhood home. You wander the house, pick up the things your family left behind, and relive the memory tied to each one before packing it away, until there’s nothing left to pack.',
    contribution:
      'What started as a class prototype became a game I kept building on my own until it was finished. I programmed the pickup system, a memory system where every memory lives in its own data file, the fade-to-black sequences that play them, and the packing goal that ends the game. I also designed the five objects and the family story they tell together.',
    tools: ['Unity', 'C#', '3D', 'Gameplay', 'Narrative', 'ScriptableObjects'],
    engine: 'Unity',
    team: 'Solo',
    duration: 'Sept–Oct 2026',
    links: [
      { label: 'Code on GitHub', href: 'https://github.com/dbandah07/Homesick' },
    ],
    breakdowns: [
      {
        title: 'Memory system',
        points: [
          'Each memory is its own ScriptableObject (an opening line plus the lines that follow), so adding one takes a new asset, not new code.',
          'The first pickup pauses the game, locks the camera, and fades to black while the memory plays line by line, skippable with E, Space, or a click.',
          'All the timing runs on unscaled time, so it keeps working while the game is paused.',
        ],
        media: homesickMemSeq,
      },
      {
        title: 'Pickup and hold',
        points: [
          'A sphere cast from the camera means small objects, like a mug, don’t need pixel-perfect aim.',
          '**Problem:** held objects bounced in front of the camera and pushed into the player, tilting the whole view.',
          '**Fix:** held objects become kinematic, attach to a grab point on the camera, and ignore the player’s collider until dropped.',
        ],
        media: homesickObjLife,
      },
      {
        title: 'Debugging the room’s scale',
        points: [
          '**Problem:** objects suddenly couldn’t be picked up at all.',
          'I logged what the pickup ray hit, its layer, and its distance, which showed it stopping 4+ meters away.',
          '**Cause:** I’d scaled the player up to match oversized furniture.',
          '**Fix:** rescaled the room to real-world size and reset the player’s height.',
        ],
      },
      {
        title: 'Scope and next steps',
        points: [
          'Cut a planned sticker journal to finish a complete loop first: explore, remember, pack, finish.',
          'The crate only counts objects after they’re dropped, so the “Packed: x/5” counter can’t be gamed.',
          'Next: hand-drawn memory sequences, which slot into the existing data-driven setup, and the sticker journal.',
        ],
      },
    ],
    thumbnail: homesickCover,
    featured: true,
  },
  {
    id: 'ur-so-messy',
    categories: ['Game Dev'],
    title: 'Ur So Messy!',
    year: '2026',
    role: 'Co-creator, Gameplay programmer & Technical designer · CTIN 489',
    status: 'Under development',
    summary:
      'A 2D dating sim where you’re juggling four or more suitors at once, with Valentine’s Day a month away. Over 10 days, you try to keep as many of them as you can. Matching minigames help you keep straight who’s who, but mix someone up and their affection drops.',
    contribution:
      'As a two-person team, my partner and I split programming, design, and art evenly. So far I’ve drawn a pixel-art profile for every character and built the matching minigame, the texting and dialogue system, and the full UI, along with an affection system that tracks how each suitor feels about you and shaders that wash out and hue-shift the cards so matches get harder to spot.',
    tools: ['Unity', 'C#', 'Gameplay', 'UI', 'Shader Graph', 'Ink', 'Pixel art'],
    engine: 'Unity',
    team: '2 people',
    duration: '12–13 weeks',
    codeNote:
      'Because of USC’s academic integrity policy I can’t share the code yet, but I’d be happy to walk through any of it upon request!',
    breakdowns: [
      {
        title: 'Matching and affection',
        points: [
          'Each suitor is a ScriptableObject holding their portrait, interest pictures, and affection values, so adding a suitor is data, not code.',
          'Each round deals one random interest picture per suitor and shuffles them, and you pair everyone up before a 30-second timer runs out.',
          'One AffectionManager that every scene can reach keeps each suitor’s score, so affection carries over between chats and the minigame. Correct matches with your date raise it, mix-ups involving your date lower it, and each suitor has their own reward and penalty values, so some care a lot more about mistakes than others.',
          'Each suitor’s bar eases toward their new score instead of jumping, and an event fires on every change so other systems can react to it.',
        ],
        media: urSoMessyAffection,
      },
      {
        title: 'Card wash-out shader',
        points: [
          'A URP Canvas Shader Graph with saturation and hue controls. Each round sets how grey the cards are and whether their hues get randomized.',
          'Every card gets its own copy of the material, so hues can differ from card to card.',
          '**Problem:** Shader Graph needed URP, but the project was on the Built-in pipeline.',
          '**Fix:** a hand-written shader as a stopgap, then migrating the project to URP, which was low-risk since the game is all 2D UI.',
          '**Playtesting:** testers said matching was a no-brainer, so the wash-out became the way to raise difficulty.',
        ],
      },
      {
        title: 'Ink texting system',
        points: [
          'Ink lines become chat bubbles, with a #match tag deciding whether a line is the suitor’s or yours, and Ink choices become reply buttons.',
          'Each chat saves its Ink state as JSON along with its message history, so leaving for the minigame and coming back picks up right where you left off.',
          'Each chat takes three choices, and as you gain more suitors, you can only talk to some of them each day. From Day 3 on, every day ends in the matching game.',
          'The current build plays through all 10 days and ends with a confession you can accept or turn down. Each suitor’s final affection will decide their ending: less than 30 (inclusive) gets no confession, 30–70 gets a “let’s keep this going” and over 70 (inclusive) gets a confession, each in that suitor’s own words. The goal is to collect as many confessions as you can, but to do that, you must juggle all suitors at once.',
          '**Playtesting:** testers expected more drama from a title like Ur So Messy!, so we rewrote the options to be messier and more chaotic.',
        ],
      },
      {
        title: 'Structuring the game',
        points: [
          'This was my first time structuring a game from scratch, so I reorganized scripts as it grew. For example, I turned the chat list that was copied into every chat scene into one shared prefab, with a DayUnlock script for the day each chat opens.',
          'Shared static data (who your date is, which chat you came from) carries state between scenes, so the right characters show up consistently everywhere.',
          '**Problem:** lost .meta files wiped script references across every scene.',
          '**Fix:** reattached scripts and Inspector fields scene by scene and restructured the folders so it was clear what belonged where.',
        ],
      },
    ],
    thumbnail: urSoMessy,
    featured: true,
  },
  {
    id: 'oyb',
    categories: ['Game Dev'],
    title: 'Open Your Browser (OYB)',
    year: '2025',
    role: 'Co-design lead · Open Alpha',
    status: 'Shipped',
    summary:
      'A 2D point-and-click adventure about an art student whose fan art accidentally slipped into their college portfolio. To get it back out, you have to fight through a desktop overrun with pop-ups, rogue minigames, and glitches to reach the admissions portal.',
    contribution:
      'As one of the two leads on a 10-person design team, I kept us organized and moving. I ran our brainstorms, kept the master design doc and weekly to-do lists, and made sure every idea was finalized before it went to programming. I also helped shape the story and ending, set the art style and colors, and answered programming’s questions about how things should work.',
    tools: ['Unity', 'Narrative design', 'Game design', 'Leadership'],
    engine: 'Unity',
    team: '20–30 people',
    duration: 'One semester',
    links: [
      { label: 'Play on itch.io', href: 'https://open-alpha-usc.itch.io/open-your-browser' },
    ],
    breakdowns: [
      {
        title: 'Leading the team',
        points: [
          'Ran brainstorms with the other leads before each general meeting to work through minigames and the storyline.',
          'Kept a weekly to-do list of what had to be finalized, so programming always had finished designs to build.',
          'When discussions drifted (which happened a lot), I brought us back to the goal and took notes so no decision got lost.',
        ],
      },
      {
        title: 'Story and art direction',
        points: [
          'Helped create the storyline and its ending: you only win by leaving your fan art submitted. Sell it out and you lose, even if you beat the boss.',
          'Helped set the game’s art style and color palette.',
        ],
      },
      {
        title: 'Working with programming',
        points: [
          'Built the master design doc and had designers sketch how their ideas would work, so programming could see exactly what we meant.',
          'Coordinated with the other leads on which art assets were needed, and answered programmers’ questions about functionality in Discord.',
          'Balancing big ideas against programming’s scope limits was constant. The weekly finalize lists kept us focused on what could actually ship.',
        ],
      },
      {
        title: 'Playtesting and launch',
        points: [
          'Playtesting showed the cookie clicker minigame was way too hard, so we made it easier.',
          'Shipped on itch.io.',
        ],
      },
    ],
    trailer: 'https://www.youtube.com/watch?v=HFW5g92OqKA',
    thumbnail: openYourBrowser,
    featured: true,
  },
  {
    id: 'neuromancer',
    categories: ['Game Dev', 'UI/UX'],
    title: 'Neuromancer',
    year: '2025',
    role: 'Programmer · Open Alpha',
    status: 'Shipped',
    summary:
      'A comedy narrative sim where you play an evil wizard whose minions keep showing up mid-crisis after losing to the hero. Brew them a potion or sit them down for therapy, because if they give up, so does your war effort.',
    contribution:
      'As part of the programming team, I built pieces of the main UI in Unity: the XP bar and the persistent XP manager behind it, a morale flower that changes as your minions lose heart, the flip-through book, and an SFX manager shared across scenes. During crunch week, I fixed the dialogue data for nine minion types so every line pointed to the right solution.',
    tools: ['Unity', 'C#', 'Gameplay', 'UI'],
    engine: 'Unity',
    team: '20–30 people',
    duration: 'One semester',
    links: [
      { label: 'Play on itch.io', href: 'https://open-alpha-usc.itch.io/neuromancer' },
    ],
    breakdowns: [
      {
        title: 'Main UI',
        points: [
          'XP bar that slides a sprite mask across the art to show progress as a percentage, instead of stretching the sprite.',
          'Added XP tracking to a shared XP manager that stays alive between scenes and calculates monster morale from current and total XP.',
          'A morale flower that swaps between full, half, and no-morale art based on troop state, plus a book with arrows that flip pages and wrap around.',
        ],
      },
      {
        title: 'Audio',
        points: [
          'Turned the SFX Manager and click sound into prefabs and replaced the scene-only copies in the main menu and main scene, so audio is set up in one place.',
        ],
      },
      {
        title: 'Crunch week',
        points: [
          '**Problem:** minion lines were pointing to the wrong solutions, so correct answers weren’t being counted correctly.',
          '**Fix:** went through the dialogue data for nine minion types and re-pointed each line to its correct solution.',
          'Turned leftover design notes (like “fidgeting, tapping fingers”) into in-character lines and cleaned up text that displayed wrong.',
        ],
      },
    ],
    trailer: 'https://www.youtube.com/watch?v=jCNF8_JqKMw',
    thumbnail: neuromancerCover,
    featured: true,
  },
  {
    id: 'smooth-talking-pickpocket',
    categories: ['Game Dev'],
    title: 'Smooth Talking Pickpocket',
    year: '2024',
    role: 'Designer · Open Alpha',
    status: 'Shipped',
    summary:
      'A narrative pickpocketing game set in a fake city, New London, where you’ve got five days to make a name for yourself as a thief before the gala. Every mark is a conversation held together by a trust bar, and a stealth minigame decides whether you walk away with their stuff or in handcuffs.',
    contribution:
      'As a member of the design team, I helped brainstorm, build narrative, and create characters alongside implementing their dialogue, including two that ended up being fan favorites.',
    tools: ['Unity', 'Dialogue implementation', 'Narrative design'],
    engine: 'Unity',
    team: '20–30 people',
    duration: 'One semester',
    links: [
      { label: 'Play on itch.io', href: 'https://open-alpha-usc.itch.io/smooth-talking-pickpocket' },
    ],
    trailer: 'https://www.youtube.com/watch?v=4jUYEbB-ga8',
    thumbnail: smoothTalking,
    featured: false,
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
    team: '4 people',
    duration: '3–4 weeks',
    thumbnail: asteriusTitle,
    gallery: asteriusGallery,
    galleryNoun: 'cards',
    featured: false,
  },
]
