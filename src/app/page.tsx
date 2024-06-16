import React from "react";
import {Header} from "@/components/home/Header";
import {Info} from "@/components/home/Info";
import {Services} from "@/components/home/Services";
import {About} from "@/components/home/About";
import {Contact} from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">
        <Info/>
        <Services/>
        <About/>
        <Contact/>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} José Salcido. All
          rights reserved.</p>
        {/*<nav className="sm:ml-auto flex gap-4 sm:gap-6">*/}
        {/*  <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>*/}
        {/*    Terms of Service*/}
        {/*  </Link>*/}
        {/*  <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>*/}
        {/*    Privacy*/}
        {/*  </Link>*/}
        {/*</nav>*/}
      </footer>
    </div>
  );
}

export const metadata = {
  title: "OTFusion | José Salcido",
  description: "Just a place for my personal projects and thoughts.",
};
