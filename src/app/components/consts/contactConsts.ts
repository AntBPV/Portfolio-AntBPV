import { GithubIcon, InstagramIcon, LinkedinIcon, ContactIcon } from "../icons";

interface contactData {
  id: string;
  icon: React.ComponentType<{
    size: number;
  }>;
  title: string;
  link: string;
  url?: string;
}

export const contactConsts: contactData[] = [
  {
    id: "github",
    icon: GithubIcon,
    title: "Github",
    link: "Go to Github Profile",
    url: "https://github.com/AntBPV",
  },
  {
    id: "linkedin",
    icon: LinkedinIcon,
    title: "Linkedin",
    link: "Go to Linkedin Profile",
    url: "https://www.linkedin.com/in/antonio-benjamin-parra-velasquez-242801353/",
  },
  {
    id: "email",
    icon: ContactIcon,
    title: "Email",
    link: "Send me an email",
    url: "mailto:antonio.benja.parra.velasquez@gmail.com",
  },
  {
    id: "instagram",
    icon: InstagramIcon,
    title: "Instagram",
    link: "Go to Instagram Profile",
    url: "https://www.instagram.com/antonio_benja_vel/",
  },
];
