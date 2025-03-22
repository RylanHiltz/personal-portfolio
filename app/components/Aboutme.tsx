"use client";
import React from "react";
import { motion } from "framer-motion";
import headshot from "../images/headshot.jpg";

export default function Aboutme() {
  // Variants for fade-in animation when in view
  const aboutVariants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    },
  };

  return (
    <section
      className="flex justify-between items-center my-[12em] max-aboutme-tablet:flex-col max-aboutme-tablet:gap-[150px] max-mobile-lg:my-4 scroll-mt-[15em]"
      id="about"
    >
      <div>
        <motion.div
          className="max-w-full flex flex-col justify-start items-start self-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={aboutVariants}
          viewport={{ once: true }}
        >
          <div className="flex gap-0.5">
            <h1 className="text-[#AF93C6] text-[18px] font-medium">About Me</h1>
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
          <h2 className="text-2xl font-semibold py-1">Hey, I&apos;m Rylan</h2>
          <p className="text-[#D7D7D7] text-md font-extralight leading-8 text-start max-w-[525px] max-aboutme-tablet:max-w-full bg-[#161616]">
            I&apos;m a Canadian software developer with a strong interest in web
            development—both frontend and backend, and love to turn random ideas
            into real, working projects. From experimenting in Photoshop to
            creating logos and designing websites, I eventually found myself
            diving into code to bring those ideas to life. Now, I combine my eye
            for design with my technical skills to build projects that are both
            functional & visually engaging!
          </p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[325px] min-h-[325px] mx-10">
        {/* Colored squares behind */}
        <div className="absolute w-[100px] h-[100px] bg-[var(--primary2)] rounded-xl top-[-55px] right-[-55px] z-10 rotate-[16deg]"></div>
        <div className="absolute w-[110px] h-[110px] bg-[var(--primary1)] rounded-xl bottom-[-55px] left-[-55px] z-0 rotate-[12deg]"></div>

        {/* Card with higher z-index */}
        <div className="relative w-full h-full bg-[#1B1B1B] rounded-[2em] border border-[#3C3C3C] z-20">
          {/* Colored squares in front */}

          <div className="absolute w-[110px] h-[110px] bg-[var(--primary3)] rounded-xl top-[-55px] left-[-55px] z-0 rotate-[-12deg]"></div>
          <div className="absolute w-[100px] h-[100px] bg-[var(--primary3)] rounded-xl bottom-[-55px] right-[-55px] z-10 rotate-[-18deg]"></div>

          {/* Main content */}
          <div className="min-h-[325px] flex flex-col items-center justify-center z-50 relative">
            <img
              className="w-[175px] h-[175px] bg-[#353535] object-scale-down rounded-full"
              src={headshot.src}
            />
            <p className="text-center py-4 font-medium">Hey, Thats Me! 👋</p>
          </div>
        </div>
      </div>
    </section>
  );
}
