"use client";

import ProjectCard from "./ProjectCard";
import MobileProjectCard from "./MobileProjectCard";
import useIsMobile from "./hooks/useIsMobile";
import { projectConsts } from "./consts";

export default function Projects() {
  const { isMobile } = useIsMobile();

  const projectCards = projectConsts.map((project, index) =>
    isMobile ? (
      <MobileProjectCard
        key={index}
        category={project.category}
        title={project.title}
        description={project.description}
        tags={project.tags}
        imageSrc={project.imageSrc}
        href={project.href}
      />
    ) : (
      <ProjectCard
        key={index}
        category={project.category}
        title={project.title}
        description={project.description}
        tags={project.tags}
        imageSrc={project.imageSrc}
        href={project.href}
      />
    )
  );

  return (
    <main className="flex flex-col items-center justify-center m-5" id="code">
      {projectCards}
    </main>
  );
}
