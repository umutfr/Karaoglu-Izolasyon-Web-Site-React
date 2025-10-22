import React from "react";

import clsx from "clsx";

const TestimonialCard = ({ image, name, rating, text }) => {
  return (
    <div
      color="#8a8a8a"
      speed={1}
      chaos={0.5}
      thickness={22}
      className="p-3 rounded-3xl"
    >
      <div
        className={clsx(
          "flex flex-col justify-center items-center text-center bg-black/70 rounded-3xl md:min-h-[550px] md:max-w-[450px] px-12 py-12 cursor-pointer transition-all duration-300 hover:border-[#8a8a8a] hover:shadow-[0_0_50px_#8a8a8a] max-h-[600px] md:gap-8 gap-6 border-[3px] border-[#8a8a8a]"
        )}
      >
        <div
          color="#8a8a8a"
          speed={1}
          chaos={0.5}
          thickness={2}
          className="p-2 rounded-full mb-4"
        >
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="w-[150px] h-[150px]  rounded-full  shadow-[0_0_25px_#8a8a8a]"
          />
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="bx bxs-star text-yellow-400 text-3xl"></i>
          ))}
        </div>
        <p className="text-md leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
