"use client";

import Menu from "./components/Menu";
import BackgroundPattern from "./components/BackgroundPattern";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <BackgroundPattern menuWidth={170} className="bg-menu" />
      <main className="z-10 relative flex flex-col h-screen w-screen items-center justify-center">
        <Menu />
        <Hero />
      </main>
    </>
  );
}
