import classNames from "classnames";
import React from "react";
import { buttonColors } from "@/utils/constants";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  type?: "button" | "reset" | "submit";
  color: string;
}

export default function Button({
  children,
  color,
  type,
  fullWidth,
}: ButtonProps) {
  const buttonClass = classNames(
    "inline-block text-sm px-8 py-3 leading-none border rounded-full  text-center lg:text-auto",
    color.toLowerCase() == buttonColors.PRIMARY
      ? "text-white border border-white hover:bg-gradient-to-r from-cyan-500 to-blue-800 duration-300 hover:border-cyan-500 duration-300 w-full lg:w-auto"
      : "",
    fullWidth ? "w-full" : ""
  );
  return (
    <button className={buttonClass} type={type} style={montserrat.style}>
      {children}
    </button>
  );
}
