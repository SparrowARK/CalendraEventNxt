"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center p-5 gap-10 animate-fade-in max-md:flex-col">
      <section className="flex flex-col items-center">
        <Image
          src="/assets/logo.svg"
          alt="Calendra Logo"
          width={300}
          height={300}
        />
        <h1 className="text-2xl font-black lg:text-3xl">
          Your time, perfectly planned
        </h1>
      </section>
    </main>
  );
}
