import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import { Montserrat, Poppins } from "next/font/google";
import CustomLink from "./CustomLink";
const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Profile() {
  return (
    <div className="h-screen py-40" id="profile">
      <div className="grid gap-10 md:flex lg:flex lg:gap-10">
        <div className="w-full lg:w-1/2">
          <h3
            className="text-white text-3xl lg:text-5xl font-bold flex gap-2 font-semibold"
            style={poppins.style}
          >
            <TypeAnimation sequence={["Hi there, I'm "]} cursor={false} />
            <TypeAnimation
              sequence={[1000, " Jesus"]}
              className="text-cyan-500"
              cursor={true}
            />
          </h3>
          <p
            className="mt-2 mb-6 text-gray-400 text-base"
            style={montserrat.style}
          >
            Fullstack Dev skilled in front-end frameworks like{" "}
            <strong>React</strong>, <strong>Angular</strong> and{" "}
            <strong>Vue</strong>, back-end (<strong>Node.js</strong>,{" "}
            <strong>C#</strong> & <strong>Python</strong>), DBs (
            <strong>Non relational</strong>,<strong> SQL</strong>), and Agile.
            Passionate about creating solutions, seamless web experiences and
            delivering scalable applications. Strong problem-solving and
            collaboration abilities.
          </p>
          <CustomLink
            type="button"
            color="primary"
            fullWidth={false}
            href="/curriculum2023jul.pdf"
          >
            Download CV
          </CustomLink>
        </div>
        <div className="w-full lg:w-1/2 m-auto block">
          <div className="w-52 h-52 lg:h-64 lg:w-64 relative m-auto">
            <Image
              src="/Images/profilephoto.jpg"
              fill
              alt="Profile photo"
              className="rounded-full border-2 border-secondary-dark/50 duration-300 absolute z-10 -ml-5 md:ml-auto lg:ml-auto cursor-pointer"
            />
            <div className="h-full w-full bg-secondary-dark rounded-full absolute ml-5 mt-10 lg:ml-20 lg:mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
