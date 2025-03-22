"use client";
import React from "react";
import PurpleButton from "./buttons/PurpleButton";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";
import { experienceData } from "../lib/data";

export default function Skills() {
  // Checks if the number of cards is odd or even
  const numOfExperience = experienceData.length;
  let isOdd = numOfExperience % 2 !== 0;

  return (
    <div
      className="flex flex-col w-full h-full my-[10em] scroll-mt-[8.25em]"
      id="skills"
    >
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
        <p className="text-[#AEB1B7] max-w-[450px] pb-1 font-light bg-[#161616]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-5 mt-3">
          <PurpleButton name="Contact Me" href="#contact"></PurpleButton>
          <button>Download CV</button>
        </div>
      </div>

      {/* Div that holds [Timeline, Experience, & Skills] */}
      <div className="flex w-full mt-[4em] max-920px:flex-col-reverse max-920px:gap-8">
        {/* Experience Section */}
        <div className="w-full flex">
          {/* Timeline for experience section */}
          <div className="w-[1px] bg-[#404040] mr-10"></div>

          {/* Experience Cards */}
          <section className="flex flex-col w-full mr-8 max-920px:mr-0">
            {experienceData.map((experience, index) => (
              <React.Fragment key={index}>
                <div className="h-[200px] bg-[#212121] w-full rounded-[10px] px-5 py-5 mb-8 border border-[#3C3C3C] last:mb-0 max-650px:h-min">
                  <div className="relative right-[70px] w-[18px] h-[18px] bg-[#9175B5] rounded-full top-3"></div>
                  <ExperienceCard {...experience} />
                </div>
              </React.Fragment>
            ))}
            {/* If experience cards are odd numbered, insert placeholder card */}
            {isOdd && (
              <div className="h-[200px] bg-[#212121] w-full rounded-[10px] px-5 py-5 mb-8 border border-[#292929] last:mb-0">
                <div className="relative right-[70px] w-[18px] h-[18px] bg-[#9175B5] rounded-full top-3"></div>
                <div className="relative bottom-5">
                  <h1 className="text-[#E9E9E9] font-medium">Present-Future</h1>
                  <h2 className="text-[#E9E9E9] text-[18px] font-normal mt-2">
                    ???
                  </h2>
                  <p className="max-w-[500px] mt-2 text-[#c2c2c2] font-light leading-7">
                    <em>
                      &ldquo;The pages of tomorrow are blank; let&lsquo;s write
                      something incredible.&rdquo;
                    </em>
                    <br></br>
                    <strong className="font-medium"> - Unknown</strong>
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Skills Section */}
        <section className=" max-585px:flex-col max-585px:gap-0">
          {skillsData.map((skills, index) => (
            <React.Fragment key={index}>
              <div className="h-[432px] bg-[#212121] w-[325px] rounded-[10px] px-5 py-5 border border-[#3C3C3C] mb-8 last:mb-0 max-920px:w-full max-920px:h-min">
                <SkillsCard {...skills} />
              </div>
            </React.Fragment>
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
      <p className="max-w-[500px] mt-2 text-[#c2c2c2] font-light leading-7 max-920px:max-w-full">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

type skillsProps = (typeof skillsData)[number];

function SkillsCard({ title, languages, skills }: skillsProps) {
  return (
    <div className="h-full flex flex-col max-920px:flex-row max-920px:gap-[3em] max-skills-mobile:flex-col max-skills-mobile:gap-0">
      <div>
        <div className="w-full h-full">
          {/* Div for all progress bars */}
          <div className="flex flex-col w-full min-w-[275px] max-920px:h-full max-skills-mobile:min-w-[100px]">
            <h1>{title} Languages</h1>
            <div className="mt-3 max-920px:flex max-920px:flex-col max-920px:justify-evenly max-920px:h-full">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex justify-end my-1.5 max-920px:my-0.5 max-skills-mobile:my-1"
                >
                  <div>
                    <p className="flex justify-end text-[#c2c2c2] max-920px:w-[55px]">
                      {language.lang}
                    </p>
                  </div>
                  {/* Progress Bars */}
                  <div className="h-3.5 w-full max-w-[175px] bg-[#323232] rounded-full ml-3 mt-1 bg-clip-border max-skills-mobile:max-w-full">
                    <motion.div
                      className="h-3.5 bg-[#9175B5] rounded-full"
                      style={{ width: `${language.progress}%` }}
                    ></motion.div>
                  </div>

                  <div className="ml-2">
                    <p className="text-[#c2c2c2]">{language.progress}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto max-920px:mt-0 max-skills-mobile:mt-5 ">
        <h1>{title} Skills</h1>
        <p className="text-[#c2c2c2] font-light mt-1 leading-7 mb-3">
          {skills}
        </p>
      </div>
    </div>
  );
}

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
