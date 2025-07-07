import classNames from "classnames";
import React from "react";
import { buttonColors } from "@/utils/constants";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["400", "600"], subsets: ["latin"] });

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  type?: "button" | "reset" | "submit";
  color: string;
}

export default function CustomLink({
  href,
  children,
  color,
  type = "button",
  fullWidth,
}: ButtonProps) {
  const buttonClass = classNames(
    "inline-block text-sm px-8 py-3.5 leading-none rounded-full text-center font-bold transition-all duration-500 ease-in-out",
    fullWidth ? "w-full" : "lg:w-auto",
    color.toLowerCase() === buttonColors.PRIMARY && [
      "text-white border-none bg-gradient-to-r from-cyan-500 to-blue-800",
      "bg-[length:200%_100%] bg-left hover:bg-right",
    ]
  );

  return (
    <a
      className={buttonClass}
      style={montserrat.style}
      href={href}
      type={type}
    >
      {children}
    </a>
  );
}
