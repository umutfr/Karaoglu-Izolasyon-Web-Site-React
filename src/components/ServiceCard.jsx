import React from "react";
import ElectricBorder from "./ui/ElectricBorder";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const ServiceCard = ({ icon, title, description, image }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Wrapper = isMobile ? "div" : ElectricBorder;

  return (
    <div
      color="#8a8a8a"
      speed={1}
      chaos={0.3}
      thickness={4}
      className={clsx(
        "bg-black rounded-xl shadow-md p-5 md:p-6 w-80 md:w-[500px] h-auto hover:shadow-[#8a8a8a]/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col justify-evenly border-2 border-red-700"
      )}
    >
      {image && (
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      <div className="text-center mb-4">
        {icon && <i className={`bx ${icon} text-white text-2xl`}></i>}
        <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      </div>

      <p className="text-white text-center text-base leading-relaxed opacity-90">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
