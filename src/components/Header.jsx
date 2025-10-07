import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Anasayfa' },
  { key: 'about', label: 'Hakkımızda' },
  { key: 'services', label: 'Hizmetler' },
  { key: 'testimonials', label: 'Referanslar' },
  { key: 'contact', label: 'İletişim' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={` fixed top-0 left-0 right-0 w-full px-[5%] transition-all duration-300 backdrop-blur-md flex justify-between items-center z-50 ${
        isScrolled ? 'py-3 shadow-lg' : 'py-4'
      }`}
    >
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => scrollToSection(e, 'home')}
        className="text-white text-2xl md:text-3xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-110 relative z-50"
      >
        KARAOĞLU{' '}
        <span className="text-red-900 drop-shadow-[0_0_25px_rgba(158,0,0,1)]">
          İzolasyon
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-16 pt-3">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={`#${item.key}`}
            onClick={(e) => scrollToSection(e, item.key)}
            className="text-white text-xl font-medium transition-all duration-300 border-b-[3px] border-transparent hover:text-red-900 hover:border-red-900"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="lg:hidden p-2 text-white z-50"
        aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
  <div className="fixed inset-0 z-[9999] bg-[#000003]/90 backdrop-blur-md transition-all duration-300 flex flex-col">
    {/* Kapatma butonu */}
    <button
      onClick={() => setIsMenuOpen(false)}
      className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-[#222]/60 transition"
      aria-label="Menüyü Kapat"
    >
      <X size={36} />
    </button>

    {/* Menü içerik */}
    <div className="flex flex-col items-center justify-center h-full min-h-screen space-y-8 bg-[#000003]/70">
  {navItems.map((item) => (
    <a
      key={item.key}
      href={`#${item.key}`}
      onClick={(e) => scrollToSection(e, item.key)}
      className="text-white text-2xl font-medium transition-all duration-300 border-b-[3px] border-transparent hover:text-red-900 hover:border-red-900"
    >
      {item.label}
    </a>
  ))}
</div>
  </div>
)}
    </header>
  );
};

export default Header;
