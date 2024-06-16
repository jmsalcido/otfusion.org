import Link from "next/link";
import {MountainIcon} from "@/components/icons";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6"/>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
};