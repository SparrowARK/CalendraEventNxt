import { SignUpButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function PublicNavBar() {
  return (
    <nav
      className="flex justify-between
        items-center
        fixed z-50
        w-full h-28
        bg-gray-300
        px-10 gap-4
        shadow-2xl"
    >
      <Link
        href="/login"
        className="flex items-center gap-1 hover:scale-150
        duration-500"
      >
        <Image
          src="/assets/logo.png"
          width={60}
          height={60}
          alt="calendra logo"
        />
      </Link>
      <section>
        <div>
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Register</Button>
          </SignUpButton>
        </div>
      </section>
    </nav>
  );
}
