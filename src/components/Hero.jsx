// ========================= 2. Hero.jsx =========================
import React from "react";
import RotatingText from "./ui/RotatingText";
import TextType from "./ui/TextType";
import ElectricBorder from "./ui/ElectricBorder";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "./ui/LogoLoop";
import { Link } from "react-router-dom";

const Hero = () => {
  const techLogos = [
    {
      src: "../img/logos/izokem.jpg",
      alt: "Izokem",
      href: "http://izokem.com/",
    },
    {
      src: "../img/logos/mapei.png",
      alt: "Mapei",
      href: "https://www.mapei.com/",
    },
    {
      src: "/../img/logos/onduline.svg",
      alt: "Onduline",
      href: "https://tr.onduline.com/tr/son-kullanici",
    },
    {
      src: "../img/logos/qis2.svg",
      alt: "Qis",
      href: "https://qisturkiye.com/",
    },
    {
      src: "../img/logos/aragonit-guzil.png",
      alt: "Aragonit",
      href: "https://www.aragonit.com.tr/",
    },
    {
      src: "../img/logos/izocamtr2.jpg",
      alt: "Izocam",
      href: "https://www.izocam.com.tr/",
    },
    {
      src: "../img/logos/ravago.webp",
      alt: "Ravago",
      href: "https://ravagobuildingsolutions.com/tr/tr/",
    },
    {
      src: "../img/logos/akdag-logo.png",
      alt: "Akdag",
      href: "https://www.akdagtasyunu.com/",
    },
    {
      src: "../img/logos/hksc-logo2.png",
      alt: "Hksc",
      href: "https://hksc.com.tr/",
    },
    { src: "../img/logos/bbarrier-logo.png", alt: "Bbarrier", href: "" },
    {
      src: "../img/logos/clever-logo.png",
      alt: "Clever",
      href: "https://www.cleverpolymers.com/",
    },
    {
      src: "../img/logos/bonus-logo.png",
      alt: "Bonus",
      href: "https://www.bonusyalitim.com.tr/tr/",
    },
    {
      src: "../img/logos/beypan-logo.jpg",
      alt: "Beypan",
      href: "https://www.beypan.com.tr/tr",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-between px-10 py-10 md:px-20 md:py-20">
      {/* Üst içerik wrapper */}
      <div className="flex-1 flex flex-col justify-center my-20 md:my-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-12 w-full">
          {/* Sol içerik */}
          <div className="flex flex-col justify-center text-center md:text-left md:items-start mt-6 md:mt-0 max-w-2xl w-full min-h-[300px] items-center">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-[#f5f5f5] mb-4 leading-tight">
              KARAOĞLU{" "}
              <span className="sm:(items-center justify-center text-center flex)">
                <RotatingText
                  texts={[
                    "İzolasyon",
                    "İnşaat",
                    "Yalıtım",
                    "Isı Yalıtımı",
                    "Su Yalıtımı",
                    "Yapı Kimyasalları",
                  ]}
                  mainClassName="leading-[1.2] px-2 sm:px-2 md:px-3 bg-white  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl md:text-5xl md:w-auto w-60 "
                  staggerFrom="first"
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

            <div className="h-58 md:h-40 lg:h-36 overflow-hidden mb-6 mt-6 md:mt-0">
              <div className="text-lg font-medium leading-relaxed">
                <TextType
                  text={[
                    "Karaoğlu İzolasyon olarak, çevre dostu ve sürdürülebilir çözümlerle yaşam alanlarınızı daha konforlu ve güvenli hale getirmeyi hedefliyoruz.",
                    "Her projede kaliteli malzeme kullanımı, titiz uygulama süreçleri ve deneyimli ekibimizle uzun ömürlü ve etkili yalıtım sistemleri sunuyoruz.",
                    "Su yalıtımı başta olmak üzere, yaşam alanlarınızı hem estetik hem de dayanıklı kılacak çözümler geliştiriyoruz.",
                  ]}
                  typingSpeed={45}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="|"
                  deletingSpeed={20}
                />
              </div>
            </div>

            {/* Sosyal ve butonlar */}
            <div className="flex justify-center md:justify-start md:gap-11 gap-6 mb-6 text-3xl">
              <a
                href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
                aria-label="insta"
              >
                <i className="bx bxl-instagram  text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-4xl"></i>
              </a>
              <a
                href="https://www.facebook.com/mehmet.kara.955910"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
                aria-label="face"
              >
                <i className="bx bxl-facebook text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 text-4xl"></i>
              </a>
              {/* <a
                href="https://www.tiktok.com/@mehmetkara0788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
                aria-label="tiktok"
              >
                <i className="bx bxl-tiktok text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-pink-500 to-blue-500 text-4xl"></i>
              </a> */}
              <a
                href="https://www.linkedin.com/in/mehmet-kara-b57979262/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
                aria-label="linke"
              >
                <i className="bx bxl-linkedin text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-600 text-4xl"></i>
              </a>

              <a
                href="https://wa.me/+905364106101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
                aria-label="face"
              >
                <i className="bx bxl-whatsapp text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-700 text-4xl"></i>
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:justify-start justify-center gap-4 text-center">
              <a
                href="tel:+905364106101"
                className="inline-block px-6 py-3 bg-white text-black  rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                aria-label="tel"
              >
                +90 536 410 61 01
              </a>
              <a
                href="https://maps.app.goo.gl/sgUinVV1GvShHQW79"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-white border-2 border-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                aria-label="loc"
              >
                <i className="bx bx-location text-xl" aria-label="osm"></i>{" "}
                Osmaniye
              </a>
            </div>
          </div>

          {/* Sağ Logo */}
          <div className="mt-10 md:mt-0 flex justify-center items-center w-full md:w-1/2">
            <div
              color="white"
              speed={1}
              chaos={0.5}
              thickness={12}
              className="p-1 rounded-xl"
            >
              <img
                src="img/karaoglu-header-q.webp"
                alt="Logo"
                className="w-[500px] md:w-[450px] h-auto object-contain border-4 border-white rounded-xl shadow-lg"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alt LogoLoop - Section'ın en altında */}
      <div className="flex justify-center flex-shrink-0 mt-8 md:mt-0">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Hero;
