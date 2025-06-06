"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import MenuItem from "./MenuItem";
import MobileMenuItem from "./MobileMenuItem";
import useIsMobile from "./hooks/useIsMobile";
import { menuConsts, separators } from "./consts";
import { MenuIcon, CloseIcon } from "./icons";

export default function Menu() {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MobileMenuContent = (
    <nav className="font-subtitle font-bold flex flex-col py-2">
      {menuConsts.map((item, index) => (
        <div key={`menu-item-${index}`}>
          <MobileMenuItem
            href={item.href}
            defaultIcon={item.defaultIcon}
            label={item.label}
          />
          {separators.includes(index) && (
            <div className="separator-height w-full rounded-full bg-foreground-detail my-4"></div>
          )}
        </div>
      ))}
    </nav>
  );

  const MenuContent = (
    <nav className="font-subtitle font-bold flex flex-col items-center py-2">
      {menuConsts.map((item, index) => (
        <div key={`menu-item-${index}`}>
          <MenuItem
            href={item.href}
            defaultIcon={item.defaultIcon}
            hoverIcon={item.hoverIcon}
            label={item.label}
            highLightLabel={item.highLightLabel}
            colorfulHover={item.colorfulHover}
          />
          {separators.includes(index) && (
            <div className="separator-height w-full rounded-full bg-foreground-detail my-4"></div>
          )}
        </div>
      ))}
    </nav>
  );

  useEffect(() => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <main className="absolute flex h-screen">
      {!isMobile && (
        <header className="fixed flex flex-col left-0 top-1/2 -translate-y-1/2 mx-4 items-center">
          <section className="bg-foreground rounded-custom p-2">
            {MenuContent}
          </section>
          <section className="mt-3">
            <ThemeToggle />
          </section>
        </header>
      )}

      {isMobile && (
        <>
          <button
            className="fixed top-0 right-0  m-0 z-50 p-2 bg-foreground rounded-burgir"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div
            className={`fixed inset-0 bg-foreground transition-opacity duration-200 ease-in-out z-40
              ${
                isMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
          >
            <section className="pt-16 px-4 h-full flex flex-col justify-around">
              <span className="bg-foreground rounded-custom p-2 flex-grow">
                {MobileMenuContent}
              </span>
              <span className="fixed bottom-4 right-4">
                <ThemeToggle />
              </span>
            </section>
          </div>
        </>
      )}
    </main>
  );
}
