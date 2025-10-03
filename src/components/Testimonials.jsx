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
    <section id="testimonials" className=" bg-[#131313] px-[12%] md:min-h-screen py-10 scroll-mt-15">
      <h2 className="text-center text-4xl font-bold text-white mb-12 md:mb-8 md:text-6xl md:pb-8">Referanslar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
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

    </section>
  );
};

export default Testimonials;