import React from 'react';

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bottom-0 w-full py-16 bg-[#080808]">
      <div className="text-center pb-10">
        <a 
          href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-900 border-2 border-red-900 w-[42px] h-[42px] leading-[42px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:bg-red-900 hover:text-black hover:scale-110 hover:-translate-y-4 hover:shadow-[0_0_25px_rgba(158,0,0,1)]"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a 
          href="https://www.facebook.com/mehmet.kara.955910" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-900 border-2 border-red-900 w-[42px] h-[42px] leading-[42px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:bg-red-900 hover:text-black hover:scale-110 hover:-translate-y-4 hover:shadow-[0_0_25px_rgba(158,0,0,1)]"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a 
          href="#" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-900 border-2 border-red-900 w-[42px] h-[42px] leading-[42px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:bg-red-900 hover:text-black hover:scale-110 hover:-translate-y-4 hover:shadow-[0_0_25px_rgba(158,0,0,1)]"
        >
          <i className="bx bxl-youtube"></i>
        </a>
      </div>

      <ul className="mt-0 p-0 text-3xl leading-relaxed mb-0 text-center list-none">
        {[
          { id: 'home', text: 'Anasayfa' },
          { id: 'about', text: 'Hakkımızda' },
          { id: 'services', text: 'Hizmetler' },
          { id: 'testimonials', text: 'Referanslar' },
          { id: 'contact', text: 'İletişim' }
        ].map((item) => (
          <li key={item.id} className="inline-block px-6">
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-white border-b-[3px] border-transparent transition-all duration-300 mx-6 hover:text-red-900 hover:border-red-900"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-white text-center mt-12 text-2xl">
        Designed by <span>
          <a 
            href="https://umutfr.dev/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-900 hover:underline"
          >
            umutfr
          </a>
        </span> | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;