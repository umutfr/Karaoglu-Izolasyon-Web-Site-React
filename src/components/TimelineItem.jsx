import React from 'react';

const TimelineItem = ({ year, title, description, index }) => {
  const isLeft = index % 2 === 0; // 0,2,4... soldan başlıyor

  return (
    <div className="mb-12 w-full relative last:mb-0">
      {/* Timeline Noktası */}
      <div className="w-4 h-4 bg-red-900 rounded-full absolute top-3 left-[50%] transform -translate-x-1/2 shadow-md"></div>

      {/* Yıl */}
      <div
        className={`absolute top-0 text-2xl font-bold text-white  ${
          isLeft ? 'right-[calc(50%+16px)] text-right' : 'left-[calc(50%+16px)] text-left'
        }`}
      >
        {year}
      </div>

      {/* Box */}
      <div
        className={`bg-[#080808] border-2 border-red-900 p-6 md:p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 md:my-10
        ${isLeft ? 'md:mr-[calc(50%+24px)]' : 'md:ml-[calc(50%+24px)]'}`}
      >
        <h3 className="text-xl md:text-3xl text-white mb-2 font-medium md:pb-3">{title}</h3>
        <p className="text-sm md:text-xl text-white leading-snug font-light">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
