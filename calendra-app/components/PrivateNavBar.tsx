import Image from "next/image";
import Link from "next/link";

export default function PrivateNavBar() {
  return (
    <nav>
      <Link href="/events">
        <Image
          src="/assets/logo.png"
          width={60}
          height={60}
          alt="calendra logo"
        />
      </Link>
    </nav>
  );
}
