"use client";

import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function InfoBar() {
  return (
    <div className="grid grid-cols-6 grid-rows-1 gap-5 my-20">
      <div className="col-span-3">
        <h2>Recent Experience</h2>
        <p className="text-[#CACACA] text-sm font-light pt-1">
          Freelance Web Developer with 10+ satisfied clients (cap){" "}
        </p>
      </div>

      <div>
        <h2>Location</h2>
        <p className="text-[#CACACA] text-sm font-light pt-1">Ontario, CA </p>
      </div>

      <div className="col-span-2">
        <h2>Socials</h2>
        <div>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                className=" text-[#CACACA] text-sm font-light pt-1 hover-underline"
                href="https://github.com/RylanHiltz"
                target="_blank"
               >
                GitHub
              </a>
            </li>
            <li>
              <a
                className=" text-[#CACACA] text-sm font-light pt-1 hover-underline"
                href=""
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className=" text-[#CACACA] text-sm font-light pt-1 hover-underline"
                href=""
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                className=" text-[#CACACA] text-sm font-light pt-1 hover-underline"
                href=""
              >
                Awwwards
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};