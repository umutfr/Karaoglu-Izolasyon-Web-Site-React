import React from "react";
import clsx from "clsx";

const TimelineItem = ({ year, title, description, index }) => {
  // Mobile'da normal div, değilse ElectricBorder
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`
      mb-12 w-full relative last:mb-0
      ${isLeft ? "md:pr-[calc(50%+32px)]" : "md:pl-[calc(50%+32px)]"}
    `}
    >
      {/* Timeline Dot */}
      <div className="w-4 h-4 bg-white rounded-full absolute top-3 left-0 md:left-[calc(50%-8px)] shadow-lg z-10 ring-4 ring-[#131313]"></div>

      {/* Year Badge */}
      <div
        className={`
        text-lg font-bold text-white mb-2 pl-8 md:pl-0
        md:absolute md:top-2
        ${isLeft ? "md:right-[calc(50%+42px)]" : "md:left-[calc(50%+42px)]"}
      `}
      >
        {year}
      </div>

      {/* Content Box */}
      <div
        color="#742a2a"
        speed={1}
        chaos={0.4}
        thickness={4}
        className="bg-[#080808] p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-300 ml-8 md:ml-0 md:mt-12 border-2 border-red-700 hover:shadow-[0_0_20px_black]"
      >
        <div>
          <h3 className="text-xl text-white mb-3 font-semibold ${isLeft ? 'md:pr-[calc(50%+32px)]' : 'md:pl-[calc(50%+32px)] md:text-right'">
            {title}
          </h3>
          <p className="text-sm text-white leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
