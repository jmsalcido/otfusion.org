'use client';

import React, {useState} from "react";
import Link from "next/link";
import {SwirlIcon} from "@/components/icons";

interface Props {
  links?: React.ReactNode;
}

const NavLink = ({value, path, onClick}: { value: string, path: string, onClick?: () => void }) => {
  return (
    <Link href={path}
          prefetch={false}
          onClick={onClick}
          className="text-medium font-sans hover:underline hover:font-semibold underline-offset-8">
      {value}
    </Link>
  );
}

export const HomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentHost = typeof window !== 'undefined' ? window.location.hostname : 'otfusion.org';
  const protocol = typeof window !== 'undefined' ? window.location.protocol : 'https:';
  const blogUrl = `${protocol}//blog.${currentHost}`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header Component */}
      <Header
        links={(
          <>
            {/* Hamburger menu for mobile */}
            <button onClick={toggleMenu} className="lg:hidden">
              <span className="sr-only">Toggle menu</span>
              &#9776;
            </button>

            {/* Inline nav links for desktop */}
            <nav className="hidden lg:flex lg:gap-6">
              <NavLink value={"Services"} path={"#services"}/>
              <NavLink value={"About"} path={"#about"}/>
              <NavLink value={"Contact"} path={"#contact"}/>
              <NavLink value={"Blog"} path={blogUrl}/>
            </nav>
          </>
        )}
      />

      {/* Dropdown Navigation for mobile */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col gap-4 mt-4 text-center justify-center">
          <NavLink value={"Services"} path={"#services"} onClick={toggleMenu}/>
          <NavLink value={"About"} path={"#about"} onClick={toggleMenu}/>
          <NavLink value={"Contact"} path={"#contact"} onClick={toggleMenu}/>
          <NavLink value={"Blog"} path={blogUrl} onClick={toggleMenu}/>
        </nav>
      )}
    </>
  );
}

export const Header = (props: Props) => {
  return (
    <header className="p-4 lg:p-6 flex items-center justify-between">
      <Link href={'/'} className="flex items-center justify-center" prefetch={false}>
        <SwirlIcon height={"48"} width={"48"}/>
        <span className="sr-only">OTFusion</span>
      </Link>

      {/* Right side links or hamburger */}
      <div className="ml-auto">
        {props.links}
      </div>
    </header>
  );
};