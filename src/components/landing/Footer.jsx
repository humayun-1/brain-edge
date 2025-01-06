import * as React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="mt-1 w-full border border-solid border-amber-300 border-opacity-10 min-h-[1px] max-lg:max-w-full" />
      <div className="self-center mt-20 px-6 w-full max-w-[1240px] max-lg:mt-10 max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col">
          <div className="flex flex-col w-[47%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col text-white max-lg:mt-10">
              <div className="text-3xl font-semibold">Logo</div>
              <address className="mt-5 text-base leading-7 not-italic">
                Address: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do.
              </address>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow text-white max-lg:mt-10">
              <h2 className="text-3xl font-medium">Contact Us</h2>
              <div className="flex flex-col mt-5 max-w-full text-base whitespace-nowrap w-[167px]">
                <a
                  href="mailto:abc@gmail.com"
                  className="flex gap-3 items-center w-full hover:text-amber-300"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7867e58499062eb7d1693acb1cc0039715d461ccb62acdf3775ac997173c26af?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                    alt="Email icon"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="self-stretch my-auto">abc@gmail.com</span>
                </a>
                <a
                  href="tel:xxxxxxxxxxxx"
                  className="flex gap-3 items-center mt-4 w-full hover:text-amber-300"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e57fb31e6f1c9970fd49652b3bd03a15950ef9fd741e8d5291fe9f9afe568b57?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                    alt="Phone icon"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="self-stretch my-auto">xxxxxxxxxxxx</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col w-full max-lg:mt-10">
              <h2 className="text-3xl font-medium text-white">Quick Links</h2>
              <div className="flex gap-4 items-start mt-5">
                <a
                  href="https://facebook.com"
                  className="flex gap-3 items-center min-h-[26px] w-[26px] hover:opacity-80"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a834bff2bd30f367ea37b1bfff54ec5ccdbd12cb0ba5a100ce62b20a410f7ad?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                    alt="Facebook"
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  className="flex gap-3 items-center min-h-[26px] w-[26px] hover:opacity-80"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c144716454e8acc6ba97e25ba769cdeba40e5c77f1caa6ed80b0e0fac584a961?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
                    alt="Twitter"
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a
                  href="https://instagram.com"
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
      <div className="shrink-0 self-center mt-20 max-w-full h-px border border-solid border-amber-300 border-opacity-10 w-[1240px] max-lg:mt-10" />
      <div className="self-center mt-8 text-base text-white">
        © {new Date().getFullYear()} ABC. All rights reserved.
      </div>
    </footer>
  );
}
