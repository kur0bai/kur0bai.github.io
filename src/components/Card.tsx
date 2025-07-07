import React from 'react'

interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-secondary-dark/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-transform hover:scale-[1.02] duration-300 hover:shadow-md">{children}</div>
  )
}
