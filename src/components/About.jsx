import React from 'react';
import TimelineItem from './TimelineItem';


const About = () => {
  const timelineData = [
    {
      year: '2011',
      title: 'Kuruluş',
      description: "Osmaniye'de yalıtım sektörüne adım atarak, kaliteli malzeme satışı ve uygulama hizmetleriyle faaliyet göstermeye başladık."
    },
    {
      year: '2014',
      title: 'Genişleyen Ürün Yelpazesi',
      description: 'Yapı kimyasalları, izolasyon malzemeleri ve farklı uygulama çözümlerini portföyümüze ekleyerek daha geniş bir müşteri kitlesine ulaştık.'
    },
    {
      year: '2018',
      title: 'Profesyonel Ekip & Uygulamalar',
      description: 'Alanında uzman ekibimizle birçok büyük projede yer aldık. İşçilik kalitemiz ve müşteri memnuniyetimizle sektörde güven kazandık.'
    },
    {
      year: '2025',
      title: 'Güçlü Marka & Gelecek Hedefleri',
      description: '20 yılı aşkın deneyimimizle hem bireysel hem kurumsal projelerde çözüm ortağı olmayı sürdürüyor, geleceğe yatırım yapıyoruz.'
    }
  ];

  return (
    <section id="about" className="bg-[#131313] px-[12%] md:min-h-screen py-10 scroll-mt-15 ">
      <h2 className="text-center text-4xl md:text-6xl font-bold my-6 md:my-10 md:pb-8 ">Hakkımızda</h2>
      
      <div className="
        max-w-4xl mx-auto flex flex-col relative
        before:content-[''] before:absolute before:w-[2px] before:h-full before:bg-[#191970]
        before:left-0 md:before:left-[calc(50%-1px)] before:top-0 
      ">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
