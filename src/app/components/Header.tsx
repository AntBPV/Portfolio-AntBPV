"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuItem from "./MenuItem";

// Icon imports
import HomeIcon from "./icons/HomeIcon";
import HomeIconHover from "./icons/HomeIconHover";
import CodeIcon from "./icons/CodeIcon";
import CodeIconHover from "./icons/CodeIconHover";
import GuitarIcon from "./icons/GuitarIcon";
import GuitarIconHover from "./icons/GuitarIconHover";
import AboutIcon from "./icons/AboutIcon";
import AboutIconHover from "./icons/AboutIconHover";
import ResumeIcon from "./icons/ResumeIcon";
import ResumeIconHover from "./icons/ResumeIconHover";
import LinkedinIcon from "./icons/LinkedinIcon";
import LinkedinIconHover from "./icons/LinkedinIconHover";
import ContactIcon from "./icons/ContactIcon";
import ContactIconHover from "./icons/ContactIconHover";

export default function Header() {
  return (
    <main className="flex min-h-screen">
      <header className="fixed flex flex-col left-0 top-1/2 -translate-y-1/2 mx-4 items-center">
        <section className="bg-menu rounded-custom p-2">
          <nav className="font-subtitle font-bold flex flex-col items-center">
            <MenuItem
              href="/"
              defaultIcon={HomeIcon}
              hoverIcon={HomeIconHover}
              label="Home"
              highLightLabel={false}
              colorfulHover={false}
            />
            <div className="separator-height w-3/4 rounded-full bg-separator my-4"></div>
            <MenuItem
              href="/"
              defaultIcon={CodeIcon}
              hoverIcon={CodeIconHover}
              label="Code Projects"
              highLightLabel={true}
              colorfulHover={true}
            />
            <MenuItem
              href="/"
              defaultIcon={GuitarIcon}
              hoverIcon={GuitarIconHover}
              label="Personal Projects"
              highLightLabel={true}
              colorfulHover={true}
            />
            <div className="separator-height w-3/4 rounded-full bg-separator my-4"></div>
            <MenuItem
              href="/"
              defaultIcon={AboutIcon}
              hoverIcon={AboutIconHover}
              label="About Me"
              highLightLabel={true}
              colorfulHover={true}
            />
            <MenuItem
              href="/"
              defaultIcon={ResumeIcon}
              hoverIcon={ResumeIconHover}
              label="Resume"
              highLightLabel={true}
              colorfulHover={true}
            />
            <MenuItem
              href="/"
              defaultIcon={LinkedinIcon}
              hoverIcon={LinkedinIconHover}
              label="Linkedin"
              highLightLabel={true}
              colorfulHover={true}
            />
            <div className="separator-height w-3/4 rounded-full bg-separator my-4"></div>
            <MenuItem
              href="/"
              defaultIcon={ContactIcon}
              hoverIcon={ContactIconHover}
              label="Contact Me"
              highLightLabel={false}
              colorfulHover={false}
            />
          </nav>
        </section>
        <section className="mt-3">
          <ThemeToggle />
        </section>
      </header>
    </main>
  );
}
