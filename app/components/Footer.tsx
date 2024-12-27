import React from "react";

export default function Footer() {
  return (
    // TODO: hide bottom p when max mobile large?
    <footer className="flex flex-col w-full items-center justify-center mt-[2em] mb-[2.5em] text-[#727272]">
      <small>&copy; 2024 Rylan Hiltz. All Rights Reserved</small>
      <p className="font-extralight text-sm mt-1 text-center">
        About this website: built with React & Next.JS (App Router), Typescript,
        Tailwind CSS, Framer Motion, Vercel Hosting
      </p>
    </footer>
  );
}
