import React, { forwardRef, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { BiCodeBlock } from "react-icons/bi";
import { Montserrat, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

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
  // Main object with different projects
  const projects = [
    {
      id: uuid(),
      name: "witty-analytics",
      description:
        "Full stack development of analytics platform using stripe for payments and strapi for backend.",
      tags: [
        { name: "react" },
        { name: "strapi" },
        { name: "HTML5" },
        { name: "tailwindcss" },
        { name: "postgres" },
        { name: "stripe" },
        { name: "typescript" },
      ],
      link: "",
    },
    {
      id: uuid(),
      name: "geoserver-catasig-app",
      description:
        "Geoserver project used to display properties info in specific locations in Colombia, rows, neighboorhoods and more using Nuxtjs and Python.",
      tags: [
        { name: "vue" },
        { name: "python" },
        { name: "HTML5" },
        { name: "tailwindcss" },
        { name: "postgres" },
        { name: "typescript" },
      ],
      link: "",
    },
    {
      id: uuid(),
      name: "liquidacionac-app",
      description:
        "Full stack project based on Nextjs for appraisal and liquidation of properties in cadastral operations in Colombia - Atlántico.",
      tags: [
        { name: "react" },
        { name: "nodejs" },
        { name: "HTML5" },
        { name: "tailwindcss" },
        { name: "postgres" },
        { name: "prisma" },
        { name: "typescript" },
      ],
      link: "",
    },
    {
      id: uuid(),
      name: "catasig",
      description:
        "Frontend development for the official website of Catasig as a cadastral manager in Atlántico.",
      tags: [
        { name: "angular" },
        { name: "HTML5" },
        { name: "SASS" },
        { name: "typescript" },
      ],
      link: "https://www.catasig.gov.co/",
    },
    {
      id: uuid(),
      name: "hiveway",
      description:
        "Development of geoservice manager for calculate routes, manage of sales and sales representatives by countries and parameters in ABinBev.",
      tags: [
        { name: "angular" },
        { name: "python" },
        { name: "HTML5" },
        { name: "SASS" },
        { name: "typescript" },
      ],
      link: "",
    },
    {
      id: uuid(),
      name: "mr-cake",
      description:
        "Ecommerce development from scracth using codeigniter and jQuery for a backery store.",
      tags: [
        { name: "jquery" },
        { name: "PHP" },
        { name: "HTML5" },
        { name: "codeigniter" },
        { name: "mysql" },
      ],
      link: "https://www.instagram.com/mrcakebq/?hl=es",
    },
    {
      id: uuid(),
      name: "note-calculator",
      description:
        "Simple Javascript web app to calculate notes per semester developed using materialize & jQuery.",
      tags: [
        { name: "jquery" },
        { name: "javascript" },
        { name: "HTML5" },
        { name: "materialize" },
        { name: "CSS3" },
      ],
      link: "https://jesusdsg.github.io/note-calculator/",
    },
    {
      id: uuid(),
      name: "sied-met-at-cal",
      description:
        "Monoproject based in .Net Framework using Devexpress framework for the management of medical equipment in hospitals.",
      tags: [
        { name: "devxpress" },
        { name: "c#" },
        { name: ".net framework" },
        { name: "jquery" },
        { name: "bootstrap" },
        { name: "hospital" },
      ],
      link: "",
    },
    {
      id: uuid(),
      name: "admisalud-med-at-home",
      description:
        "Monoproject based in .Net Framework using Devexpress framework for the management of medical functions in hospital.",
      tags: [
        { name: "devxpress" },
        { name: "c#" },
        { name: ".net framework" },
        { name: "jquery" },
        { name: "ajax" },
        { name: "hospital" },
      ],
      link: "",
    },
    {
      id: uuid(),
      name: "digama-store",
      description:
        "Ecommerce website designed for a fashion store using Wordpress.",
      tags: [
        { name: "wordpress" },
        { name: "woocommerce" },
        { name: "fashion" },
        { name: "ecommerce" },
      ],
      link: "",
    },
  ];

  /* 
  Project card
  */
  const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <Link href={project.link}>
        <div
          className="lg:h-64 m-4 px-6 py-6 bg-secondary-dark rounded-lg 
      hover:bg-secondary-dark hover:border-gray-700 duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <BiCodeBlock className="text-gray-400" />{" "}
            <h3 className="text-cyan-400 font-bold" style={poppins.style}>
              {project.name}
            </h3>
          </div>
          <div
            className="h-24 mt-4 overflow-hidden text-gray-400 text-sm"
            style={montserrat.style}
          >
            {project.description}
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {project.tags.map((tag: { name: string }) => {
              return (
                <div
                  key={tag.name}
                  className={
                    "bg-gray-700/50 py-1 px-2 rounded-lg text-xs text-gray-300 w-fit " +
                    poppins.className
                  }
                >
                  {tag.name}
                </div>
              );
            })}
          </div>
        </div>
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
  const listProjects = projects.map(
    (project: {
      id: string;
      name: string;
      description: string;
      tags: Array<any>;
      link: string;
    }) => <ProjectCard key={project.id} project={project} />
  );

  return (
    <section className="h-screen pt-60 my-20 lg:py-24" id="projects" ref={ref}>
      <h3
        className="text-2xl font-bold text-white duration-300 font-bold"
        style={poppins.style}
      >
        Projects and Collaboration
      </h3>
      <div className="py-8">
        <Slider {...settings} className="grid">
          {listProjects}
        </Slider>
      </div>
    </section>
  );
});

export default Projects;
