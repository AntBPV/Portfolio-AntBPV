"use client";

import Menu from "./components/Menu";
import BackgroundPattern from "./components/BackgroundPattern";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <BackgroundPattern menuWidth={170} className="bg-foreground" />
      <main className="z-10 relative flex flex-col min-h-screen max-w-screen items-center justify-center">
        <Menu />
        <Hero />
        <Projects />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}
