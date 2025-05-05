"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuItemProps {
  href?: string;
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
  download?: boolean;
  external?: boolean;
}

export default function MenuItem({
  href,
  label,
  defaultIcon: DefaultIcon,
  hoverIcon: HoverIcon,
  highLightLabel,
  colorfulHover,
  download,
  external,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const labelSpan = (
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
  );

  const iconSection = (
    <section>
      {isHovered ? (
        <HoverIcon color="currentColor" size={37} />
      ) : (
        <DefaultIcon color="currentColor" size={37} />
      )}
    </section>
  );

  const commonClasses = `${colorfulHover ? "menu-color-primary" : "color-body"} 
    py-3 w-full flex flex-row items-center justify-center`;

  const commonEvents = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    "aria-label": label,
  };

  return (
    <main className="relative w-full flex justify-center px-2">
      {external || download ? (
        <a
          href={href}
          className={commonClasses}
          {...commonEvents}
          target="_blank"
          rel="noopener noreferrer"
          download={download || undefined}
        >
          {iconSection}
          {labelSpan}
        </a>
      ) : (
        <Link href={href || "#"} className={commonClasses} {...commonEvents}>
          {iconSection}
          {labelSpan}
        </Link>
      )}
    </main>
  );
}
