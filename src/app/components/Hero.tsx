"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { LocationIcon } from "./icons";
import useIsMobile from "./hooks/useIsMobile";

export default function Hero() {
  const { theme } = useTheme();
  const { isMobile, mounted } = useIsMobile();

  if (!mounted) return null;

  return (
    <main className="flex w-full font-title">
      {!isMobile && (
        <span className="flex flex-row w-full h-screen pl-35 p-8">
          <section className="flex flex-col mt-10 mr-10">
            <h1 className="text-title text-body font-semibold inline-block">
              Anthony Parra
            </h1>
            <h2 className="text-hero-subtitle text-body w-full break-words">
              Anthony <span className="text-primary">“AntBPV”</span> Parra is a
              software developer based in Colombia with a strong passion for
              building powerful tools that help others.
            </h2>
            <div className="text-right">
              <h1 className="text-8xl text-body font-semibold">Testing</h1>
            </div>
          </section>

          <section className="flex flex-col justify-center items-start max-h-screen ">
            <div className="relative w-[651px] h-[622px] mx-auto">
              <span className="absolute inset-0 bg-photo opacity-75"></span>
              {mounted && (
                <Image
                  src={
                    theme === "dark"
                      ? "/images/Profile-Photo-Dark.png"
                      : "/images/Profile-Photo-Light.png"
                  }
                  alt="Profile Photo"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  priority
                  className="object-contain"
                />
              )}
              <span className="absolute inset-0 border-photo "></span>
            </div>
            <div className="flex flex-row mt-2 justify-between items-center gap-2">
              <LocationIcon size={37} />
              <h1 className="text-body text-hero-subtitle">Colombia, Pasto</h1>
            </div>
          </section>
        </span>
      )}
      {isMobile && (
        <span className="flex flex-col w-full min-h-screen px-4 py-8">
          <section className="flex flex-col my-10 justify-center items-center text-center">
            <h1 className="text-title-mobile text-body font-semibold">
              Anthony Parra
            </h1>
            <h2 className="text-hero-subtitle-mobile text-body w-full break-words ">
              Anthony <span className="text-primary">“AntBPV”</span> Parra is a
              software developer based in Colombia with a strong passion for
              building powerful tools that help others.
            </h2>
          </section>
          <section className="flex flex-col justify-around items-center">
            <div className="relative w-[300px] h-[290px] mx-auto">
              <span className="absolute inset-0 bg-photo opacity-75"></span>
              {mounted && (
                <Image
                  src={
                    theme === "dark"
                      ? "/images/Profile-Photo-Dark.png"
                      : "/images/Profile-Photo-Light.png"
                  }
                  alt="Profile Photo"
                  sizes="(max-width: 768px) 100vw"
                  fill
                  priority
                  className="object-contain"
                />
              )}
              <span className="absolute inset-0 border-photo "></span>
            </div>
            <div className="flex flex-row mt-2 justify-around items-center gap-2">
              <LocationIcon size={25} />
              <h1 className="text-body text-hero-subtitle-mobile">
                Colombia, Pasto
              </h1>
            </div>
          </section>
        </span>
      )}
    </main>
  );
}
