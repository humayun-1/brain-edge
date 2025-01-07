import * as React from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <div className="sticky top-[2rem] flex flex-wrap lg:gap-10 gap-2 justify-between items-center self-center px-5 lg:px-8 py-3 text-sm rounded-lg border border-solid bg-black bg-opacity-20 backdrop-blur-sm border-sky-400 border-opacity-10 w-[90%] max-w-[1284px] max-lg:px-5 max-lg:max-w-full z-[999999]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d926be8db7db3e6a61da15232234a0cf2368aecf351aa4f6a4e896a52f27f40?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
        alt="Company Logo"
        className="object-contain shrink-0 self-stretch my-auto h-[2.5rem]"
      />
      <div className="flex flex-col self-stretch my-auto">
        <div className="hidden lg:flex flex-wrap lg:gap-10 gap-4 items-center justify-end max-lg:max-w-full">
          <nav className="flex gap-10 items-center self-stretch my-auto font-medium text-white/80">
            <a href="#about" className="self-stretch my-auto hover:text-amber-300">About Us</a>
            <a href="#services" className="self-stretch my-auto hover:text-amber-300">Services</a>
            <a href="#testimonials" className="self-stretch my-auto hover:text-amber-300">Testimonials</a>
          </nav>
          <a href="#contact">
            <button className="self-stretch px-7 py-3 my-auto font-bold text-amber-300 rounded-lg border-2 border-amber-300 border-solid max-lg:px-5 hover:bg-amber-300 hover:text-neutral-800">
              Contact Us
            </button>
          </a>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}