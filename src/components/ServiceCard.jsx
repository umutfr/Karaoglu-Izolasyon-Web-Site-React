import React from "react";
import ElectricBorder from "./ui/ElectricBorder";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const ServiceCard = ({ icon, title, description, image }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Wrapper = isMobile ? "div" : ElectricBorder;

  return (
    <Wrapper
      color="#191970"
      speed={1}
      chaos={0.3}
      thickness={4}
      className={clsx(
        "bg-black rounded-xl shadow-md p-5 md:p-6 w-80 md:w-[500px] h-auto md:h-[220px]",
        "hover:shadow-[#191970]/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer",
        "flex flex-col justify-between", // üst başlık ve alt açıklamayı ayırır
        isMobile && "border-2 border-[#191970]"
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
        {icon && <i className={`bx ${icon} text-[#191970] text-2xl`}></i>}
        <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      </div>

      <p className="text-white text-left text-base leading-relaxed opacity-90">
        {description}
      </p>
    </Wrapper>
  );
};

export default ServiceCard;
