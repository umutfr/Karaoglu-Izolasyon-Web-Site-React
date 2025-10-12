import PixelBlast from "@/components/ui/PixelBlast";
import React from "react";

import { Link } from "react-router-dom"; // varsa yönlendirme için

const NotFound = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Sabit Arka Plan */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-black">
        <PixelBlast
          variant="diamond"
          pixelSize={6}
          color="#414141"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* İçerik Kutusu */}
      <div className="bg-black/50 backdrop-blur-xl p-10 rounded-3xl shadow-[0_0_35px_#fff] border border-[#fff] max-w-md mx-auto">
        <h1 className="text-7xl font-extrabold text-white mb-4 drop-shadow-[0_0_10px_#fff]">
          404
        </h1>
        <h2 className="text-2xl text-gray-300 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-400 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#fff] text-black rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_#fff] hover:text-white hover:bg-black "
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
