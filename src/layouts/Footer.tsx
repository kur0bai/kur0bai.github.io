import { Codepen, Dribbble, Github, LucideGithub } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="static bottom-0 rounded-t-lg px-20 py-8">
      <div className="flex gap-2 justify-center my-4 text-gray-400">
        <a
          href="https://dribbble.com/jesusdsg"
          rel="noreferrer"
          target="_blank"
          className="hover:text-cyan-500 duration-300"
        >
          <Dribbble />
        </a>
        <a
          href="https://github.com/jesusdsg"
          rel="noreferrer"
          target="_blank"
          className="hover:text-cyan-500 duration-300"
        >
          <Github />
        </a>

        <a
          href="https://codepen.io/jesus-sg/"
          rel="noreferrer"
          target="_blank"
          className="hover:text-cyan-500 duration-300"
        >
          <Codepen />
        </a>
      </div>
      <div className="text-center text-sm text-gray-400">
        Developed by Jesus Salcedo
      </div>
    </footer>
  );
}
