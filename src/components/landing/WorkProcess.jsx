import * as React from "react";

const processSteps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cffa3f53c3be2db306b6b999812048e67fdbe68a9ffedc684990320a66abe6d?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12",
    description: "We brainstorm innovative solutions, identify gaps, and quickly prototype new features through collaboration and diverse perspectives."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddf5627ca5b50b20d4e477d62cb810bfdbe59ae8ff4b0f5792f554f4592fa3ea?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12",
    description: "Create engaging user experiences for your digital products. Address real issues and enhance key business metrics with stunning interfaces."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/822124b5a4c2dd455598c0f98dcd239e31ef403c2d2ad07e78343522917164a4?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12",
    description: "Develop beautiful, fast, and secure applications customized to meet your business objectives."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbd3c86f1523569c96765276a6dac6d9e3ea2883b6cc0395c6ce1c8d42c0a06?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12",
    description: "Our tech team is dedicated to ensuring your users are engaged around the clock, helping you build exceptional systems on the fly."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f7485d8ad07d167745dad8e99dd4024808dca7a8429f87fd4231e91d6179d6c?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12",
    description: "Grow larger with us. Partnering with us will create a lasting impact, and we believe that exposure to technology enhances outcomes. Enjoy the flexibility to adapt and expand!"
  }
];

export default function WorkProcess() {
  return (
    <div className="flex flex-col gap-[3rem] grow shrink self-stretch my-auto min-w-[240px] w-[517px] max-lg:max-w-full relative">
      <div className="absolute top-0 bottom-[1rem] left-[27.5px] border-l z-[1]"></div>
      {processSteps.map((step, index) => (
        <div key={index} className="flex gap-5 justify-center relative z-[2] items-center">
          <div>
            <div className="flex gap-2.5 justify-center items-center self-stretch px-1.5 rounded-sm bg-[#695B35] h-[55px] min-h-[55px] w-[55px]">
              <img
                loading="lazy"
                src={step.icon}
                alt={`Process step ${index + 1}`}
                className="object-contain self-stretch my-auto w-9 aspect-square"
              />
            </div>
          </div>
          <div className="text-base text-[#BFBEBE] max-lg:max-w-full">
            {step.description}
          </div>
        </div>
      ))}
    </div>
  );
}