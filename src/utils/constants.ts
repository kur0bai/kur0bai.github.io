import { Cloud, Code2, Server } from "lucide-react";

const buttonColors = {
  PRIMARY: "primary",
};

const skills: ISkill[] = [
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

export { buttonColors, skills };
