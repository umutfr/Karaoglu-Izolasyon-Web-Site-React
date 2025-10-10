import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/905364106101"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5c] text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
      aria-label="WhatsApp"
    >
      <i className="bx bxl-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
