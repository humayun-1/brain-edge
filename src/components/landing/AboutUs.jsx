import * as React from "react";

export default function AboutUs() {
  return (
    <div id="about" className="flex overflow-hidden flex-col justify-center px-24 w-full text-white max-lg:px-5 max-lg:max-w-full container mx-auto">
      <div className="lg:grid grid-cols-2 flex flex-wrap gap-10 items-center w-full max-lg:max-w-full">
        <div className="flex flex-col grow shrink self-stretch my-auto lg:pr-[8rem]">
          <h2 className="text-3xl font-bold max-lg:max-w-full">About Us</h2>
          <p className="mt-5 text-sm font-medium leading-6 max-lg:max-w-full text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          className="object-contain grow shrink self-stretch my-auto aspect-[1.31]"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eb4fc91939bb06062d51be629bd0751cd6a9baa5b10e43d763d806cf8e12156?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
          alt="About us illustration"
        />
      </div>
    </div>
  );
}
