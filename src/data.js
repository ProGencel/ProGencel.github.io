import flappyImg from './assets/images/FlappyDog.png'
import recImg from './assets/images/RectangleMachine.png'
import potatoImg from './assets/images/PotatoChaos.png'
import maskImg from './assets/images/ElementsOfMasks.png'

export const games = [
  {
    id: "game1",
    title: "Rectangle Machine",
    shortDesc: "A simple Java Swing app based on LeetCode problem 836. It compares two rectangles and checks if they overlap.",
    coverImage: recImg,
    platform: "PC",
    techStack: ["Java", "Swing"],
    themeColor: "from-stone-50 to-[#E07A5F]/10",
    links: {
      itch: "",
      github: "https://github.com/ProGencel/Rectangle-Machine"
    }
  },
  {
    id: "game2",
    title: "Flappy Dog",
    shortDesc: "Flappy Dog is a simple 2D game inspired by Flappy Bird, made with Java using the Swing library.I built this project mainly as a practice to understand how a basic game loop, rendering, and collision logic work in a desktop Java application.",
    coverImage: flappyImg,
    platform: "PC",
    techStack: ["Java", "Swing"],
    themeColor: "from-stone-50 to-purple-500/10",
    links: {
      itch: "https://progencel.itch.io/flappy-dog",
      github: "https://github.com/ProGencel/FlappyDog"
    }
  },
  {
    id: "game3",
    title: "Potato Chaos",
    shortDesc: "Potato Chaos is a game made with libGDX where you can explore surroundings and complete the main quest",
    coverImage: potatoImg,
    platform: "PC",
    techStack: ["Java", "libGDX"],
    themeColor: "from-stone-50 to-purple-500/10",
    links: {
      itch: "https://progencel.itch.io/potato-chaos",
      github: "https://github.com/ProGencel/PotatoChaosGame"
    }
  },
  {
    id: "game4",
    title: "Masks of Elements",
    shortDesc: "This game was developed with libGDX during Global Game Jam 2026. The theme was “Mask”. The player must choose the correct combination of six masks and complete the parkour within 15 seconds.",
    coverImage: maskImg,
    platform: "PC",
    techStack: ["Java", "libGDX"],
    themeColor: "from-stone-50 to-purple-500/10",
    links: {
      itch: "https://progencel.itch.io/masks-of-elements",
      github: "https://github.com/ProGencel/MaskGameJam"
    }
  },
];