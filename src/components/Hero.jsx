// ========================= 2. Hero.jsx =========================
import React, { useEffect, useState } from 'react';
import RotatingText from './ui/RotatingText';
import TextType from './ui/TextType';
import ElectricBorder from './ui/ElectricBorder';


const Hero = () => {
 
  return (
        <section id="home" className="min-h-screen md:flex md:flex-row md:justify-between md:items-center md:gap-12 md:px-20 md:py-20 px-10 py-20 flex flex-col items-center">
        <div className="flex flex-col md:items-start justify-center text-left mt-6 md:mt-0 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Karaoğlu <span className="text-red-900 drop-shadow-[0_0_25px_rgba(158,0,0,1)]">

            <RotatingText
                        texts={['İzolasyon', 'Yalıtım', 'Ses Yalıtımı', 'Isı Yalıtımı', 'Su Yalıtımı']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-red-900 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"first"}
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                      />

            </span>
            </h1>
            <p className="text-lg font-medium leading-relaxed max-w-3xl mb-6">
            <TextType
              text={["Karaoğlu İzolasyon, 2005 yılından bu yana Osmaniye merkezli olarak ısı, su ve ses yalıtımı alanında hizmet vermektedir. Müşteri memnuniyetini ön planda tutan firmamız, kaliteli malzeme kullanımı ve profesyonel işçilikle sektörde güvenilir bir isim haline gelmiştir.", "Uzman ekibimiz, her projeye özel çözümler sunarak enerji verimliliğini artırmayı ve yaşam alanlarınızı daha konforlu hale getirmeyi hedefler. İster konut, ister ticari bina olsun, her türlü yalıtım ihtiyacınızda yanınızdayız.", "Karaoğlu İzolasyon olarak, çevre dostu ve sürdürülebilir yalıtım çözümleri sunarak hem doğayı korumayı hem de müşterilerimizin enerji maliyetlerini düşürmeyi amaçlıyoruz"]}
              typingSpeed={45}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              deletingSpeed={20}
            />
            </p>

            <div className="flex gap-4 mb-6 text-3xl">
            <a href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110" aria-label='insta'>
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/mehmet.kara.955910" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110" aria-label='face'>
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/mehmet-kara-b57979262/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110" aria-label='linke'>
                <i className="bx bxl-linkedin"></i>
            </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-between md:justify-center gap-4 text-center" >
            <a href="tel:+905364106101" className="inline-block px-6 py-3 bg-red-900 text-black rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105" aria-label='tel'>
                +90 536 410 61 01
            </a>
            <a href="https://maps.app.goo.gl/sgUinVV1GvShHQW79" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-black text-red-900 border-2 border-red-900 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-red-900 hover:text-black" aria-label='loc'>
                <i className="bx bx-location text-xl" aria-label='osm'></i> Osmaniye
            </a>
            </div>
        </div>
        

        
        <div className="mt-10 md:mt-0 flex justify-center items-center w-[100%] md:w-[50%]">
          <ElectricBorder
           color="oklch(39.6% 0.141 25.723)"
          speed={1}
          chaos={0.5}
          thickness={12}
          className="p-1 rounded-xl">

          
          <img
            src="img/karaoglu-header-q.webp"
            alt="Logo"
            className="w-[500px] md:w-[450px] h-auto object-contain border-4 border-red-900 rounded-xl shadow-lg "
            fetchpriority="high"
            
          />
          </ElectricBorder>
        </div>


        </section>

  );
};

export default Hero;