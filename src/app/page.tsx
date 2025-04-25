"use client";

import Header from "./components/Header";
import BackgroundPattern from "./components/BackgroundPattern";

export default function Home() {
  return (
    <>
      <BackgroundPattern menuWidth={170} className="bg-menu" />
      <main className="z-10 relative flex h-screen w-screen items-center justify-center">
        <Header />
        <h1 className="text-3xl font-title font-semibold text-body">
          Antonio Parra
        </h1>
      </main>
    </>
  );
}
