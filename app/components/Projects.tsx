"use client";
import React, { useState } from "react";
import { projectsData } from "@/app/lib/data";

export default function Projects() {
  // number of projects that are visible to the user
  const [visibleProjects, setVisibleProjects] = useState<number>(3);

  // increment visible projects shown by 3
  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  return (
    <section>
      <div className="grid grid-cols-2 w-full mt-20 pb-10">
        <h2 className="text-2xl font-extralight">Projects</h2>
        <p className="text-2xl font-extralight justify-self-end">
          2024 - Recent
        </p>
      </div>
      <div>
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* show more button */}
      {/* TODO: Make button go away after all project have been displayed */}
      <div className="flex w-full justify-center items-center self-center">
        <button
          onClick={showMoreProjects}
          className="mt-4 px-3 py-2 bg-[#1B1B1B] text-[#7C7C7C] rounded font-medium hover:text-[#aaa7a5] transition"
        >
          Show More
        </button>
      </div>
    </section>
  );
}

type projectProps = (typeof projectsData)[number];

// TODO: Add animation for hovering individual project (see figma document)
// will have to update props for function when adding image, date and href (might incorperate github)
function Project({ title, description, tags }: projectProps) {
  return (
    <div className="z-3 flex w-full h-fit min-h-[310px] bg-[#1B1B1B] mb-[75px] mt-6 py-8 px-8 rounded-[15px]  max-875px:flex-col">
      <div className="flex flex-col justify-end">
        {/* Placeholder div for image, can delete later or fit the image to the div */}
        <div className="min-h-[250px] w-[400px] bg-[#333333] flex-none rounded-[5px] max-1015px:mb-5">
          <img src="" alt="" />
        </div>
        {/* tag section for tablet mobile responsiveness */}
        <div className="h-[30px] w-[400px] rounded-[5px] hidden max-1015px:block max-875px:hidden">
          <ul className="h-[30px] flex gap-5 ">
            {tags.map((tag, index) => (
              <li
                className="h-full w-fit bg-[#4B4B4B] px-2 py-1 rounded text-sm"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full max-h-[310px] pl-10 flex flex-col max-1015px:min-h-[310px] justify-around max-875px:pl-0">
        <div className="flex w-full place-content-between font-medium text-lg">
          <p>{title}</p>
          <p>2023</p>
        </div>

        {/* Description Paragraph */}
        <p className="max-1015px:pt-7 font-light max-1015px:h-full">
          {description}
        </p>
        <div className="flex place-content-between max-1015px:place-content-end max-875px:place-content-between">
          {/* Desktop/Mobile Tags */}
          <ul className="max-h-[30px] flex gap-5 max-1015px:hidden mt-8 max-875px:flex">
            {tags.map((tag, index) => (
              <li
                className="h-full w-fit bg-[#4B4B4B] px-2 py-1 rounded text-sm"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {/* Placeholder for Github button and arrow to click for website */}
          <div className="min-h-[30px] w-[75px] bg-[#333333] rounded-[5px] mt-8"></div>
        </div>
      </div>
    </div>
  );
}
