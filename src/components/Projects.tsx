import React, { forwardRef, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Montserrat, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { Card } from "./Card";
import { Code, Code2 } from "lucide-react";
const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from "./SliderButtons";
import { Badge } from "./Badge";
import { PROJECTS } from "@/utils/constants";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    tags: Array<any>;
    link: string;
  };
}

const Projects = forwardRef<HTMLElement>((_, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  /* 
  Project card
  */
  const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <Link href={project.link} className="embla__slide h-max">
        <Card>
          <div className="flex items-center gap-2">
            <Code className="text-cyan-500" />{" "}
            <h3 className="text-current font-bold" style={poppins.style}>
              {project.name}
            </h3>
          </div>
          <div
            className="h-32 mt-4 overflow-hidden text-gray-400 text-sm"
            style={montserrat.style}
          >
            {project.description}
          </div>
          <div className="flex flex-wrap text-sm">
            {project.tags.map((tag: { name: string }) => {
              return (
                <Badge
                  key={tag.name}
                  text={tag.name}
                />
              );
            })}
          </div>
        </Card>
      </Link>
    );
  };

  const [windowWidth, setWindowWidth] = useState(1366);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    vertical: windowWidth > 600 ? false : true,
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  /* 
  Projects list 
  */
  const listProjects = PROJECTS.map(
    (project: {
      id: string;
      name: string;
      description: string;
      tags: Array<any>;
      link: string;
    }) => <ProjectCard key={project.id} project={project} />
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="px-4 lg:px-20 my-20" id="projects" ref={ref}>
      <h3
        className="text-2xl font-bold text-white duration-300 font-bold"
        style={poppins.style}
      >
        Projects and Collaborations
      </h3>
      <div className="py-8 w-full overflow-hidden">
        {/*  <Slider {...settings} className="grid">
          {listProjects}
        </Slider> */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {listProjects}
          </div>

          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
});

export default Projects;
