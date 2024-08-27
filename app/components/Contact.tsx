"use client";

import React, { FormEvent, useState } from "react";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // TODO: Add function to stop the ability to spam 
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err: any) {
      console.log("Error: ", err);
    }
  };

  return (
    <section
      className="flex justify-between mt-20 mb-[6em] gap-10 max-contact-tablet:flex-col scroll-mt-[8em] max-mobile-lg:scroll-mt-[-20em]"
      id="contact"
    >
      {/* Contact Info */}
      <div className="self-center max-contact-tablet:self-start max-contact-tablet:mb-5">
        <div className="">
          <h1 className="text-[30px] font-semibold leading-10 text-nowrap">
            Want To Get In Touch?<br></br>Send Me A Message!
          </h1>
          <h2 className="text-[15px] text-[#AEB1B7] font-light mt-2 mb-6 ">
            Contact me directly or via the provided form
          </h2>
          {/* Email & Phone */}
          <div className="ml-4">
            <div className="mt-4 flex gap-4 items-center">
              <MdPhone size={22} />
              <a className="underline font-light" href="tel:+17057161324">
                1+ 705-716-1324
              </a>
            </div>
            <div className="mt-4 flex gap-4 items-center">
              <MdEmail size={22} />
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
        className="w-full min-w-[100px] max-w-[500px] min-h-[450px] bg-[#212121] px-[40px] py-[40px] rounded-[20px] flex flex-col gap-5 border border-[#3C3C3C] max-contact-tablet:max-w-full max-mobile-lg:py-7 max-mobile-lg:px-7 max-mobile-lg:rounded-xl"
        onSubmit={onSubmit}
      >
        <h1 className="font-medium text-[20px]">Send Me An Email!</h1>
        {/* Input for Email */}
        <div>
          <h2 className="mb-1 text-[#c4c4c4] text-[15px]">Email:</h2>
          <input
            className="w-full h-10 bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block transition ease-in-out duration-300"
            type="email"
            id="email"
            name="senderEmail"
            required
            maxLength={500}
            autoComplete="email"
            placeholder="Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Input for Subject */}
        <div>
          <h2 className="mb-1 text-[#c4c4c4] text-[15px]">Subject:</h2>
          <input
            className="w-full h-10 bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block transition ease-in-out duration-300"
            name="subject"
            type="text"
            placeholder="Subject"
            autoComplete="off"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <h2 className="mb-1 text-[#c4c4c4] text-[15px]">Message:</h2>
          <textarea
            className="w-full min-h-[125px] bg-[#484848] border-2 border-[#484848] appearance-none rounded-[5px] px-4 pt-2 placeholder:text-[#8E8E8E] text-sm focus:outline-none focus:border-[#AF93C6] block transition ease-in-out duration-300"
            name="message"
            required
            placeholder="Your Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
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
