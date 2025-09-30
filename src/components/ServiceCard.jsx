import React from 'react';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-[#1a1a1a] border-2 border-red-900 rounded-xl shadow-md p-4 md:p-3 w-80 md:w-72 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />}
      
      <div className="flex items-center gap-2 mb-2">
        <i className={`bx ${icon} text-red-900 text-xl`}></i>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-sm text-white leading-snug">{description}</p>
    </div>
  );
};

export default ServiceCard;
