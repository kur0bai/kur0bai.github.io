import Link from "next/link";
import React, { ElementRef, useRef, useState } from "react";
import classNames from "classnames";
import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import { Coffee, ListFilter, Menu, X } from "lucide-react";
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  const [mobileMenu, toggleMobileMenu] = useState<boolean>(false);

  const mobileMenuClassName = classNames(
    "block lg:hidden bg-secondary-dark fixed z-100 top-0 left-0 px-10 py-10 w-full text-center h-screen duration-300 -translate-x-full ",
    mobileMenu ? "translate-x-px" : ""
  );

  return (
    <nav className="flex fixed w-full items-center justify-between flex-wrap  bg-transparent py-4 px-8 lg:px-16 lg:py-2 z-40">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <div
            className="flex gap-2 md:grid md:gap-0 lg:grid lg:gap-0 font-semibold "
            style={poppins.style}
          >
            <span className="font-semibold text-xl tracking-tight inline">
              Jesus
            </span>
            <span className="md:-mt-2 lg:-mt-2 font-bold text-xl tracking-tight inline">
              Salcedo
            </span>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2">
          <ListFilter
            size="2rem"
            className="hover:text-cyan-500 duration-300"
            onClick={() => toggleMobileMenu(!mobileMenu)}
          />
        </button>
      </div>
      {/* Mobile menu */}
      <div className={mobileMenuClassName} style={montserrat.style}>
        <Link href="/" className="float-left">
          <div
            className="flex grid gap-0 font-semibold text-left"
            style={poppins.style}
          >
            <Image src="/favicon.png" width={40} height={40} alt="logo" />
          </div>
        </Link>
        <X
          className="float-right hover:text-cyan-500 duration-300 cursor-pointer"
          size="2rem"
          onClick={() => toggleMobileMenu(!mobileMenu)}
        />
        <div className="pt-32 block text-xl">
          <Link
            scroll={true}
            href=""
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300"
            onClick={() => toggleMobileMenu(!mobileMenu)}
          >
            Home
          </Link>
          <Link
            scroll={true}
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300"
            onClick={() => toggleMobileMenu(!mobileMenu)}
          >
            About
          </Link>
          <Link
            scroll={true}
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300"
            onClick={() => toggleMobileMenu(!mobileMenu)}
          >
            Projects
          </Link>
          <Link
            scroll={true}
            href="https://www.buymeacoffee.com/jesusalcedo"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300 items-center"
            onClick={() => toggleMobileMenu(!mobileMenu)}
          >
            <Coffee className="m-auto" />
          </Link>
        </div>
      </div>
      {/* Default menu */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div
          className="hidden md:hidden lg:flex items-center"
          style={poppins.style}
        >
          <Link
            scroll={true}
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300"
          >
            Home
          </Link>
          <Link
            scroll={true}
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300"
          >
            About
          </Link>
          <Link
            scroll={true}
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-500 mr-4 duration-300"
          >
            Projects
          </Link>
          <Link
            className="hover:text-cyan-500 duration-300 hover:motion-reduce:animate-spin"
            href="https://www.buymeacoffee.com/jesusalcedo"
          >
            <Coffee />
          </Link>
        </div>
      </div>
    </nav>
  );
}
