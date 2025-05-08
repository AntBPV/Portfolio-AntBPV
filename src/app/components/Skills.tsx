"use client";

import SkillBar from "./SkillBar";
import { skillConsts } from "./consts";
import useIsMobile from "./hooks/useIsMobile";

export default function Skills() {
  const { isMobile } = useIsMobile();

  return (
    <main className={`pb-10 ${isMobile ? "px-4" : "px-8 pl-35 pr-20"} `}>
      <div className="max-w-full mx-auto">
        <section className="mb-20 flex flex-col items-center">
          <h2
            className={`font-title color-body font-semibold ${
              isMobile ? "card-title-txtSize-m" : "card-title-txtSize"
            }`}
          >
            <span className="color-primary">Skills</span> and{" "}
            <span className="color-accent">Abilites</span>
          </h2>
          <p
            className={`font-title color-body ${
              isMobile ? "card-txtSize" : "card-title-txtSize-m"
            }`}
          >
            Things I do (kinda) well
          </p>
        </section>

        <section
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-10`}
        >
          <div className="flex flex-col gap-10">
            <SkillBar {...skillConsts[0]} />
            <SkillBar {...skillConsts[1]} />
          </div>
          <div className="flex flex-col gap-10">
            <SkillBar {...skillConsts[2]} />
            <SkillBar {...skillConsts[3]} />
          </div>
        </section>
      </div>
    </main>
  );
}
