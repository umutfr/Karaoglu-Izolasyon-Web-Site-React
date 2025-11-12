import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "bx bx-water",
      title: "Su Yalıtımı",
      description:
        "Su sızmaları binaların en büyük düşmanıdır. Biz, profesyonel su yalıtımı uygulamalarımızla yapınızı temelden çatıya kadar güvence altına alıyoruz. Uzun ömürlü, çevre dostu ve dayanıklı malzemelerle teras, çatı, bodrum ve ıslak hacimlerde yüzde yüz sızdırmazlık sağlıyoruz. Yapınızı yıllarca koruyacak kalıcı çözümler sunuyoruz.",
      image: null,
    },
    {
      icon: "bx bxs-thermometer",
      title: "Isı ve Yangın Yalıtımı",
      description:
        "Enerji tasarrufu ve güvenlik, modern binaların vazgeçilmezidir. Isı ve yangın yalıtımı çözümlerimizle yaşam alanlarınızda maksimum konfor ve güven sağlıyoruz. Kaliteli yalıtım malzemeleriyle ısı kayıplarını en aza indiriyor, yangına karşı yüksek koruma sağlıyoruz. Uzman ekibimizle binanızı daha güvenli, verimli ve ekonomik hale getiriyoruz.",
      image: null,
    },
    {
      icon: "bx bx-volume-mute",
      title: "Ses Yalıtımı",
      description:
        "Huzurlu bir yaşam için sessizlik şart. Gelişmiş ses yalıtım sistemlerimizle iç ve dış ortam gürültüsünü en aza indiriyoruz. Duvar, tavan ve zeminlerde kullandığımız yüksek performanslı malzemeler sayesinde sessiz, konforlu ve verimli alanlar oluşturuyoruz. Her projede size özel çözümlerle fark yaratıyoruz.",
      image: null,
    },
    {
      icon: "bx bx-building-house",
      title: "Yapı Güçlendirme ve Çatı-Teras Sistemleri",
      description:
        "Yapılarınızın dayanıklılığını artırmak, estetik ve güveni bir arada sunmak için profesyonel güçlendirme ve çatı-teras sistemleri uyguluyoruz. Özel izolasyon, su yalıtımı ve kaplama çözümlerimizle uzun ömürlü, sağlam ve şık sonuçlar elde ediyoruz. Deneyimli mühendis kadromuzla, binalarınızı geleceğe güvenle taşıyoruz.",
      image: null,
    },
  ];

  return (
    <section
      id="services"
      className=" px-[12%] md:min-h-screen py-10 scroll-mt-15 backdrop-blur-xs"
    >
      <h2 className="text-center text-3xl font-bold text-white mb-12 md:mb-8 md:text-6xl md:pb-8">
        Hizmetler
      </h2>

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
