// "use client";

import React from "react";

export default function Contact() {
  return (
    <section className="flex justify-between mt-20 mb-[11em]">
      {/* Contact Info */}
      <div className="self-center">
        <div className="">
          <h1 className="text-[30px] font-semibold leading-10">
            Want To Get In Touch?<br></br>Send Me A Message!
          </h1>
          <h2 className="text-[15px] text-[#AEB1B7] font-light mt-2 mb-6 ">
            Contact me directly or through the provided form :D
          </h2>
          {/* Email & Phone */}
          <div className="ml-4">
            <div className="mt-4 flex gap-4">
              <div className="w-7 h-7 bg-[#484848] rounded-md"></div>
              <p>+1 705-716-1324</p>
            </div>
            <div className="mt-4 flex gap-4">
              <div className="w-7 h-7 bg-[#484848] rounded-md"></div>
              <a
                className="underline font-light"
                href="mailto:rylanhiltz2@gmail.com"
              >
                rylanhiltz2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <form
        className="w-full min-w-[100px] max-w-[475px] min-h-[450px] bg-[#212121] px-[40px] py-[40px] rounded-[20px] flex flex-col gap-5 border border-[#3C3C3C]"
        // action={async (FormData) => {
        //   await sendEmail(FormData);
        // }}
      >
        <h1 className="font-medium text-[20px]">Send Me An Email!</h1>
        {/* Input for Full Name */}
        {/* <input
          className="w-full h-10 bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block"
          type="text"
          id="fullName"
          name="senderName"
          required
          maxLength={500}
          autoComplete="cc-name"
          placeholder="Full Name*"
        /> */}
        {/* Input for Email */}
        <input
          className="w-full h-10 bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block"
          type="email"
          id="email"
          name="senderEmail"
          required
          maxLength={500}
          autoComplete="email"
          placeholder="Email Address*"
        />
        {/* Input for Subject */}
        <input
          className="w-full h-10 bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block"
          name="subject"
          type="text"
          placeholder="Subject"
          autoComplete="off"
        />
        <textarea
          className="w-full min-h-[125px] bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 pt-2 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block"
          name="message"
          required
          placeholder="Your Message*"
        ></textarea>
        <button
          className="self-start bg-[#363636] py-2 px-3 rounded-md text-sm hover:scale-105 transition-all active:scale-100"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
