import { bodyFont, titleFont, titleFontBold } from "@/utils/fonts";
import React from "react";
import { Montserrat, Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <div className="h-screen py-40" id="about">
      <div className="h-auto">
        <div className="my-4 md:grid lg:grid grid-cols-2 gap-10">
          <div>
            <h3
              className="text-2xl font-bold text-white duration-300 font-bold"
              style={poppins.style}
            >
              Education
            </h3>
            <div className="mt-4 grid gap-4 text-base" style={montserrat.style}>
              <span className="text-gray-400">
                <strong className="text-white">Graphic Design</strong> at the
                Institución Universitaria{" "}
                <strong className="text-white">
                  <a href="https://www.unibarranquilla.edu.co/">ITSA</a>
                </strong>
                <br />
                Barranquilla, Atlántico - Colombia (2018)
              </span>
              <span className="text-gray-400">
                <strong className="text-white">Software Development</strong> at
                the Corporación Universitaria Empresarial de Salamanca
                <strong className="text-white">
                  <a href="https://www.cues.edu.co/"> CUES</a>
                </strong>
                <br />
                Barranquilla, Atlántico - Colombia (2013 - 2016)
              </span>
              <div className="mt-4 grid gap-2">
                <span className="text-gray-400">
                  <strong className="text-white">Spanish:&nbsp;</strong> Native
                  speaker
                </span>
                <span className="text-gray-400">
                  <strong className="text-white">English:&nbsp;</strong> B2 -
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3
              className="text-2xl font-bold text-white duration-300 font-bold"
              style={poppins.style}
            >
              Skills
            </h3>
            <div className="mt-4 grid gap-2 text-base" style={montserrat.style}>
              <div>
                <span className="text-gray-400">
                  <strong className="text-white">Frontend:</strong> Javascript &
                  Typescript, React, Angular, Vue, Nextjs, HTML5, CSS, SASS and
                  TailwindCSS.
                </span>
              </div>

              <div>
                <span className="text-gray-400">
                  <strong className="text-white">Backend:</strong> Python with
                  Django, Nodejs, Postgres, MySQL and Mongodb.
                </span>
              </div>

              <div>
                <span className="text-gray-400">
                  <strong className="text-white">Design:</strong> Figma, Adobe
                  Xd, Photoshop and Illustrator.
                </span>
              </div>

              <div>
                <span className="text-gray-400">
                  <strong className="text-white">Others:</strong> Git, Docker,
                  AWS S3, Google Cloud and Jira.
                </span>
              </div>

              <div>
                <span className="text-gray-400">
                  <strong className="text-white">Soft:</strong> Communication,
                  Creativity, Team Work and Adaptability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
