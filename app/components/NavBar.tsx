"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";



export default function NavBar() {
  return (
    <div className="flex justify-center self-center">
      <div className="z-50 bg-gradient-to-r from-[#C3C3C3]/30 to-[#5D5D5D]/15 shadow-md shadow-black/[0.03] fixed bottom-12  backdrop-blur-[0.3rem] bg-opacity-20 rounded-2xl h-full w-full max-w-[350px] max-h-[65px] justify-center px-3 flex">
        <ul className="flex items-center justify-center gap-6">
          {links.map((link) => (
            <motion.li
              key={link.hash}
            >
              <Link
                className="hover:text-[#b1afae] transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
