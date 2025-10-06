import React from "react";
import ElectricBorder from "./ui/ElectricBorder";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const ServiceCard = ({ icon, title, description, image }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Mobile'da normal div, değilse ElectricBorder
  const Wrapper = isMobile ? "div" : ElectricBorder;

  return (
    <Wrapper
      color="oklch(39.6% 0.141 25.723)"
      speed={1}
      chaos={0.3}
      thickness={4}
      className={clsx(
        "bg-[black] rounded-xl shadow-md p-4 md:p-3 w-80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer md:h-[250px] md:w-[500px] flex flex-col items-center md:gap-4 md:text-center md:justify-center md:pb-9",
        isMobile && "border-2 border-red-900" // sadece mobile için border ekle
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

      <div className="flex items-center mb-2">
        {icon && <i className={`bx ${icon} text-red-900 text-xl`}></i>}
        <h3 className="text-lg font-semibold text-white md:text-2xl ml-2">
          {title}
        </h3>
      </div>

      <p className="text-sm text-white leading-snug md:text-lg">{description}</p>
    </Wrapper>
  );
};

export default ServiceCard;
