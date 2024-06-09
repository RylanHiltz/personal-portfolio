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
    title: "Project 1",
    description: "this is a description",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 2",
    description: "this is a description",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 3",
    description: "this is a description",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 4",
    description: "this is a description",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 5",
    description: "this is a description",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project 6",
    description: "this is a description",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  }
] as const;

