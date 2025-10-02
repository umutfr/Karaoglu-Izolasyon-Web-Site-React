import React from 'react';

const TestimonialCard = ({ image, name, rating, text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-black/70 border-[3px] border-white/20 rounded-3xl md:min-h-[550px] md:max-w-[450px] px-12 py-12 cursor-pointer transition-all duration-300 hover:border-red-900 hover:shadow-[0_0_50px_rgba(158,0,0,1)] max-h-[600px] md:gap-8 gap-6">
  <img 
    src={image} 
    alt={name}
    className="w-[150px] h-[150px]  rounded-full border-[3px] border-red-900 shadow-[0_0_25px_rgba(158,0,0,1)]"
  />
  <h2 className="text-2xl font-bold">{name}</h2>
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <i key={i} className="bx bxs-star text-yellow-400 text-3xl"></i>
    ))}
  </div>
  <p className="text-md leading-relaxed">{text}</p>
</div>

  );
};

export default TestimonialCard;
