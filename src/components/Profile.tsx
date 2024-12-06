import React, {
  ClassAttributes,
  forwardRef,
  LegacyRef,
  RefAttributes,
} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Montserrat, Poppins } from "next/font/google";
import CustomLink from "./CustomLink";
import Motion from "./Motion";
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
      <section className="h-screen py-40" id="profile" ref={ref}>
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
              Fullstack and Mobile Dev skilled in front-end frameworks like{" "}
              <strong>React / React native</strong>, <strong>Angular</strong>{" "}
              and <strong>Vue</strong>, back-end (<strong>Node.js</strong> &{" "}
              <strong>Python</strong>), DBs (<strong>Non relational</strong>,
              <strong> SQL</strong>), and Agile. Passionate about creating
              solutions, seamless web experiences and delivering scalable
              applications. Strong problem-solving and collaboration abilities.
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
                  src="/Images/Icons/javascript.svg"
                  fill
                  alt="React"
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
      </section>
    </Motion>
  );
});

export default Profile;
