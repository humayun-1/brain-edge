import * as React from "react";

const stats = [
  { value: "6", label: "Years of Experience" },
  { value: "100", label: "Projects Completed" },
  { value: "50", label: "Happy Clients" },
];

export default function Stats() {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-28 py-8 lg:py-20 w-full text-white max-lg:px-5 max-lg:max-w-full">
      <div className="flex flex-col w-full max-lg:max-w-full">
        <div className="flex gap-5 lg:flex-row flex-col items-center w-full max-lg:flex-wrap max-lg:max-w-full justify-between">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex gap-3 items-center self-stretch my-auto min-w-[240px]"
            >
              <div className="self-stretch my-auto text-6xl font-semibold max-lg:text-4xl">
                {stat.value}
              </div>
              {stat.label && (
                <div className="self-stretch my-auto text-2xl font-medium">
                  {stat.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
