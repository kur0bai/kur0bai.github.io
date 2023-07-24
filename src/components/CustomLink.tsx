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
  type,
  fullWidth,
}: ButtonProps) {
  const buttonClass = classNames(
    "inline-block text-sm px-8 py-3.5 leading-none border rounded-full  text-center lg:text-auto",
    color.toLowerCase() == buttonColors.PRIMARY
      ? "text-white border-none bg-gradient-to-r from-cyan-500 to-blue-700 duration-300 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-800 duration-300 w-full lg:w-auto font-bold"
      : "",
    fullWidth ? "w-full" : ""
  );
  return (
    <a className={buttonClass} type={type} style={montserrat.style} href={href}>
      {children}
    </a>
  );
}
