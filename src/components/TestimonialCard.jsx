import React from 'react';
import ElectricBorder from './ui/ElectricBorder';
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer"; // 👈 görünürlük kontrolü
import clsx from "clsx";
import "./ui/electric-optimize.css"; // 👈 animasyon azaltma CSS’i

const TestimonialCard = ({ image, name, rating, text }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { ref, inView } = useInView({
    triggerOnce: true, // sadece 1 kere aktif et
    threshold: 0.2,    // %20’si görünür olunca başlasın
  });

  const Wrapper = isMobile ? "div" : ElectricBorder;

  return (
    <div ref={ref}> {/* 👈 görünürlük takip alanı */}
      <Wrapper
        // 👇 yalnızca görünürse ElectricBorder aktif olur
        color={inView ? "#191970" : undefined}
        speed={inView ? 1 : 0}
        chaos={inView ? 0.5 : 0}
        thickness={22}
        className="p-3 rounded-3xl electric-border-safe"
      >
        <div
          className={clsx(
            "flex flex-col justify-center items-center text-center bg-black/70 rounded-3xl md:min-h-[550px] md:max-w-[450px] px-12 py-12 cursor-pointer transition-all duration-300 hover:border-[#191970] hover:shadow-[0_0_50px_#191970] max-h-[600px] md:gap-8 gap-6",
            isMobile && "border-[3px] border-[#191970]"
          )}
        >
          <ElectricBorder
            color={inView ? "#191970" : undefined}
            speed={inView ? 1 : 0}
            chaos={inView ? 0.5 : 0}
            thickness={2}
            className="p-2 rounded-full mb-4 electric-border-safe"
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="w-[150px] h-[150px] rounded-full shadow-[0_0_25px_#191970]"
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
    </div>
  );
};

export default TestimonialCard;
