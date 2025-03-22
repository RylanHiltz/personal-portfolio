import AestheticonsImg from "../images/aestheticonsImg.png";
import PortfolioImg from "../images/portfolioImg.png"

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
    title: "Sheetwise - AI Studysheet Generator",
    description:
      "Sheetwise is an ongoing project in development that leverages AI to transform pdf or text notes into organized, customizable PDFs. By parsing raw note content into JSON, Sheetwise will allow user to generate tailored PDFs with personalized layouts, styles, and content.",
    tags: ["Vite.js", "Javascript", "Tailwind CSS", "Python", "Django"],
    date: "2024",
    projectURL: "",
    githubURL: "",
    img: AestheticonsImg,
    alt: "",
  },
  {
    title: "Aestheticons - iPhone Icons",
    description:
      "Aestheticons was a ~8 month project where I transformed 400 brand SVGs into icons, all designed in Figma. I compiled and converted logos into icons and reconstructed an iPhone home screen for image listings. This side project aimed at my Etsy store was able to gain over 4600 views and 150+ sales.",
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
      "This project is a showcase of my most recent work, skills, and experiences. This single page website was fully built using Next.js App Router, Typescript, and Tailwind CSS. I focused on creating a cohesive site in my favourite color, featuring a fully responsive design and complex animations using Framer Motion.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion"],
    date: "2024",
    projectURL: "",
    githubURL: "https://github.com/RylanHiltz/personal-portfolio",
    img: PortfolioImg,
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
      "Also skilled with other tools sucha as Photoshop, Figma, Git, Next.js Vercel. Have experience integrating REST APIs, creating reusable components, and creating fully resposive designs.",
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
        progress: 85,
      },
      {
        lang: "C#",
        progress: 80,
      },
      {
        lang: "PHP",
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
    description: "With Honours achieving a 3.7 GPA (86%)",
  },
  {
    date: "2022-2026",
    title: "Studying At Trent University",
    description: "Bachelors of Computer Science at Trent University\nSpecializing in Software Engineering",
  },
  {
    date: "2024-Present",
    title: "Full-Time Student",
    description: "Currently focusing on personal projects, as well as  ",
  },
];
