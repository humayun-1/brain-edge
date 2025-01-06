import * as React from "react";

export default function ServiceCard({ number, title, description, highlighted }) {
  return (
    <div className={`flex flex-col justify-center px-5 py-8 w-full rounded max-lg:max-w-full transition-all hover:bg-amber-300 hover:bg-opacity-30`}>
      <div className="lg:grid grid-cols-7 flex flex-wrap gap-4 lg:gap-10 w-full max-lg:max-w-full">
        <div className="col-span-3 flex gap-4 lg:gap-8 items-center self-start font-semibold lg:text-center text-white">
          <div className={`self-stretch my-auto text-2xl text-amber-300`}>
            {number.padStart(2, '0')}
          </div>
          <div className="self-stretch my-auto text-3xl">
            {title}
          </div>
        </div>
        <div className="col-span-4 grow shrink text-base font-medium text-white text-opacity-80 max-lg:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
}