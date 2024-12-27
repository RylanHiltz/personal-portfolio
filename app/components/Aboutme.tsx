"use client";
import React from "react";
import { motion } from "framer-motion";

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
      className="flex justify-between items-center my-[12em] max-aboutme-tablet:flex-col max-mobile-lg:my-4 scroll-mt-[15em]"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </motion.div>
      </div>

      {/* Placeholder Apps */}
      {/* <div className="bg-blue-400 min-w-[110px] min-h-[110px] rounded-xl relative left-[30em] bottom-[10.5em] rotate-12 z-10"></div>
      <div className="bg-blue-400 min-w-[100px] min-h-[100px] rounded-xl relative left-[23.5em] bottom-[-10em] z-30"></div> */}

      <div className="w-full max-w-[325px] min-h-[325px] bg-[#1B1B1B] rounded-[2em] border border-[#3C3C3C] z-20">
        {/* <div className="w-[100px] h-[100px] rounded-lg bg-[#72d7df] absolute bottom-0 left-0"></div> */}
        <div className="min-h-[325px] flex flex-col items-center justify-center">
          {/* Placeholder for image */}
          <div className="w-[175px] h-[175px] rounded-full bg-[#353535]"></div>
          <p className="text-center py-4 font-medium">Hey, Thats Me! 👋</p>
        </div>
      </div>
    </section>
  );
}
