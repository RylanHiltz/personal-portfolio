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
      <div className="flex w-full justify-center items-center self-center">
        <button
          onClick={showMoreProjects}
          className="mt-4 px-3 py-2 bg-[#1B1B1B] text-[#7C7C7C] rounded font-medium"
        >
          Show More
        </button>
      </div>
    </section>
  );
}

type projectProps = (typeof projectsData)[number];

// will have to update props for function when adding image and href
function Project({ title, description, tags }: projectProps) {
  return (
    <section className="flex w-full  h-full min-h-[325px] bg-[#1B1B1B] my-11 rounded-[15px]">
      <div className="py-10 px-10">{title}</div>
    </section>
  );
}
