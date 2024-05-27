"use client"

import React, { useEffect } from "react";
import { useAnimation, motion, useInView } from 'framer-motion'

const UseInView = () => {
    
}

export default function Aboutme() {
  return (
    <motion.div className='max-w-[700px] flex flex-col justify-center items-center self-center my-[10em]'
    >
        <h1 className='text-2xl'>About Me</h1>
        <p className='text-[#CACACA] text-md font-light leading-7 pt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </motion.div>
  )
}
