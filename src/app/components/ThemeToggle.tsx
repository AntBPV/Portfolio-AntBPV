"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MenuButton from "./MenuButton";
import { ThemeIcon, ThemeIconHover } from "./icons";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8 bg-gray-200 rounded-md"></div>;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="px-2 py-1 font-subtitle font-bold rounded-custom bg-foreground cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <MenuButton
          defaultIcon={ThemeIcon}
          hoverIcon={ThemeIconHover}
          label="Light Mode"
          highLightLabel={false}
          colorfulHover={false}
        />
      ) : (
        <MenuButton
          defaultIcon={ThemeIcon}
          hoverIcon={ThemeIconHover}
          label="Dark Mode"
          highLightLabel={false}
          colorfulHover={false}
        />
      )}
    </button>
  );
}
