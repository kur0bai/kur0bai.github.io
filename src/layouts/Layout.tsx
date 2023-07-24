import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { bodyFont } from "@/utils/fonts";
import LeftButtons from "@/components/SideButtons/LeftButtons";
import RightButtons from "@/components/SideButtons/RightButtons";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-main-dark h-full text-gray-300">
      <Navbar />
      <div className="px-8 lg:px-40">
        {children}
        <LeftButtons />
        <RightButtons />
      </div>
    </div>
  );
}
