import {
  HomeIcon,
  HomeIconHover,
  CodeIcon,
  CodeIconHover,
  GuitarIcon,
  GuitarIconHover,
  AboutIcon,
  AboutIconHover,
  ResumeIcon,
  ResumeIconHover,
  LinkedinIcon,
  LinkedinIconHover,
  ContactIcon,
  ContactIconHover,
} from "../icons";

export interface MenuItemData {
  href: string;
  defaultIcon: React.ComponentType<{
    color?: string;
    size?: number;
    className?: string;
  }>;
  hoverIcon: React.ComponentType<{
    color?: string;
    size?: number;
    className?: string;
  }>;
  label: string;
  highLightLabel: boolean;
  colorfulHover?: boolean;
  download?: boolean;
  external?: boolean;
}

export const menuConsts: MenuItemData[] = [
  {
    href: "/",
    defaultIcon: HomeIcon,
    hoverIcon: HomeIconHover,
    label: "Home",
    highLightLabel: false,
    colorfulHover: false,
  },
  {
    href: "#code",
    defaultIcon: CodeIcon,
    hoverIcon: CodeIconHover,
    label: "Software Projects",
    highLightLabel: true,
    colorfulHover: true,
  },
  {
    href: "/",
    defaultIcon: GuitarIcon,
    hoverIcon: GuitarIconHover,
    label: "Personal Projects",
    highLightLabel: true,
    colorfulHover: true,
  },
  {
    href: "#about",
    defaultIcon: AboutIcon,
    hoverIcon: AboutIconHover,
    label: "About Me",
    highLightLabel: true,
    colorfulHover: true,
  },
  {
    href: "/docs/Resume.pdf",
    defaultIcon: ResumeIcon,
    hoverIcon: ResumeIconHover,
    label: "Resume",
    highLightLabel: true,
    colorfulHover: true,
    download: true,
  },
  {
    href: "https://www.linkedin.com/in/antonio-benjamin-parra-velasquez-242801353/",
    defaultIcon: LinkedinIcon,
    hoverIcon: LinkedinIconHover,
    label: "Linkedin",
    highLightLabel: true,
    colorfulHover: true,
    external: true,
  },
  {
    href: "/",
    defaultIcon: ContactIcon,
    hoverIcon: ContactIconHover,
    label: "Contact Me",
    highLightLabel: false,
    colorfulHover: false,
  },
];
