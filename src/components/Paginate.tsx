import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
interface PaginateProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}

export default function Paginate({
  postsPerPage,
  totalPosts,
  paginate,
}: PaginateProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-10 m-auto block">
      <ul className="flex gap-2">
        {pageNumbers.map((number: number) => {
          return (
            <li
              key={number}
              className="border border-secondary-dark px-3 py-1 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer duration-300 text-sm"
              style={montserrat.style}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
