import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'img/cihan2.jpg',
      name: 'Cihan Albora',
      rating: 5,
      text: 'Karaoğlu İzolasyon ile çalışmak harika bir deneyimdi. Profesyonellikleri ve işçilik kaliteleri mükemmeldi.'
    },
    {
      image: 'img/hızır.jpg',
      name: 'Hızır Çakırbeyli',
      rating: 5,
      text: 'Karaoğlu İzolasyon ile çalışmak harika bir deneyimdi. Profesyonellikleri ve işçilik kaliteleri mükemmeldi.'
    },
    {
      image: 'img/fat.jpg',
      name: 'Fatih Sultan Mehmet',
      rating: 5,
      text: 'Karaoğlu İzolasyon ile çalışmak harika bir deneyimdi. Profesyonellikleri ve işçilik kaliteleri mükemmeldi.'
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen bg-[#131313] px-[12%] py-40">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-center text-[8rem] font-bold mb-20">Referanslar</h2>
        
        <div className="grid grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;