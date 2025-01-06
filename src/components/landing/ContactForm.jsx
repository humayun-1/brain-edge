"use client"

import * as React from "react";

export default function ContactForm() {
  return (
    <form className="flex flex-col w-full max-lg:max-w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col w-full text-base font-medium text-white max-lg:max-w-full">
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          id="fullName"
          type="text"
          className="gap-2.5 self-stretch px-4 py-4 w-full rounded border border-solid bg-[#292826] border-amber-300 border-opacity-20 min-h-[54px] max-lg:max-w-full"
          placeholder="Full Name"
        />
        
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          className="gap-2.5 self-stretch px-4 py-4 mt-5 w-full rounded border border-solid bg-[#292826] border-amber-300 border-opacity-20 min-h-[54px] max-lg:max-w-full"
          placeholder="Email"
        />
        
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          className="resize-none gap-2.5 px-4 pt-4 pb-40 mt-5 w-full rounded border border-solid bg-[#292826] border-amber-300 border-opacity-20 min-h-[196px] max-lg:pb-24 max-lg:max-w-full"
          placeholder="Message"
        />
      </div>
      <button 
        type="submit"
        className="gap-2.5 self-center px-6 py-3 mt-10 max-w-full text-lg font-bold text-amber-300 whitespace-nowrap rounded-lg border border-amber-300 border-solid w-[201px] max-lg:px-5 hover:bg-amber-300 hover:text-neutral-800"
      >
        Submit
      </button>
    </form>
  );
}