import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center justify-center my-[4em] text-[#727272]">
        <small>
          &copy; 2024 Rylan Hiltz. All Rights Reserved
        </small>
        <p className="font-extralight text-sm mt-1">
            About this website: built with React & Next.JS (App Router), Typescript, Tailwind CSS, Framer Motion, Vercel Hosting
        </p>
    </footer>
  );
}
