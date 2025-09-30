// ========================= 2. Hero.jsx =========================
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const words = ['İzolasyon', 'Yalıtım', 'İnşaat', 'Malzeme', 'Uygulama'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
        <section id="home" className="min-h-screen md:flex md:flex-row md:justify-between md:items-center md:gap-12 md:px-20 md:py-20 px-10 py-20 flex flex-col items-center">
        <div className="flex flex-col md:items-start justify-center text-left mt-6 md:mt-0">
            <h1 className="text-5xl md:text-4xl font-bold mt-6 leading-tight">KARAOĞLU</h1>
            
            <h3 className="text-3xl md:text-2xl font-semibold mb-6 mt-4 min-w-[200px]">
            <span className="text-red-900 relative">
                {text}
                <span className="inline-block w-1 h-full bg-red-900 ml-2 animate-pulse"></span>
            </span>
            </h3>

            <p className="text-lg font-medium leading-relaxed max-w-3xl mb-6">
            Yalıtım sektöründe 20 yılı aşkın tecrübemizle hizmetinizdeyiz. Müşterilerimize yüksek kalite standartlarına sahip yalıtım malzemeleri, profesyonel uygulama çözümleri ve uygun fiyat avantajları sunuyoruz.
            </p>

            <div className="flex gap-4 mb-6">
            <a href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 text-2xl rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110">
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/mehmet.kara.955910" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 text-2xl rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110">
                <i className="bx bxl-facebook"></i>
            </a>
            </div>

            <div className="flex flex-col items-center gap-4">
            <a href="tel:+905364106101" className="inline-block px-6 py-3 bg-red-900 text-black rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                +90 536 410 61 01
            </a>
            <a href="https://maps.app.goo.gl/sgUinVV1GvShHQW79" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-black text-red-900 border-2 border-red-900 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-red-900 hover:text-black">
                <i className="bx bx-location text-xl"></i> Osmaniye
            </a>
            </div>
        </div>

        <div className="text-center mt-12 md:mt-0">
            <h2 className="text-2xl font-normal text-gray-500 mb-2">"yapı doktorunuz"</h2>
            <div className="flex justify-center items-center gap-2">
            <span className="text-6xl font-black text-red-900 leading-none drop-shadow-[0_0_25px_rgba(158,0,0,1)]">K</span>
            <span className="text-4xl font-extrabold text-gray-700">KARAOĞLU</span>
            </div>
            <h3 className="text-2xl font-medium text-gray-600 mt-2">İZOLASYON &amp; İNŞAAT</h3>
        </div>
        </section>

  );
};

export default Hero;