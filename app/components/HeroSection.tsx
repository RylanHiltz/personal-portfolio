"use client";
import React from "react";
import { motion } from "framer-motion";

// TODO: Restructure animations to be like project section animations
let gridDelay = 0.3;
let gridDuration = 0.75;

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
  duration: gridDuration,
};

const text1 = {
  delay: gridDelay,
  ease: "easeOut",
  duration: gridDuration,
};

const transition2 = {
  delay: gridDelay * 2,
  ease: "easeOut",
  duration: gridDuration,
};

const transition3 = {
  delay: gridDelay * 3.5,
  ease: "easeOut",
  duration: gridDuration,
};

export default function HeroSection() {
  return (
    <section className="max-w-[566px] scroll-mt-[100em]" id="home">
      <div className="grid grid-flow-col gap-3 w-grid1 pb-6">
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#705F85]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#40344F]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid2 pb-6">
        <motion.div
          className="col-span-5 w-full h-5 rounded-sm bg-[#40344F]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#705F85]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-5 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid3 pb-6 ml-5">
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-4 w-full h-5 rounded-sm bg-[#705F85]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <motion.div
        className="ml-5"
        initial={{ opacity: 0.001 }}
        animate={animate}
        transition={text1}
      >
        <h1 className="text-4xl font-semibold">Rylan Hiltz</h1>
        <p className="font-regular text-lg">
          Full-Stack Developer & UX Designer
        </p>
      </motion.div>

      <div className="grid grid-flow-col gap-3 w-grid4 py-6 ml-5">
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#705F85]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#40344F]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid5 pb-6">
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#40344F]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-1 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-3 w-full h-5 rounded-sm bg-[#705F85]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>

      <div className="grid grid-flow-col gap-3 w-grid6 pb-6">
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#59456A]"
          initial={initial}
          animate={animate}
          transition={transition1}
        ></motion.div>
        <motion.div
          className="col-span-4 w-full h-5 rounded-sm bg-[#705F85]"
          initial={initial}
          animate={animate}
          transition={transition2}
        ></motion.div>
        <motion.div
          className="col-span-2 w-full h-5 rounded-sm bg-[#40344F]"
          initial={initial}
          animate={animate}
          transition={transition3}
        ></motion.div>
      </div>
    </section>
  );
}
