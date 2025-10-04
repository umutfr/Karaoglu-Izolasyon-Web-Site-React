import React from 'react';
import ElectricBorder from './ui/ElectricBorder';

const TimelineItem = ({ year, title, description, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`
      mb-12 w-full relative last:mb-0
      ${isLeft ? 'md:pr-[calc(50%+32px)]' : 'md:pl-[calc(50%+32px)] md:text-right'}
    `}>
      {/* Timeline Dot */}
      <div className="w-4 h-4 bg-red-900 rounded-full absolute top-3 left-0 md:left-[calc(50%-8px)] shadow-lg z-10 ring-4 ring-[#131313]"></div>

      {/* Year Badge */}
      <div className={`
        text-lg font-bold text-red-800 mb-2 pl-8 md:pl-0
        md:absolute md:top-2
        ${isLeft ? 'md:right-[calc(50%+16px)]' : 'md:left-[calc(50%+16px)]'}
      `}>
        {year}
      </div>

      {/* Content Box */}
        <ElectricBorder
        color="oklch(39.6% 0.141 25.723)"
        speed={1}
        chaos={0.5}
        thickness={2.5}
        className="
        bg-[#080808] p-6 rounded-xl
        shadow-xl cursor-pointer transition-all duration-300
        hover:shadow-red-900/30 hover:shadow-2xl hover:scale-[1.02]
         ml-8 md:ml-0 md:mt-12
      "
      >
        <div>
          <h3 className="text-xl text-white mb-3 font-semibold">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default TimelineItem;