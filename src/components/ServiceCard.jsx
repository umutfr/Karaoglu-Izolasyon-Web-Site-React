import React from 'react';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-[#1a1a1a] border-2 border-red-900 rounded-xl shadow-md p-4 md:p-3 w-80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer md:h-[250px] md:w-[500px] flex flex-col items-center md:gap-4 md:text-center md:justify-center md:pb-9">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />}
      
      <div className="flex items-center mb-2">
        <i className=" text-red-900 text-xl"></i>
        <h3 className="text-lg font-semibold text-white md:text-2xl">{title}</h3>
      </div>
      
      <p className="text-sm text-white leading-snug md:text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
