"use client";

import { neobrutalism } from "@clerk/themes";
import { SignIn } from "@clerk/nextjs";
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
        <p className="font-extralight">
          Join millions of professionals who easily book meetings with the #1
          scheduling tool.
        </p>
        <Image src="/assets/planning.png" alt="Logo" width={500} height={500} />
      </section>
      <div className="mt-3">
        <SignIn
          routing="hash"
          appearance={{
            baseTheme: neobrutalism,
          }}
        />
      </div>
    </main>
  );
}
