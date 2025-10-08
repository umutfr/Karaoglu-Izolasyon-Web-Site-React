import React from 'react';
import ElectricBorder from './ui/ElectricBorder';
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const TimelineItem = ({ year, title, description, index }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

  // Mobile'da normal div, değilse ElectricBorder
  const Wrapper = isMobile ? "div" : ElectricBorder;
  const isLeft = index % 2 === 0;

  return (
    <div className={`
      mb-12 w-full relative last:mb-0
      ${isLeft ? 'md:pr-[calc(50%+32px)]' : 'md:pl-[calc(50%+32px)]'}
    `}>
      {/* Timeline Dot */}
      <div className="w-4 h-4 bg-[#191970] rounded-full absolute top-3 left-0 md:left-[calc(50%-8px)] shadow-lg z-10 ring-4 ring-[#131313]"></div>

      {/* Year Badge */}
      <div className={`
        text-lg font-bold text-[#191970] mb-2 pl-8 md:pl-0
        md:absolute md:top-2
        ${isLeft ? 'md:right-[calc(50%+16px)]' : 'md:left-[calc(50%+16px)]'}
      `}>
        {year}
      </div>

      {/* Content Box */}
        <Wrapper
        color="#191970"
        speed={1}
        chaos={0.4}
        thickness={4}
        className={clsx(
          "bg-[#080808] p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[#191970] hover:shadow-2xl hover:scale-[1.02] ml-8 md:ml-0 md:mt-12", isMobile && "border-2 border-[#191970]")}
      >
        <div>
          <h3 className="text-xl text-white mb-3 font-semibold ${isLeft ? 'md:pr-[calc(50%+32px)]' : 'md:pl-[calc(50%+32px)] md:text-right'">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default TimelineItem;