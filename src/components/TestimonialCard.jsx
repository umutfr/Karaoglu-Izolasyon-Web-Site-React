import React from 'react';
import ElectricBorder from './ui/ElectricBorder';
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";


const TestimonialCard = ({ image, name, rating, text, }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const Wrapper = isMobile ? "div" : ElectricBorder;
  return (
    <Wrapper
     color="oklch(39.6% 0.141 25.723)"
  speed={1}
  chaos={0.5}
  thickness={22}
  className="p-3 rounded-3xl">


    <div className={clsx("flex flex-col justify-center items-center text-center bg-black/70 rounded-3xl md:min-h-[550px] md:max-w-[450px] px-12 py-12 cursor-pointer transition-all duration-300 hover:border-red-900 hover:shadow-[0_0_50px_rgba(158,0,0,1)] max-h-[600px] md:gap-8 gap-6", isMobile && "border-[3px] border-red-900")}>
    <ElectricBorder
     color="oklch(39.6% 0.141 25.723)"
  speed={1}
  chaos={0.5}
  thickness={2}
  className="p-2 rounded-full mb-4">

    
  <img
    loading='lazy'
    src={image} 
    alt={name}
    className="w-[150px] h-[150px]  rounded-full  shadow-[0_0_25px_rgba(158,0,0,1)]"
  />
  </ElectricBorder>
  <h2 className="text-2xl font-bold">{name}</h2>
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <i key={i} className="bx bxs-star text-yellow-400 text-3xl"></i>
    ))}
  </div>
  <p className="text-md leading-relaxed">{text}</p>
</div>
    </Wrapper>

  );
};

export default TestimonialCard;

