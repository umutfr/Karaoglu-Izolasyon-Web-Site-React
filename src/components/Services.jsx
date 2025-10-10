import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'bx bx-water',
      title: 'Su Yalıtımı',
      description: 'Yapıların en çok zarar gördüğü etkenlerden biri sudur. Su yalıtımı, temelden çatıya kadar tüm alanlarda su sızmalarını önleyerek binanın ömrünü uzatır. Teras, çatı, bodrum ve ıslak hacimlerde profesyonel uygulama ve malzeme çözümleriyle suya karşı tam koruma sağlanır. Uzun ömürlü, dayanıklı ve çevre dostu malzemelerle yapılır.',
      image: null
    },
    {
      icon: 'bx bxs-thermometer',
      title: 'Isı ve Yangın Yalıtımı',
      description: 'Isı yalıtımı, enerji verimliliğini artırarak hem yazın serin hem kışın sıcak bir yaşam alanı sunar. Kullanılan yüksek performanslı izolasyon malzemeleri, aynı zamanda yangına karşı dayanıklılık sağlar. Böylece ısı kayıpları önlenirken, yangın güvenliği de artırılmış olur. Çatı, duvar ve döşemelerde yapılan uygulamalarla hem enerji tasarrufu hem de güvenlik sağlanır.',
      image: null
    },
    {
      icon: 'bx bx-volume-mute',
      title: 'Ses Yalıtımı',
      description: 'Gürültü kirliliği yaşam kalitesini düşürür. Ses yalıtımı uygulamalarıyla ev, ofis ve endüstriyel alanlarda sessiz ve konforlu ortamlar oluşturulur. Duvar, tavan, zemin ve tesisat hatlarında kullanılan ses kesici sistemler, dış ortam sesini minimize eder. Böylece daha huzurlu ve verimli yaşam alanları elde edilir.',
      image: null
    },
    {
      icon: 'bx bx-building-house',
      title: 'Yapı Güçlendirme ve Çatı-Teras Sistemleri',
      description: 'Binaların dayanıklılığını artırmak için yapı kimyasallarıyla güçlendirme ve onarım uygulamaları yapılır. Özellikle yangına, suya ve dış etkenlere karşı koruma sağlayan özel kaplama ve izolasyon sistemleri kullanılır. Ayrıca çatı ve teraslarda uzun ömürlü kaplama çözümleriyle hem estetik hem de tam yalıtım sağlanır. Tüm uygulamalarda kaliteli malzeme, profesyonel ekip ve mühendislik desteği ön plandadır.',
      image: null
    }
  ];

  return (
    <section id="services" className=" px-[12%] md:min-h-screen py-10 scroll-mt-15 backdrop-blur-xs">
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
