"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import usePageBottom from "./usePageBottom";
import clsx from "clsx";

export default function NavBar() {
  // declare active section for navbar styling
  const [activeSection, setActiveSection] = useState("Home");

  // returns true when bottom of page is reached, else false
  const reachedBottom = usePageBottom();

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const variants = {
    hidden: {
      opacity: 0,
      y: -25,
      transition: { duration: 0.4, delay: hasAnimated ? 0 : 1.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: hasAnimated ? 0 : 1.5 },
    },
  };

  return (
    <motion.nav
      className="self-center z-50 bg-[#424242]/60 shadow-md shadow-black/[0.03] fixed top-7 backdrop-blur-[0.3rem] bg-opacity-70 rounded-2xl h-full w-full max-w-[400px] max-h-[65px] flex min-w-[100px] px-3"
      initial="hidden"
      animate={reachedBottom ? "hidden" : "visible"}
      variants={variants}
    >
      <ul className="flex items-center justify-between w-full ">
        {links.map((link) => (
          <motion.li key={link.hash} className="relative py-2 px-2">
            <Link
              className={clsx(`transition duration-75`, {
                "text-[#ad8cda] font-medium": activeSection === link.name,
                "hover:text-[#a5a5a5] transition duration-500":
                  activeSection !== link.name,
              })}
              href={link.hash}
              onClick={() => setActiveSection(link.name)}
            >
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className=" bg-[#000000]/20 rounded-lg absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 40,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
