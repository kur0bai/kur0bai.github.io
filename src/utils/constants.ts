import { Cloud, Code2, Server } from "lucide-react";
import { v4 as uuid } from "uuid";
const buttonColors = {
  PRIMARY: "primary",
};

const SKILLS: ISkill[] = [
  {
    title: "Frontend Development",
    description: "I design and develop intuitive interfaces with high performance, speed, and visual appeal, delivering a better user experience by leveraging the latest technologies.",
    icon: Code2,
    technologies: ["Figma", "Adobe", "HTML5", "CSS", "TailwindCSS", "Typescript", "React", "React Native", "Angular", "Nuxt.js", "Next.js"]
  },
  {
    title: "Backend Development",
    description: "I have developed and contributed to long-term server projects, consistently focusing on performance, scalability, and best practices. I build robust APIs and services that power modern applications even with AI Models integrations.",
    icon: Server,
    technologies: ["Python", "Node.js", "Nest", "Express", "FastApi", "Django", "GIS", "Postgres", "Firebase", "MongoDB", "OpenAi", "HuggingFace"]
  },
  {
    title: "Cloud & Automation",
    description: "I have implemented cloud services, managed deployments, and set up CI/CD pipelines, as well as automated tasks and testing processes.",
    icon: Cloud,
    technologies: ["Docker", "Github Actions", "Terraform", "Kubernetes", "AWS", "GCP", "Azure"]
  }
]

const PROJECTS = [
  {
    id: uuid(),
    name: "epikra",
    description:
      "Intuitive and fast base server, for the development of CMS or dynamic content, with python and artificial intelligence, focused in maintain a lightweight structure.",
    tags: [
      { name: "react native" },
      { name: "tailwindcss" },
      { name: "ios" },
      { name: "android" },
      { name: "stripe" },
      { name: "typescript" },
    ],
    link: "https://github.com/kur0bai/epikra",
  },
  {
    id: uuid(),
    name: "catasig",
    description:
      "Web portal of a government entity and land registry manager in the country in charge of different departments over the years.",
    tags: [
      { name: "angular" },
      { name: "HTML5" },
      { name: "SASS" },
      { name: "typescript" },
      { name: "graphQL" }
    ],
    link: "https://www.catasig.gov.co/",
  },
  {
    id: uuid(),
    name: "geoserver-catasig-app",
    description:
      "Project of a spatial geoviewer for the visualization and manipulation of data at the municipal level, with the aim of facilitating the review and classification of properties and property tax calculations.",
    tags: [
      { name: "vue" },
      { name: "python" },
      { name: "HTML5" },
      { name: "tailwindcss" },
      { name: "postgres" },
      { name: "typescript" },
      { name: "nuxt" },
      { name: "mapbox" }
    ],
    link: "https://sabanalarga.xiltriongeoservicio.com/map",
  },
  {
    id: uuid(),
    name: "grieverapp",
    description:
      "Mobile application specialized in personal improvement through therapies, interaction with therapists to overcome grief with coverage in different Latin American countries.",
    tags: [
      { name: "react native" },
      { name: "tailwindcss" },
      { name: "ios" },
      { name: "android" },
      { name: "stripe" },
      { name: "typescript" },
    ],
    link: "#projects",
  },
  {
    id: uuid(),
    name: "eclipse-template",
    description:
      "Totally free static site template for portfolio, developed in Vue 3 using the Gridsome framework with a minimalist and powerful style designed in figma.",
    tags: [
      { name: "vue" },
      { name: "CSS3" },
      { name: "HTML5" },
      { name: "javascript" },
      { name: "gridsome" },
      { name: "google maps" }
    ],
    link: "https://jesusdsg.gitlab.io/eclipse/",
  },
  {
    id: uuid(),
    name: "witty-analytics",
    description:
      "Fullstack development of an interactive dashboard for lead management and other tools and integration of Go High level API and online payments with stripe for the United States.",
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
    name: "liquidacionac-center",
    description:
      "Auxiliary dashboard for uploading volumes of Excel files for the calculation of properties at the municipal and departmental level.",
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
    name: "hiveway",
    description:
      "Development of geoservice manager for calculate routes, manage of sales and sales representatives by countries and parameters in ABinBev.",
    tags: [
      { name: "angular" },
      { name: "python" },
      { name: "HTML5" },
      { name: "SASS" },
      { name: "typescript" },
      { name: "google maps" }
    ],
    link: "",
  },
  {
    id: uuid(),
    name: "mr-cake",
    description:
      "Ecommerce, Inventory manager and virtual store for commerce focused on pastry and cookie orders",
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


export { buttonColors, SKILLS, PROJECTS };
