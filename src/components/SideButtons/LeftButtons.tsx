import React from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";

export default function LeftButtons() {
  return (
    <div className="hidden lg:block fixed left-20 bottom-10">
      <div className="grid justify-center items-center gap-4">
        <a
          className="cursor-pointer text-gray-500 hover:text-cyan-500 duration-300"
          href="https://github.com/jesusdsg/"
          rel="noreferrer"
          target="_blank"
        >
          <BiLogoGithub size={"1.6rem"} />
        </a>
        <a
          className="cursor-pointer text-gray-500 hover:text-cyan-500 duration-300"
          href="https://www.linkedin.com/in/jesusdsalcedo/"
          rel="noreferrer"
          target="_blank"
        >
          <BiLogoLinkedin size={"1.6rem"} />
        </a>
        <AiOutlineMore size={"1.6rem"} className="text-cyan-500" />
      </div>
    </div>
  );
}
