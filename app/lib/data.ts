import React from "react";

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

// TODO: make list of project data for exporting [name, date, description, href] for each project
export const projectsData = [
  {
    title: "Figma iPhone Icon Pack ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "this is a description for the 2nd project :O",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 3",
    description: "this is a description for the 3rd project :)",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 4",
    description: "this is a description for the 4th project :(",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 5",
    description: "this is a description for the 5th project :D",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 6",
    description: "this is a description for the 6th project :C",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  }
] as const;

