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
    <footer className="relative bottom-0 w-full bg-[#080808] ">
     <div className="flex md:gap-4 gap-9 text-3xl text-center justify-center items-center md:border-b-0 md:border-t-0 border-b border-t py-3 border-red-900">
            <a href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110" aria-label='insta'>
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/mehmet.kara.955910" target="_blank" aria-label='face' rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110">
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/mehmet-kara-b57979262/" target="_blank" aria-label='linked' rel="noopener noreferrer" className="inline-flex justify-center items-center w-14 h-14 bg-transparent border-2 border-red-900 text-red-900 rounded-full transition-all duration-300 hover:bg-red-900 hover:text-white hover:scale-110">
                <i className="bx bxl-linkedin"></i>
            </a>
            </div>

      <ul className="mt-0 p-0 text-2xl leading-relaxed mb-0 text-center list-none  flex flex-wrap justify-center items-center gap-6 md:gap-10 py-6 border-t border-b border-red-900 bg-black">
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

      <p className="text-center text-white text-sm md:text-base py-6 border-t border-red-900">© 2025
        Designed by <span>
          <a
            href="https://umutfr.dev/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-b-[3px] border-transparent transition-all duration-300 mx-3 hover:text-red-900 "
          > umutfr </a></span>  All Rights Reserved</p>
    </footer>
  );
};

export default Footer;