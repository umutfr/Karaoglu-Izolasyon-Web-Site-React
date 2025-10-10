import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'bx bx-water',
      title: 'Su Yalıtımı',
      description: 'Yapıların en çok zarar gördüğü etkenlerden biri sudur. Bu nedenle temelden çatıya kadar her noktada su sızmalarını önleyen profesyonel yalıtım sistemleri uyguluyoruz. Teras, çatı, bodrum ve ıslak hacimlerde uzun ömürlü, dayanıklı ve çevre dostu malzemelerle suya karşı tam koruma sağlıyoruz. Böylece binaların ömrünü uzatıyor, yapısal bütünlüğünü koruyoruz.',
      image: null
    },
    {
      icon: 'bx bxs-thermometer',
      title: 'Isı ve Yangın Yalıtımı',
      description: 'Yaşam ve çalışma alanlarında gürültü kirliliğini en aza indirmek için gelişmiş ses yalıtım sistemleri uyguluyoruz. Duvar, tavan, zemin ve tesisat hatlarında kullanılan yüksek performanslı malzemelerle dış ortam sesini minimuma indiriyoruz. Böylece sessiz, huzurlu ve verimli yaşam alanları oluşturuyoruz.',
      image: null
    },
    {
      icon: 'bx bx-volume-mute',
      title: 'Ses Yalıtımı',
      description: 'Binaların dayanıklılığını artırmak ve dış etkenlere karşı koruma sağlamak amacıyla yapı güçlendirme ve onarım uygulamaları gerçekleştiriyoruz. Yapı kimyasallarıyla desteklenen özel kaplama ve izolasyon sistemleriyle yangına, suya ve neme karşı tam koruma sağlıyoruz. Ayrıca çatı ve teraslarda uzun ömürlü kaplama çözümleri uygulayarak estetik ve tam yalıtım bir arada sunuyoruz. Tüm süreçlerde kaliteli malzeme, profesyonel ekip ve mühendislik desteğiyle kalıcı çözümler üretiyoruz.',
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
