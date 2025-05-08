export interface CardData {
  title: string;
  description: string;
  color: string;
}

export const cardConsts: CardData[] = [
  {
    title: "Who's This?",
    description:
      "Hi, I’m Anthony — a backend software developer based in Colombia, currently pursuing a degree in Software Engineering at UCC.",
    color: "color-border",
  },
  {
    title: "What Purpose?",
    description:
      "I enjoy building useful tools for others. When a project inspires people by showcasing someone else's ideas, that's the true sign of meaningful work.",
    color: "color-primary",
  },
  {
    title: "What I Like?",
    description:
      "I have a lot of interests. I love games—feel free to share any recommendations! I also enjoy playing the guitar, reading, and I’m currently learning to compose music.",
    color: "color-accent-primary",
  },
];
