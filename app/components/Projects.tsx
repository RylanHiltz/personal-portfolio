"use client";
import React, { useState, useEffect } from "react";
import { projectsData } from "@/app/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  // number of projects that are visible to the user
  const [visibleProjects, setVisibleProjects] = useState<number>(3);

  // increment visible projects shown by 3
  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  return (
    <section id="projects" className="scroll-m-[5.75em]">
      <div className="flex justify-between  w-full mt-20 pb-10 items-end">
        <div>
          <div className="flex">
            <h1 className="text-[#AF93C6] text-[18px] font-medium">
              Projects & Work
            </h1>
            <svg
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67029e-05 9.08702C3.30498 9.08702 5.98583 5.32167 6 0.669245C6.01417 5.32167 8.69501 9.08702 12 9.08702C12 9.08702 12 9.08702 12.0001 9.08702C12 9.08702 12 9.08702 12 9.08702C8.69501 9.08702 6.01417 12.8524 6 17.5048C5.98583 12.8524 3.30498 9.08702 2.67029e-05 9.08702C1.78019e-05 9.08702 8.90096e-06 9.08702 0 9.08702C8.90096e-06 9.08702 1.78019e-05 9.08702 2.67029e-05 9.08702ZM5.98354 18.174H6.01646C6.00615 17.9774 6.00061 17.779 6 17.5789C5.99939 17.779 5.99385 17.9774 5.98354 18.174ZM6.01646 0H5.98353C5.99385 0.19658 5.99939 0.395029 6 0.595119C6.00061 0.395029 6.00615 0.19658 6.01646 0Z"
                fill="#AF93C6"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-medium">A Look At My Creations</h2>
        </div>
        <p className="text-2xl font-medium justify-self-end">2022 - Recent</p>
      </div>
      <div className="flex flex-col max-project-tablet:justify-center max-project-tablet:align-center items-center">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* show more button */}
      <div className="flex w-full justify-center items-center self-center">
        {visibleProjects < projectsData.length && (
          <button
            onClick={showMoreProjects}
            className="mt-4 px-3 py-2 bg-[#1B1B1B] text-[#7C7C7C] rounded font-medium hover:text-[#aaa7a5] transition"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

type projectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  date,
  projectURL,
  githubURL,
  img,
  alt,
}: projectProps) {
  // Variants for 3D hover animation
  const [layer1, setLayer1] = useState({});
  const [layer2, setLayer2] = useState({});

  // Disables project hover animation for mobile screens
  useEffect(() => {
    // Checks if screen is mobile
    let isMobile = window.innerWidth < 450;

    if (!isMobile) {
      setLayer1({
        rest: {
          x: 0,
          y: 0,
          transition: {
            duration: 0.4,
            type: "tween",
            bounce: 0,
          },
        },
        hover: {
          x: -7,
          y: -7,
          backgroundColor: "#1E1E1E",
          transition: {
            duration: 0.65,
            type: "spring",
            bounce: 0,
          },
        },
      });
      setLayer2({
        rest: {
          x: 0,
          y: 0,
          transition: {
            duration: 0.4,
            type: "tween",
            bounce: 0,
          },
        },
        hover: {
          x: -7,
          y: -7,
          transition: {
            duration: 0.65,
            type: "spring",
            bounce: 0,
          },
        },
      });
    }
  }, [setLayer1, setLayer2]);

  // Variants for Github and project button animations
  const buttonVariants = {
    tap: {
      y: 2,
      transition: { duration: 0.125 },
    },
    hover: {
      y: -3,
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };
  const pathVariants = {
    tap: {
      fill: "#4F4557",
      transition: { duration: 0.125 },
    },
    hover: {
      fill: "#8D77A8",
      transition: { duration: 0.275 },
    },
  };

  const squares = [
    {
      top: "10%",
      left: "20%",
      size: 50,
      bg: "#4E3D5B",
      rotate: 15,
    },
    {
      top: "25%",
      left: "40%",
      size: 30,
      bg: "#3E334C",
      rotate: 5,
    },
    {
      top: "40%",
      left: "50%",
      size: 70,
      bg: "#3E334C",
      rotate: -10,
    },
    {
      top: "55%",
      left: "30%",
      size: 40,
      bg: "#4E3D5B",
      rotate: 10,
    },
    {
      top: "70%",
      left: "10%",
      size: 40,
      bg: "#4E3D5B",
      rotate: 25,
    },
    {
      top: "85%",
      left: "30%",
      size: 20,
      bg: "#3E334C",
      rotate: 35,
    },
  ];

  // TODO: Make a better designed project card for tablet responsivity

  // TODO: Add fade in and up animation for when individual projects are scrolled into view

  // TODO: Lower padding around project frame for mobile design and hide purple layers when screen width is > 425px
  return (
    <section className="w-full h-full max-project-tablet:max-w-[500px] relative">
      {/* Decorative divs for tablet screens */}
      {/* <motion.div
        className="hidden max-project-tablet:block absolute top-[0.1em] left-[32em] w-[200px] h-[750px] overflow-x-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {squares.map((square, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: square.top,
              left: square.left,
              width: `${square.size}px`,
              height: `${square.size}px`,
              backgroundColor: square.bg,
            }}
            variants={{
              hidden: { opacity: 0, y: 50, rotate: square.rotate - 10 },
              visible: {
                opacity: 1,
                y: 0,
                rotate: square.rotate + Math.random() * 10 - 5,
                transition: { duration: 0.5, delay: index * 0.2 },
              },
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="hidden max-project-tablet:block absolute top-[0.1em] right-[32em] w-[200px] h-[750px] scale-x-[-1] overflow-x-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {squares.map((square, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: square.top,
              left: square.left,
              width: `${square.size}px`,
              height: `${square.size}px`,
              backgroundColor: square.bg,
            }}
            variants={{
              hidden: { opacity: 0, y: 50, rotate: square.rotate - 10 },
              visible: {
                opacity: 1,
                y: 0,
                rotate: square.rotate + Math.random() * 10 - 5,
                transition: { duration: 0.5, delay: index * 0.2 },
              },
            }}
          />
        ))}
      </motion.div> */}

      {/* Layers for hover animation */}
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="z-1 w-full h-full min-h-[310px] bg-[#3E334C] rounded-[20px] max-mobile-lg:bg-transparent"
      >
        <motion.div
          variants={layer2}
          className="z-2 w-full h-full bg-[#4E3D5B] rounded-[19px] max-mobile-lg:bg-transparent"
        >
          <motion.div
            variants={layer1}
            className="z-3 flex w-full min-h-[310px] bg-[#1B1B1B] my-10 py-8 px-8 rounded-[18px] max-project-tablet:flex-col max-project-tablet:max-w-[500px] max-project-tablet:h-auto border border-[#3C3C3C]"
          >
            <div className="flex flex-col max-w-[400px] max-1030px:w-full max-project-tablet:max-w-full">
              {/* Image for project section */}
              <div className="min-h-[250px] w-[400px] fles-none max-1030px:mb-5 max-project-tablet:w-full max-project-tablet:h-min max-project-tablet:min-h-[0em] mb-auto">
                <Image
                  src={img}
                  alt={alt}
                  className="rounded-[10px] opacity-90"
                />
              </div>
              {/* Laptop/Tablet Tags */}
              <div className="h-auto max-w-[400px] rounded-[5px] hidden max-1030px:block max-project-tablet:hidden mt-auto flex-wrap">
                <ul className="h-[30px] flex gap-3">
                  {tags.map((tag, index) => (
                    <li
                      className="h-full w-fit bg-[#4B4B4B] px-2 py-1 rounded text-sm text-nowrap"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full pl-10 flex flex-col max-1030px:min-h-[310px] max-project-tablet:pl-0 max-project-tablet:h-fit">
              <div className="flex w-full place-content-between font-medium text-lg mb-3">
                <p>{title}</p>
                <p className="hidden">{date}</p>
              </div>

              {/* Project Description */}
              <p className="font-extralight mb-auto text-[#cfcfcf]">
                {description}
              </p>
              <div className="flex place-content-between max-1030px:place-content-end max-project-tablet:place-content-between max-project-tablet:pt-5">
                {/* Desktop/Mobile Tags */}
                <ul className="flex gap-3 max-1030px:hidden mt-auto max-project-tablet:flex flex-wrap">
                  {tags.map((tag, index) => (
                    <li
                      className="h-full w-fit max-h-[30px] bg-[#5D5D5D] px-2 py-1 rounded text-sm text-nowrap"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {/* Github button and arrow to navigate to project */}
                <div className="min-h-[30px] w-[75px] rounded-[5px] flex gap-3 place-content-end self-end">
                  {githubURL && (
                    <button aria-label="github">
                      <motion.a
                        href={githubURL}
                        target="_blank"
                        whileHover="hover"
                        whileTap="tap"
                        aria-label="Navigate to project's Github repository"
                      >
                        <motion.svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          variants={buttonVariants}
                        >
                          <motion.path
                            d="M10 0C4.475 0 0 4.59118 0 10.2539C0 14.7853 2.865 18.6279 6.8375 19.9823C7.3375 20.0788 7.52083 19.7618 7.52083 19.4892C7.52083 19.2457 7.5125 18.6006 7.50833 17.7461C4.72667 18.3647 4.14 16.3703 4.14 16.3703C3.685 15.1869 3.0275 14.8707 3.0275 14.8707C2.12167 14.235 3.0975 14.2478 3.0975 14.2478C4.10167 14.3196 4.62917 15.3039 4.62917 15.3039C5.52083 16.8719 6.97 16.4191 7.54167 16.1567C7.63167 15.4936 7.88917 15.0416 8.175 14.7853C5.95417 14.5289 3.62 13.6471 3.62 9.71813C3.62 8.59875 4.0075 7.68444 4.64917 6.96667C4.53667 6.70776 4.19917 5.66528 4.73667 4.2528C4.73667 4.2528 5.57417 3.97766 7.48667 5.30383C8.28667 5.07568 9.13667 4.96289 9.98667 4.95776C10.8367 4.96289 11.6867 5.07568 12.4867 5.30383C14.3867 3.97766 15.2242 4.2528 15.2242 4.2528C15.7617 5.66528 15.4242 6.70776 15.3242 6.96667C15.9617 7.68444 16.3492 8.59875 16.3492 9.71813C16.3492 13.6573 14.0117 14.5246 11.7867 14.7767C12.1367 15.0843 12.4617 15.7132 12.4617 16.6737C12.4617 18.046 12.4492 19.1483 12.4492 19.4816C12.4492 19.7507 12.6242 20.0711 13.1367 19.9686C17.1375 18.6236 20 14.7784 20 10.2539C20 4.59118 15.5225 0 10 0Z"
                            fill="#929292"
                            variants={pathVariants}
                          />
                        </motion.svg>
                      </motion.a>
                    </button>
                  )}
                  <button aria-label="project">
                    <motion.a
                      href={projectURL}
                      target="_blank"
                      whileHover="hover"
                      whileTap="tap"
                      aria-label="Navigate to project"
                    >
                      <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        variants={buttonVariants}
                      >
                        <motion.path
                          d="M0.717725 2.06906C0.716809 2.27405 0.756477 2.47718 0.834465 2.6667C0.912452 2.85621 1.0272 3.02839 1.1721 3.17329C1.31699 3.31818 1.48917 3.43293 1.67868 3.51091C1.8682 3.5889 2.07132 3.62857 2.27631 3.62765L12.273 3.62772L0.718681 14.6332C0.427366 14.9245 0.263573 15.3196 0.263421 15.7314C0.26327 16.1432 0.426702 16.5382 0.717801 16.8293C1.0089 17.1204 1.40382 17.2838 1.81565 17.2836C2.22748 17.2835 2.62255 17.1197 2.91387 16.8284L14.3408 5.78974L14.3259 15.2691C14.3258 15.6826 14.4899 16.0792 14.7822 16.3714C15.0745 16.6637 15.471 16.8278 15.8845 16.8277C16.298 16.8275 16.6947 16.6631 16.9872 16.3706C17.2797 16.0781 17.4442 15.6814 17.4443 15.2679L17.5771 2.07738C17.5729 2.49353 17.528 1.6715 17.4456 1.48449C17.3723 1.295 17.2602 1.12292 17.1166 0.979274C16.973 0.835631 16.8009 0.72359 16.6114 0.65032C16.4244 0.567867 15.5444 0.508999 15.8845 0.509235H2.27755C2.07257 0.50847 1.86941 0.548323 1.67983 0.62645C1.49026 0.704577 1.31798 0.819483 1.17297 0.964485C1.02797 1.10949 0.913066 1.28177 0.834939 1.47134C0.756812 1.66092 0.71696 1.86408 0.717725 2.06906Z"
                          fill="#929292"
                          variants={pathVariants}
                        />
                      </motion.svg>
                    </motion.a>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
