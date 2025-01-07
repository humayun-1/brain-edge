import * as React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="mt-1 w-full border border-solid border-amber-300 border-opacity-10 min-h-[1px] max-lg:max-w-full" />
      <div className="self-center mt-20 px-6 w-full max-w-[1240px] max-lg:mt-10 max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col">
          <div className="flex flex-col w-[47%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col text-white max-lg:mt-10">
              <div className="text-3xl font-semibold">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d926be8db7db3e6a61da15232234a0cf2368aecf351aa4f6a4e896a52f27f40?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                  alt="Company Logo"
                  className="object-contain shrink-0 self-stretch my-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow text-white max-lg:mt-10">
              <h2 className="text-3xl font-medium">Contact Us</h2>
              <div className="flex flex-col mt-5 max-w-full text-base whitespace-nowrap w-[167px]">
                <a
                  href="mailto:hr@brainedge.dev"
                  className="flex gap-3 items-center w-full hover:text-amber-300"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7867e58499062eb7d1693acb1cc0039715d461ccb62acdf3775ac997173c26af?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                    alt="Email icon"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="self-stretch my-auto">hr@brainedge.dev</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col w-full max-lg:mt-10">
              <h2 className="text-3xl font-medium text-white">Quick Links</h2>
              <div className="flex gap-4 items-start mt-5">
                <a
                  href="https://www.linkedin.com/company/brain-edge-dev/"
                  target="_blank"
                  className="flex gap-3 items-center min-h-[26px] w-[26px] hover:opacity-80"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a2510928a503f4c9de556f9ea81a4f0f8c33332c5eda645efa1af05e14682db?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                    alt="Instagram"
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-center mt-10 max-w-full h-px border border-solid border-amber-300 border-opacity-10 w-[1240px] max-lg:mt-10" />
      <div className="self-center mt-8 text-base text-white">
        © {new Date().getFullYear()} BrainEdge. All rights reserved.
      </div>
    </footer>
  );
}
