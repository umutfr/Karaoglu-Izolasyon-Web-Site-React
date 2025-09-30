// ========================= 1. Header.jsx =========================
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-[5%] py-4 bg-[#000003] backdrop-blur-md flex justify-between items-center z-50 ">
      <a 
        href="#home" 
        onClick={(e) => scrollToSection(e, 'home')}
        className="text-white text-xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        Karaoğlu <span className="text-red-900 drop-shadow-[0_0_25px_rgba(158,0,0,1)]">İzolasyon</span>
      </a>

      <i 
        className="bx bx-menu text-white text-6xl cursor-pointer hidden"
        id="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      <nav className={`flex gap-16 ${isMenuOpen ? 'active' : ''}`}>
        {['home', 'about', 'services', 'testimonials', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => scrollToSection(e, section)}
            className="text-white text-xl font-medium transition-all duration-300 border-b-[3px] border-transparent hover:text-red-900 hover:border-red-900"
          >
            {section === 'home' ? 'Anasayfa' : 
             section === 'about' ? 'Hakkımızda' : 
             section === 'services' ? 'Hizmetler' : 
             section === 'testimonials' ? 'Referanslar' : 'İletişim'}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;