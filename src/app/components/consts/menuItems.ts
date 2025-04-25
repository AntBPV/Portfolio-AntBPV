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
}

export const menuItems: MenuItemData[] = [
  {
    href: "/",
    defaultIcon: HomeIcon,
    hoverIcon: HomeIconHover,
    label: "Home",
    highLightLabel: false,
    colorfulHover: false,
  },
  {
    href: "/",
    defaultIcon: CodeIcon,
    hoverIcon: CodeIconHover,
    label: "Code Projects",
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
    href: "/",
    defaultIcon: AboutIcon,
    hoverIcon: AboutIconHover,
    label: "About Me",
    highLightLabel: true,
    colorfulHover: true,
  },
  {
    href: "/",
    defaultIcon: ResumeIcon,
    hoverIcon: ResumeIconHover,
    label: "Resume",
    highLightLabel: true,
    colorfulHover: true,
  },
  {
    href: "/",
    defaultIcon: LinkedinIcon,
    hoverIcon: LinkedinIconHover,
    label: "Linkedin",
    highLightLabel: true,
    colorfulHover: true,
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
