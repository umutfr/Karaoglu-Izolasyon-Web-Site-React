import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'bx-cart',
      title: 'Yalıtım Malzemeleri Satışı',
      description: 'Isı, su ve ses yalıtımı için kaliteli ve dayanıklı ürünleri uygun fiyatlarla müşterilerimize sunuyoruz.',
      image: null
    },
    {
      icon: 'bx-layer',
      title: 'Profesyonel Yalıtım Uygulamaları',
      description: 'Uzman ekibimizle bina, çatı ve temel yalıtımlarında uzun ömürlü ve güvenilir uygulamalar gerçekleştiriyoruz.',
      image: null
    },
    {
      icon: 'bxs-flask',
      title: 'Yapı Kimyasalları',
      description: 'Su yalıtım katkıları, izolasyon ürünleri ve özel kimyasal çözümler ile projelerinize profesyonel destek sağlıyoruz.',
      image: null
    },
    {
      icon: 'bx-support',
      title: 'Danışmanlık ve Teknik Destek',
      description: 'Doğru malzeme seçimi, uygulama yöntemleri ve proje bazlı çözümler için uzman kadromuzla yanınızdayız.',
      image: null
    }
  ];

  return (
    <section id="services" className=" px-[12%] md:min-h-screen py-10 scroll-mt-15">
      <h2 className="text-center text-3xl font-bold text-white mb-12 md:mb-8 md:text-6xl md:pb-8">Hizmetler</h2>
      
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
