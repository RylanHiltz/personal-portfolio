"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import usePageBottom from "./usePageBottom";


// TODO: Make navbar smooth scroll to different sections of page
export default function NavBar() {
  
  let NavbarVariants = {
    bottom: {},
  }

  // returns true when bottom of page is reached, else false 
  const reachedBottom = usePageBottom();

  if (reachedBottom){
    NavbarVariants = {
      bottom: {
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.4,
        },
      },
    }
  }

  return (
    <motion.nav className="self-center z-50 bg-[#5d5d5d]/40 shadow-md shadow-black/[0.03] fixed bottom-12  backdrop-blur-[0.3rem] bg-opacity-70 rounded-2xl h-full w-full max-w-min max-h-[65px] justify-center px-8 flex"
    variants={NavbarVariants}
    animate="bottom">
      <ul className="flex items-center justify-center gap-6">
        {links.map((link) => (
          <motion.li key={link.hash}>
            <Link className="hover:text-[#b1afae] transition" href={link.hash}>
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
