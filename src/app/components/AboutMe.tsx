"use client";

import Card from "./AboutCard";
import { cardConsts } from "./consts";
import useIsMobile from "./hooks/useIsMobile";
import Image from "next/image";

export default function AboutMe() {
  const { isMobile, mounted } = useIsMobile();

  return (
    <main
      className={`flex ${
        isMobile ? "flex-col" : "flex-row pl-25"
      } w-full pt-20 pb-10`}
      id="about"
    >
      <section
        className={`${
          isMobile ? "w-full" : "w-1/2"
        } p-8 flex flex-col justify-center items-center`}
      >
        <div className="space-y-6">
          <h2
            className={`${
              isMobile ? "about-txtSize-m text-center mb-8" : "about-txtSize"
            } font-title font-semibold`}
          >
            <span className="color-primary">
              Anthony is a software developer
            </span>{" "}
            with a focus on human-centered web design.{" "}
            <span className="color-accent">
              He may also own a guitar or two.
            </span>
          </h2>
        </div>
        <div
          className={`relative ${
            isMobile ? "w-[180px] h-[280px]" : "w-[300px] h-[480px]"
          } mx-auto`}
        >
          <span className="absolute inset-0 bg-foreground opacity-75"></span>
          {mounted && (
            <Image
              src="/images/Photo.png"
              alt="Profile Photo"
              fill
              priority
              className="object-contain"
            />
          )}
          <span className="absolute inset-0 border-thick-photo "></span>
        </div>
      </section>

      <section className={`${isMobile ? "w-full" : "w-1/2"} flex items-center`}>
        <div className="w-full flex flex-col items-end space-y-4 py-8 pr-0 gap-5">
          {cardConsts.map((card, index) => (
            <Card
              key={`card-${index}`}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
