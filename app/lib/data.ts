import React from "react";
import AestheticonsImg from "@/public/aestheticonsimg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Aestheticons - iPhone Icons",
    description:
      "Aestheticons was a ~8 month project where I transformed 400 brand SVGs into icons, all designed in Figma. I compiled and converted logos into icons and reconstructed an iPhone home screen for image listings. This side project aimed at my Etsy store was able to gain over 1800 views and 50+ sales.",
    tags: ["Figma", "UI/UX"],
    date: "2022",
    projectURL:
      "https://www.figma.com/design/lDJk2klmszuk3xHPHR4IXh/iPhone-Icons?node-id=0-1&t=cfGog6cp8gIXyNDx-1",
    githubURL: "",
    img: AestheticonsImg,
    alt: "",
  },
  {
    title: "My Personal Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion"],
    date: "2024",
    projectURL: "",
    githubURL: "https://github.com/RylanHiltz/personal-portfolio",
    img: AestheticonsImg,
    alt: "",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: AestheticonsImg,
    alt: "",
  },
] as const;

export const skillsData = [
  { // Frontend skills
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
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  { // Backend skills
    title: "Backend",
    languages: [
      {
        lang: "Java",
        progress: 78,
      },
      {
        lang: "Python",
        progress: 70,
      },
      {
        lang: "SQL",
        progress: 35,
      },
      {
        lang: "C#",
        progress: 80,
      },
      {
        lang: "C++",
        progress: 40,
      },
    ],
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
] as const;

export const experienceData = [
  {
    date: "2018-2022",
    title: "Graduated From Eastview Secondary School",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "2022-2026",
    title: "Studying At Trent University",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "2024-Present",
    title: "Front-End Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
