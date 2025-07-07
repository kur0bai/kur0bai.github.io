import React from "react";
import { Github, Linkedin, MoreHorizontal, MoreVertical } from "lucide-react";

export default function LeftButtons() {
  return (
    <div className="hidden lg:block fixed left-20 bottom-10">
      <div className="grid justify-center items-center gap-4">
        <a
          className="cursor-pointer text-gray-500 hover:text-cyan-500 duration-300"
          href="https://github.com/kur0bai/"
          rel="noreferrer"
          target="_blank"
        >
          <Github size={"1.6rem"} />
        </a>
        <a
          className="cursor-pointer text-gray-500 hover:text-cyan-500 duration-300"
          href="https://www.linkedin.com/in/jesusdsalcedo/"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin size={"1.6rem"} />
        </a>
        <MoreVertical size={"1.6rem"} className="text-cyan-500" />
      </div>
    </div>
  );
}
