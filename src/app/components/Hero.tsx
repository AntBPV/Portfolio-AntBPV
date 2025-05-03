"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { LocationIcon, ArrowIcon } from "./icons";
import useIsMobile from "./hooks/useIsMobile";

export default function Hero() {
  const { theme } = useTheme();
  const { isMobile, mounted } = useIsMobile();

  if (!mounted) return null;

  return (
    <main className="flex w-full font-title">
      {!isMobile && (
        <div className="flex flex-row w-full h-screen pl-35 p-8">
          <section className="flex flex-col py-10 pr-10">
            <h1 className="title-txtSize color-body font-medium inline-block">
              Anthony Parra
            </h1>
            <h2 className="subtitle-txtSize color-body w-full break-words">
              Anthony <span className="color-primary">“AntBPV”</span> Parra is a
              software developer based in Colombia with a strong passion for
              building powerful tools that help others.
            </h2>
            <section className="relative mt-auto ml-auto">
              <span className="relative h-[200px] w-[200px]">
                <ArrowIcon
                  color="currentColor"
                  size={200}
                  className="absolute -top-15 -left-35 color-secondary"
                />
              </span>
              <span className="relative h-[200px] w-[200px]">
                <ArrowIcon
                  color="currentColor"
                  size={200}
                  className="absolute -top-5 -left-25 color-primary"
                />
              </span>
              <h1 className="follower-txtSize font-medium color-body relative text-right">
                Projects <br />
                This way
              </h1>
            </section>
          </section>

          <section className="flex flex-col justify-center items-start max-h-screen ">
            <div className="relative w-[651px] h-[622px] mx-auto">
              <span className="absolute inset-0 bg-foreground opacity-75"></span>
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
              <span className="absolute inset-0 border-thick-photo "></span>
            </div>
            <div className="flex flex-row mt-2 justify-between items-center gap-2">
              <LocationIcon size={37} />
              <h1 className="color-body subtitle-txtSize">Colombia, Pasto</h1>
            </div>
          </section>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col w-full px-4 py-8">
          <section className="flex flex-col my-10 justify-center items-center text-center">
            <h1 className="title-txtSize-m color-body font-semibold">
              Anthony Parra
            </h1>
            <h2 className="subtitle-txtSize-m color-body w-full break-words ">
              Anthony <span className="color-primary">“AntBPV”</span> Parra is a
              software developer based in Colombia with a strong passion for
              building powerful tools that help others.
            </h2>
          </section>
          <section className="flex flex-col justify-around items-center">
            <div className="relative w-[300px] h-[290px] mx-auto">
              <span className="absolute inset-0 bg-foreground opacity-75"></span>
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
              <span className="absolute inset-0 border-thick-photo "></span>
            </div>
            <div className="flex flex-row mt-2 justify-around items-center gap-2">
              <LocationIcon size={25} />
              <h1 className="color-body subtitle-txtSize-m">Colombia, Pasto</h1>
            </div>
          </section>
          <section className="relative mt-40 items-end justify-center ml-auto mr-4 mb-5 min-h-[150px]">
            <span className="absolute -top-10 -left-30 ">
              <ArrowIcon
                color="currentColor"
                size={150}
                className="color-secondary"
              />
            </span>
            <span className="absolute -top-0 -left-20">
              <ArrowIcon
                color="currentColor"
                size={150}
                className="color-primary"
              />
            </span>
            <h1 className="follower-txtSize-m font-medium color-body relative text-right">
              Projects <br />
              This way
            </h1>
          </section>
        </div>
      )}
    </main>
  );
}
