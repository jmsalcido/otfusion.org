import React from "react";
import {HomeHeader} from "@/components/layout/Header";
import {Info} from "@/components/home/Info";
import {Services} from "@/components/home/Services";
import {About} from "@/components/home/About";
import {Contact} from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <HomeHeader/>
      <main className="flex-1">
        <Info/>
        <Services/>
        <About/>
        <Contact/>
      </main>
    </>
  );
}

export const metadata = {
  title: "OTFusion | José Salcido",
  description: "Just a place for my personal projects and thoughts.",
};
