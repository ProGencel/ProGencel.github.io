import flappyImg from './assets/images/FlappyDog.png'
import recImg from './assets/images/RectangleMachine.png'

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
      github: "https://github.com"
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
      itch: "",
      github: "https://github.com/ProGencel/FlappyDog"
    }
  }
];