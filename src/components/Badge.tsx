import React from 'react'
import { Montserrat } from "next/font/google";
interface BadgeProps {
    text: string;
}
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
export const Badge: React.FC<BadgeProps> = ({text}) => {
  return (
     <p className="text-gray-400 bg-blue-600/10 rounded-lg px-2 py-1 inline-block mr-2 mb-2 text-sm"  style={montserrat.style}>{text}</p>
  )
}
