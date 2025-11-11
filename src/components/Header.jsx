import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { key: "home", label: "Anasayfa", type: "section" },
  { key: "about", label: "Hakkımızda", type: "section" },
  { key: "services", label: "Hizmetler", type: "section" },
  { key: "contact", label: "İletişim", type: "section" },
  { key: "tse-belgeleri", label: "Ürün Belgeleri", type: "page" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll kontrolü
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıkken scroll kilitle
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, item) => {
    if (item.type === "page") {
      e.preventDefault();
      navigate(`/${item.key}`);
      setIsMenuOpen(false);
    } else {
      scrollToSection(e, item.key);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full px-[5%] transition-all duration-300 bg-black/40 flex justify-between items-center z-50 ${
        isScrolled ? "py-3 shadow-lg" : "py-4"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="notranslate text-white text-2xl md:text-3xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-110 relative z-50"
          translate="no"
        >
          KARAOĞLU
          <span
            className="notranslate text-red-700 drop-shadow-[0_0_25px_rgba(158,0,0,1)]"
            translate="no"
          >
            <p className="notranslate text-lg" translate="no">
              İZOLASYON & İNŞAAT
            </p>
          </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-14 pt-3">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.type === "page" ? `/${item.key}` : `#${item.key}`}
            onClick={(e) => handleNavClick(e, item)}
            className="text-white text-xl font-medium transition-all duration-300 border-b-[3px] border-transparent hover:border-red-700"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="lg:hidden p-2 text-white z-50"
        aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#000003]/30 transition-all duration-300 flex flex-col">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-[#222]/60 transition"
            aria-label="Menüyü Kapat"
          >
            <X size={36} />
          </button>

          <div className="flex flex-col items-center justify-center h-full min-h-screen space-y-8 bg-[#000003]/70">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.type === "page" ? `/${item.key}` : `#${item.key}`}
                onClick={(e) => handleNavClick(e, item)}
                className="text-white text-2xl font-medium transition-all duration-300 border-b-[3px] border-transparent hover:border-red-700"
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
