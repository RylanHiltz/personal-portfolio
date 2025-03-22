import React from "react";
import SocialButton from "./buttons/SocialButton";

export default function InfoBar() {
  return (
    <div className="grid grid-cols-6 grid-rows-1 gap-5 my-20 max-laptop:grid-flow-row max-laptop:max-w-[425px] max-laptop:grid-cols-4 ">
      <div className="col-span-3 max-laptop:col-span-4">
        <h2>Recent Experience</h2>
        <p className="text-[#CACACA] text-sm font-light pt-1">
          3rd Year Computer Science Student @ Trent University{" "}
        </p>
      </div>

      <div className=" max-mobile-lg:col-span-4">
        <h2>Location</h2>
        <p className="text-[#CACACA] text-sm font-light pt-1">Ontario, CA </p>
        {/* <p className="text-[#CACACA] text-sm font-light pt-1 mobile-lg:hidden">Ontario, Canada</p> */}
      </div>

      {/* TODO: Think about changing Dribbble and Awwards to email and something else */}
      <div className="col-span-2 justify-self-end max-laptop:col-span-3 max-laptop:justify-self-start">
        <h2>Socials</h2>
        <div>
          <ul className="flex flex-nowrap gap-4">
            <li>
              <SocialButton
                name="GitHub"
                href="https://github.com/RylanHiltz"
              />
            </li>
            <li>
              <SocialButton
                name="LinkedIn"
                href="https://www.linkedin.com/in/rylan-hiltz-79485b231/"
              />
            </li>
            <li>
              <SocialButton
                name="Indeed"
                href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage"
              />
            </li>
            <li>
              <SocialButton name="Email" href="mailto:rylanhiltz2@gmail.com" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
