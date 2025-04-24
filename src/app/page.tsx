"use client";

import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-page flex h-screen w-screen items-center justify-center">
      <Header />
      <h1 className="text-3xl font-title font-semibold text-neutral mb-5">
        Antonio Parra
      </h1>
    </main>
  );
}
