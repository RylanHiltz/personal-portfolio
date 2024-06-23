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
    // TODO: add more padding on y-axis to align with figma design
    <div>
      <motion.div
        className="max-w-full flex flex-col justify-start items-start self-center my-[10em]"
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
        <p className="text-[#D7D7D7] text-md font-extralight leading-8 text-start inline-block relative">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit.
        </p>
      </motion.div>
    </div>
  );
}
