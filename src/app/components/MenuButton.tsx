"use client";

import { useState } from "react";

interface MenuButtonProps {
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
  highLightLabel?: boolean;
  colorfulHover?: boolean;
}

export default function MenuButton({
  label,
  defaultIcon: DefaultIcon,
  hoverIcon: HoverIcon,
  highLightLabel,
  colorfulHover,
}: MenuButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="relative w-full flex justify-center px-2">
      <section
        className={`${colorfulHover ? "menu-color-primary" : "color-body"} 
          py-3 w-full flex flex-row items-center justify-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={label}
      >
        {isHovered ? (
          <HoverIcon color="currentColor" size={37} />
        ) : (
          <DefaultIcon color="currentColor" size={37} />
        )}
      </section>
      <span
        className={`absolute top-1/2 left-[100%] -translate-y-1/2 ml-2
            px-3 py-1 text-xl bg-foreground color-body rounded-menu
            whitespace-nowrap transition-opacity duration-200
            ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
            ${highLightLabel && isHovered ? "color-accent" : ""}
          `}
      >
        {label}
      </span>
    </main>
  );
}
