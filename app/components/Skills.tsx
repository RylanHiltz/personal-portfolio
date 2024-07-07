"use client";
import React from "react";
import PurpleButton from "./buttons/PurpleButton";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";
import { experienceData } from "../lib/data";

export default function Skills() {
  // Checks if the number of cards is odd or even
  const numOfExperience = experienceData.length;
  const isOdd = numOfExperience % 2 !== 0;

  return (
    <div className="flex flex-col w-full h-full my-[10em]">
      <div className="w-full max-w-fit h-fit">
        <div className="flex gap-0.5">
          <h1 className="text-[#AF93C6] text-[18px] font-medium">
            Skills & Experience
          </h1>
          <svg
            width="12"
            height="19"
            viewBox="0 0 12 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.67029e-05 9.08702C3.30498 9.08702 5.98583 5.32167 6 0.669245C6.01417 5.32167 8.69501 9.08702 12 9.08702C12 9.08702 12 9.08702 12.0001 9.08702C12 9.08702 12 9.08702 12 9.08702C8.69501 9.08702 6.01417 12.8524 6 17.5048C5.98583 12.8524 3.30498 9.08702 2.67029e-05 9.08702C1.78019e-05 9.08702 8.90096e-06 9.08702 0 9.08702C8.90096e-06 9.08702 1.78019e-05 9.08702 2.67029e-05 9.08702ZM5.98354 18.174H6.01646C6.00615 17.9774 6.00061 17.779 6 17.5789C5.99939 17.779 5.99385 17.9774 5.98354 18.174ZM6.01646 0H5.98353C5.99385 0.19658 5.99939 0.395029 6 0.595119C6.00061 0.395029 6.00615 0.19658 6.01646 0Z"
              fill="#AF93C6"
            />
          </svg>
        </div>
        <h2 className="text-[#DADDE2] font-semibold text-[24px]">
          What I&apos;ve Learned
        </h2>
        <p className="text-[#AEB1B7] max-w-[475px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-5 mt-3">
          <PurpleButton name="Contact Me" href=""></PurpleButton>
          <button>Download CV</button>
        </div>
      </div>

      {/* Timeline for experience section */}
      <div className="flex w-full mt-[4em]">
        <div className="w-[2px] bg-[#404040] mr-10"></div>

        {/* Experience Section */}
        <section className="flex flex-col w-full mr-8">
          {experienceData.map((experience, index) => (
            <div className="h-[200px] bg-[#212121] w-full rounded-[10px] px-5 py-5 mb-8 border border-[#3C3C3C] last:mb-0">
              <div className="relative right-[74px] w-6 h-6 bg-[#9175B5] rounded-full top-3"></div>
              <React.Fragment key={index}>
                <ExperienceCard {...experience} />
              </React.Fragment>
            </div>
          ))}
          {/* If experience cards are odd numbered, insert placeholder card */}
          {isOdd && (
            <div className="h-[200px] bg-[#212121] w-full rounded-[10px] px-5 py-5 mb-8 border border-[#3C3C3C] last:mb-0">
              <div className="relative right-[74px] w-6 h-6 bg-[#9175B5] rounded-full top-3"></div>
              <div className="relative bottom-5">
                <h1 className="text-[#E9E9E9] font-medium">Present-Future</h1>
                <h2 className="text-[#E9E9E9] text-[18px] font-normal mt-2">
                  ???
                </h2>
                <p className="max-w-[500px] mt-2 text-[#AEB1B7] font-light leading-7">
                  <em>
                  &ldquo;The pages of tomorrow are blank; let&lsquo;s write something
                    incredible.&rdquo;
                  </em>
                  <strong className="font-medium"> Unknown</strong>
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section>
          {skillsData.map((skills, index) => (
            <div className="h-[432px] bg-[#212121] w-[325px] rounded-[10px] px-5 py-5 border border-[#3C3C3C] mb-8 last:mb-0">
              <React.Fragment key={index}>
                <SkillsCard {...skills} />
              </React.Fragment>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

type experienceProps = (typeof experienceData)[number];

function ExperienceCard({ date, title, description }: experienceProps) {
  return (
    <div className="relative bottom-5">
      <h1 className="text-[#E9E9E9] font-medium">{date}</h1>
      <h2 className="text-[#E9E9E9] text-[18px] font-normal mt-2">{title}</h2>
      <p className="max-w-[500px] mt-2 text-[#AEB1B7] font-light leading-7">{description}</p>
    </div>
  );
}

type skillsProps = (typeof skillsData)[number];

function SkillsCard({ title, languages, skills }: skillsProps) {
  return (
    <div className="h-full flex flex-col">
      <h1>{title} Languages</h1>
      <div className="w-full flex-grow">
        <div className="mt-3">
          {languages.map((language, index) => (
            <div key={index} className="flex justify-end my-1.5">
              <div>
                <p className="text-[#BFBFBF]">{language.lang}</p>
              </div>

              <div className="h-3.5 w-3/5 bg-[#323232] rounded-full ml-3 mt-1 bg-clip-border">
                <motion.div
                  className="h-3.5 bg-[#9175B5] rounded-full"
                  style={{ width: `${language.progress}%` }}
                  // TEST ANIMATION FOR PROGRESS BAR
                  // initial={{
                  //   scaleX: 0,
                  //   scaleY: 1,
                  //   borderRadius: "9999px",
                  //   x: 1.6,
                  // }}
                  // animate={{ scaleX: 1, originX: 0, x: 0 }}
                  // transition={{
                  //   delay: 0.4 * index,
                  //   ease: "easeOut",
                  //   duration: 0.4,
                  // }}
                ></motion.div>
              </div>

              <div className="ml-2">
                <p className="text-[#BFBFBF]">{language.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="mt-auto">{title} Skills</h1>
      <p className="text-[#AEB1B7] font-light mt-1 leading-7 mb-3">{skills}</p>
    </div>
  );
}
