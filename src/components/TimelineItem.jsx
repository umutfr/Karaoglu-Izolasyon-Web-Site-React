import React from 'react';

const TimelineItem = ({ year, title, description, index }) => {
  const isOdd = index % 2 === 0;

  return (
    <div className={`
  mb-12 w-full relative last:mb-0
  ${isOdd ? 'md:pr-[calc(50%+16px)]' : 'md:pl-[calc(50%+16px)]'}
`}>
  {/* Nokta */}
  <div className="w-4 h-4 bg-red-900 rounded-full absolute top-3 left-[calc(-7px)] md:left-[calc(50%-8px)] shadow-md "></div>


  {/* Yıl */}
  <div className="text-xl font-bold text-white mb-2 pl-7">{year}</div>

  {/* Box */}
  <div className="bg-[#080808] border-2 border-red-900 p-6 md:p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ml-6 md:ml-0">
    
    <h3 className="text-xl md:text-lg text-white mb-2 font-medium">{title}</h3>
    <p className="text-sm md:text-xs text-white leading-snug font-light">{description}</p>
  </div>
</div>

  );
};

export default TimelineItem;
