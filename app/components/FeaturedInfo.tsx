"use client";
import React from "react";
import { motion } from "framer-motion";

import SocialButton from "./SocialButton";

export default function InfoBar() {
  return (
    // TODO: change "mobile-lg" to tablet after making screen widths for resposiveness
    <div className="grid grid-cols-6 grid-rows-1 gap-5 my-20 max-mobile-lg:grid-flow-row max-mobile-lg:max-w-[425px] max-mobile-lg:grid-cols-4 ">
      <div className="col-span-3 max-mobile-lg:col-span-4">
        <h2>Recent Experience</h2>
        <p className="text-[#CACACA] text-sm font-light pt-1">
          Freelance Web Developer with 10+ satisfied clients{" "}
        </p>
      </div>

      <div>
        <h2>Location</h2>
        <p className="text-[#CACACA] text-sm font-light pt-1">Ontario, CA </p>
      </div>

      <div className="col-span-2 justify-self-end max-mobile-lg:col-span-3 max-mobile-lg:justify-self-start">
        <h2>Socials</h2>
        <div>
          <ul className="flex flex-wrap gap-4">
            <li>
              <SocialButton
                name="GitHub"
                href="https://github.com/RylanHiltz"
              />
            </li>
            <li>
              <SocialButton name="LinkedIn" href="" />
            </li>
            <li>
              <SocialButton name="Dribbble" href="" />
            </li>
            <li>
              <SocialButton name="Awwwards" href="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
