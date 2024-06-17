import React from "react";
import Link from "next/link";
import {SwirlIcon} from "@/components/icons";

interface Props {
  links?: React.ReactNode;
}

export const HomeHeader = () => {
  return (
    <Header links={(
      <>
        <Link href={"#services"} className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href={"#about"} className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href={"#contact"} className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </>
    )}/>
  )
}

export const Header = (props: Props) => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href={'/'} className="flex items-center justify-center" prefetch={false}>
        <SwirlIcon height={"36"} width={"36"}/>
        <span className="sr-only">OTFusion</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {props.links}
      </nav>
    </header>
  );
};