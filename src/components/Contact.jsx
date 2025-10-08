import React from 'react';
import ContactForm from './ContactForm';
import ElectricBorder from './ui/ElectricBorder';
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

const Contact = () => {
      const isMobile = useMediaQuery({ maxWidth: 768 });

    // Mobile'da normal div, değilse ElectricBorder
    const Wrapper = isMobile ? "div" : ElectricBorder;
  return (
    <section id="contact" className="bg-[#131313] px-[12%] md:min-h-screen py-10 scroll-mt-15">
    <h2 className="text-center text-3xl font-bold text-white mb-12 md:mb-8 md:text-6xl md:pb-8">İletişim</h2>
    
    <Wrapper
      color="oklch(39.6% 0.141 25.723)"
      speed={1}
      chaos={0.3}
      thickness={10}
    className={clsx("relative p-3 md:p-6 rounded-3xl shadow-xl bg-[#080808] max-w-7xl mx-auto", isMobile && "border-2 border-red-900" )}
  >

    
    <div className=" relative z-10 flex flex-col md:flex-row justify-between rounded-2xl md:rounded-3xl gap-6 md:gap-8  bg-[#1a1a1a] shadow-lg">
      {/* Sol Bilgi Kısmı */}
      <div className="flex flex-col justify-start text-center md:w-1/2 w-full">
        <h3 className="flex items-center justify-center gap-2 text-xl md:text-3xl pb-3 md:pb-4">
          <i className="bx bx-location-plus text-white text-xl md:text-3xl"></i>
          Konum
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.6822050591663!2d36.24414657629241!3d37.06505565272425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f21dab27f76a1%3A0xa3756875f7a0d201!2sKarao%C4%9Flu%20Izolasyon!5e0!3m2!1str!2str!4v1758891402988!5m2!1str!2str"
          className="border-0 rounded-lg w-full h-[180px] md:h-[220px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Karaoğlu İzolasyon Konumu"
        ></iframe>

        <div className="mt-4 md:mt-6">
          <h3 className="flex items-center justify-center gap-2 text-lg md:text-2xl mb-1 md:mb-2">
            <i className="bx bx-phone text-white text-lg md:text-2xl"></i>
            Telefon
          </h3>
          <a 
            href="tel:+905364106101"
            className="text-base md:text-lg font-semibold text-white hover:text-red-900 transition-colors duration-300"
          >
            +90 536 410 61 01
          </a>
        </div>

        <div className="mt-4 md:mt-6">
          <h3 className="flex items-center justify-center gap-2 text-lg md:text-2xl mb-1 md:mb-2">
            <i className="bx bx-envelope text-white text-lg md:text-2xl"></i>
            Mail
          </h3>
          <a
            href="mailto:karaogluizoalsyon@hotmail.com"
            className="text-xs md:text-base text-white inline-block break-all border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
          >
            karaogluizoalsyon@hotmail.com
          </a>
        </div>

        <div className="mt-4 md:mt-6">
          <h3 className="flex items-center justify-center gap-2 text-lg md:text-2xl mb-1 md:mb-2">
            <i className="bx bx-share-alt text-white text-lg md:text-2xl"></i>
            Sosyal Medya
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-5 justify-center pt-1 md:pt-2">
            <a
              href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg text-white border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/mehmet.kara.955910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg text-white border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
            >
              Facebook
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-sm md:text-lg text-white border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
            >
              Tiktok
            </a>
            <a
              href="https://www.linkedin.com/in/mehmet-kara-b57979262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg text-white border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
      </div>

      {/* Sağdaki Form Component */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
    </Wrapper>
  </section>
  );
};

export default Contact;