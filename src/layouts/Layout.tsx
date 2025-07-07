import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import LeftButtons from "@/components/SideButtons/LeftButtons";
import RightButtons from "@/components/SideButtons/RightButtons";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative bg-main-dark min-h-screen text-gray-300">
    <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center opacity-10 pointer-events-none z-0" />
    <div className="relative z-10">
      <Navbar />
      <div className="px-8 lg:px-40">
        {children}
        <LeftButtons />
        <RightButtons />
      </div>
    </div>
  </div>
  );
}
