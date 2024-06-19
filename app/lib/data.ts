import React from "react";
import AestheticonsImg from "@/public/aestheticons.svg";

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

// TODO: make list of project data for exporting [name, date, description, projectURL] for each project
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
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "https://github.com/RylanHiltz/personal-portfolio",
    img: "",
    alt: "",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: "",
    alt: "",
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: "",
    alt: "",
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: "",
    alt: "",
  },
  {
    title: "Project 6",
    description: "this is a description for the 6th project :C",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: "",
    alt: "",
  }
] as const;

