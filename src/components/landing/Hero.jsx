"use client"
import * as React from "react";

export default function Hero() {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-start mt-16 w-full max-lg:mt-10 max-lg:max-w-full">
      <div className="flex items-start self-start">
        <div className="flex shrink-0 rounded-2xl border border-solid border-white border-opacity-10 h-[295px] w-[181px] border-l-0 rounded-l-none absolute left-0" />
        <div className="hidden lg:flex shrink-0 mt-28 max-w-full rounded-2xl border border-solid border-[#F9D342]/80 border-opacity-80 h-[264px] w-[264px] max-lg:mt-10 absolute left-[8%]" />
        <div className="flex flex-col mt-6 max-lg:max-w-full">
          <div className="flex flex-col w-full text-center text-white max-lg:max-w-full">
            <h1 className="text-6xl font-semibold max-lg:max-w-full max-lg:text-4xl">
              Empowering your brand in <br /> the digital universe
            </h1>
            <p className="self-center text-white/70 text-sm mt-6 font-medium leading-7 max-lg:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <button
            className="flex gap-2.5 justify-center items-center self-center px-6 py-3 mt-10 font-bold border-[#F9D342] rounded-lg border text-sm border-solid text-[#F9D342] hover:text-neutral-800 hover:bg-[#F9D342] max-lg:px-5 transition-all"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="self-stretch my-auto">Explore Our Services</span>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
      <div className="hidden lg:flex shrink-0 self-end mt-40 rounded-2xl border border-solid border-[#F9D342]/90 border-opacity-80 h-[264px] w-[169px] max-lg:mt-10 border-r-0 rounded-r-none absolute right-0" />
    </div>
  );
}
