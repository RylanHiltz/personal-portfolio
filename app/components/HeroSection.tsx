"use client";

import React from "react";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

const initial = {
  x: -5,
  opacity: 0,
};

const animate = {
  x: 0,
  opacity: 1,
};

const transition1 = {
  ease: "easeOut",
  duration: 0.4,
};

const text1 = {
  delay: 0.3,
  ease: "easeOut",
  duration: 0.4,
};

const transition2 = {
  delay: 0.6,
  ease: "easeOut",
  duration: 0.4,
};

const transition3 = {
  delay: 0.9,
  ease: "easeOut",
  duration: 0.4,
};

const HeroSection = () => {
  return (
    <section className="max-w-[566px]">
      <div className="grid grid-flow-col gap-3 w-grid1 pb-6">
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid2 pb-6">
        <motion.div
          className="col-span-5 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-5 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid3 pb-6 ml-5">
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-4 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <motion.div
        className="ml-5"
        initial={initial}
        animate={animate}
        transition={text1}
      >
        <h1 className="text-4xl font-semibold">Hey I'm Rylan</h1>
        <p className="font-regular text-lg">
          Full-Stack Developer & UX Designer
        </p>
      </motion.div>

      <div className="grid grid-flow-col gap-3 w-grid4 py-6 ml-5">
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid5 pb-6">
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid6 pb-6">
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-4 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#D19A66]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
