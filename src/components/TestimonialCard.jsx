import React from 'react';

const TestimonialCard = ({ image, name, rating, text }) => {
  return (
    <div className="min-h-[550px] max-w-[450px] bg-black/70 border-[3px] border-white/20 rounded-3xl mx-8 px-24 py-12 cursor-pointer flex flex-col justify-center items-center text-center gap-6 text-white transition-all duration-300 hover:border-red-900 hover:shadow-[0_0_50px_rgba(158,0,0,1)]">
      <img 
        src={image} 
        alt={name}
        className="w-60 h-60 rounded-full border-[3px] border-red-900 shadow-[0_0_25px_rgba(158,0,0,1)]"
      />
      <h2 className="text-5xl font-bold">{name}</h2>
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="bx bxs-star text-yellow-400 text-3xl"></i>
        ))}
      </div>
      <p className="text-2xl leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;