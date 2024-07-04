import React from "react";
import AestheticonsImg from "@/public/aestheticonsimg.png";

export const links = [
  {
    name: "Home",
    hash: "",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Figma iPhone Icon Packs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["Figma", "UI/UX"],
    date: "2022",
    projectURL: "https://www.figma.com/design/lDJk2klmszuk3xHPHR4IXh/iPhone-Icons?node-id=0-1&t=cfGog6cp8gIXyNDx-1",
    githubURL: "",
    img: AestheticonsImg,
    alt: "", 
  },
  {
    title: "My Personal Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion"],
    date: "2024",
    projectURL: "",
    githubURL: "https://github.com/RylanHiltz/personal-portfolio",
    img: AestheticonsImg,
    alt: "",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: AestheticonsImg,
    alt: "",
  }
] as const;

export const skillsData = [
  // Front-end skills
  {
    title: "Frontend",
    languages: [
      {
        lang: "HTML",
        progress: 95,
      },
      {
        lang: "CSS",
        progress: 90,
      },
      {
        lang: "JS",
        progress: 78,
      },
      {
        lang: "TS",
        progress: 85,
      },
      {
        lang: "React",
        progress: 74,
      },
    ],
  },
] as const;