import React from 'react';
import ElectricBorder from './ui/ElectricBorder';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <ElectricBorder
      color="oklch(39.6% 0.141 25.723)"
      speed={1}
      chaos={0.3}
      thickness={4}
      className="
        bg-[black] rounded-xl
        shadow-md p-4 md:p-3 w-80 
        hover:shadow-lg hover:scale-105 
        transition-all duration-300 cursor-pointer 
        md:h-[250px] md:w-[500px] 
        flex flex-col items-center md:gap-4 
        md:text-center md:justify-center md:pb-9
      "
    >
      {image && (
        <img
          loading='lazy'
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      <div className="flex items-center mb-2">
        {icon && <i className={`bx ${icon} text-red-900 text-xl`}></i>}
        <h3 className="text-lg font-semibold text-white md:text-2xl ml-2">
          {title}
        </h3>
      </div>

      <p className="text-sm text-white leading-snug md:text-lg">
        {description}
      </p>
    </ElectricBorder>
  );
};

export default ServiceCard;
