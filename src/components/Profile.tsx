import React, { forwardRef, LegacyRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Montserrat, Poppins } from "next/font/google";
import CustomLink from "./CustomLink";
import Motion from "./Motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { motion } from 'framer-motion'
const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

interface ProfileProps {
  ref: LegacyRef<HTMLElement>;
}
const Profile = forwardRef<HTMLElement, ProfileProps>((_, ref) => {
  return (
    <Motion>
      <section className="h-screen flex items-center relative" id="profile" ref={ref}>
        <div className="grid gap-10 md:flex lg:flex lg:gap-10">
          <div className="w-full lg:w-1/2">
            <h3
              className="text-white text-3xl lg:text-5xl font-bold flex gap-2 font-semibold"
              style={poppins.style}
            >
              <TypeAnimation sequence={["Hi, I'm "]} cursor={false} />
              <TypeAnimation
                sequence={[1000, " Jesus"]}
                className="text-cyan-500"
                cursor={true}
              />
            </h3>
            <p
              className="my-6 text-gray-400 text-base"
              style={montserrat.style}
            >
              I'm a Software Developer from Colombia with a strong passion for <strong>Python</strong>, <strong>AI</strong>, <strong>cybersecurity</strong>, and modern web technologies like <strong>React</strong>, <strong>Nestjs</strong>, and <strong>FastApi</strong>. Currently working as a fullstack developer, I have experience building solutions for mobile, web, and cloud platforms.{" "}
              I thrive when solving real-world problems, exploring security challenges, and integrating AI-powered features into practical applications.
            </p>
            <CustomLink
              type="button"
              color="primary"
              fullWidth={false}
              href="mailto:devjesg@gmail.com"
            >
              Contact me
            </CustomLink>
          </div>
          <div className="w-full lg:w-1/2 m-auto block">
            <div className="w-52 h-52 lg:h-64 lg:w-64 relative m-auto">
              {/* Android float */}
              <div className="absolute bg-secondary-dark rounded-full shadow-lg h-14 w-14 right-2">
                <Image
                  src="/Images/Icons/android.svg"
                  fill
                  alt="React"
                  className="p-2 text-red-200"
                />
              </div>
              {/* React */}
              <div className="absolute bg-secondary-dark rounded-full shadow-lg h-20 w-20 -left-10 bottom-20 z-20">
                <Image
                  src="/Images/Icons/react.svg"
                  fill
                  alt="React"
                  className="p-2 text-red-200"
                />
              </div>
              {/* Javascript */}
              <div className="absolute bg-secondary-dark rounded-full shadow-lg h-14 w-14 bottom-8 -right-4 z-20">
                <Image
                  src="/Images/Icons/python.svg"
                  fill
                  alt="Python"
                  className="p-2 text-red-200"
                />
              </div>
              <Image
                src="/Images/profilephoto-black.jpg"
                fill
                alt="Profile photo"
                className="rounded-full border-2 border-secondary-dark/50 duration-300 absolute z-10 -ml-5 md:ml-auto lg:ml-auto cursor-pointer"
              />
              <div className="h-full w-full bg-secondary-dark rounded-full absolute ml-5 mt-10 lg:ml-20 lg:mt-20"></div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-2 h-32 text-center items-center self-center w-full">
          <motion.div
            animate={{
              y: [0, -10, 0], // sube, baja
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <a href="#about"><ChevronDown size={40} /></a>
          </motion.div></div>
      </section>
    </Motion>
  );
});

export default Profile;
