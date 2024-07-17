"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import usePageBottom from "./usePageBottom";


// TODO: Make navbar smooth scroll to different sections of page
// TODO: Add a border rgba( 255, 255, 255, 0.18) and box-shadow to the navbar
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
    <motion.nav className="self-center z-50 bg-gradient-to-r from-[#d3d3d3]/30 to-[#5D5D5D]/15 shadow-md shadow-black/[0.03] fixed bottom-12  backdrop-blur-[0.3rem] bg-opacity-20 rounded-2xl h-full w-full max-w-[350px] max-h-[65px] justify-center px-3 flex `${reachedBottom} ?`"
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
