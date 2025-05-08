interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  href: string;
}

export const projectConsts: ProjectCardProps[] = [
  {
    category: "Web Development",
    title: "Steam Tracker",
    description:
      "Steam Tracker is a web app using SteamWebApi to track user stats like hours played, games owned and more",
    tags: ["Typescript", "React", "Deployed on Vercel"],
    imageSrc: "/images/projects/steam-tracker.png",
    href: "https://steam-tracker.vercel.app/",
  },
];
