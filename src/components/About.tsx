import React, { forwardRef } from "react";
import { Montserrat, Poppins } from "next/font/google";
import { BookOpen, GraduationCap, Settings, Code2, Palette } from "lucide-react";
import { SKILLS } from "@/utils/constants";
import { Card } from "./Card";
import { Badge } from "./Badge";
const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="px-4 lg:px-20 my-20" id="about" ref={ref}>
      <h3
        className="text-2xl font-bold text-white duration-300 font-bold lg:mb-20 mb-10 lg:mt-24 text-center lg:text-left "
        style={poppins.style}
      >
        Skills and technologies
      </h3>
      <div className="grid gap-8 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <Card key={index}>
            <div className="py-2" />
            <h3 className="text-xl font-bold text-white flex items-center gap-2" style={poppins.style}>
              <skill.icon size={30} className="text-cyan-500" />
              {skill.title}
            </h3>
            <div className="my-6 space-y-4 text-base text-gray-400 lg:h-40" style={montserrat.style}>
              {skill.description}
            </div>
            <div className="mt-4">
              <strong className="text-white">Stack:</strong>
              <br />
              <div className="mt-4">
                {skill.technologies.map((tech, idx) => (
                  <Badge key={idx} text={tech} />
                ))}
              </div>
            </div>

          </Card>
        ))}
      </div>
    </section>
  );
});

export default About;
