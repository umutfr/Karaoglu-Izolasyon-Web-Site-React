import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpCircle } from "lucide-react";
import Background from "../components/Background";

// 🧱 MARKA VERİLERİ
const firms = [
  //   {
  //     name: "İzokem",
  //     image: "/img/logos/izokem.jpg",
  //     site: "http://izokem.com/",
  //     products: [
  //       { name: "İzokem Bitümlü Membran", pdf: "/pdf-viewer/izokem-bitumlu" },
  //       { name: "İzokem Likit Membran", pdf: "/pdf-viewer/izokem-likit" },
  //       { name: "İzokem Su Yalıtım Malzemesi", pdf: "/pdf-viewer/izokem-su" },
  //     ],
  //   },
  //   {
  //     name: "Mapei",
  //     image: "/img/logos/mapei.png",
  //     site: "https://www.mapei.com/",
  //     products: [
  //       { name: "Mapelastic Foundation", pdf: "/pdf-viewer/mapei-mapelastic" },
  //       { name: "Mapei Ultraplan", pdf: "/pdf-viewer/mapei-ultraplan" },
  //       { name: "Mapei Adesilex P9", pdf: "/pdf-viewer/mapei-adesilex" },
  //     ],
  //   },
  //   {
  //     name: "Onduline",
  //     image: "/img/logos/onduline.svg",
  //     site: "https://tr.onduline.com/tr/son-kullanici",
  //     products: [
  //       { name: "Onduline Classic", pdf: "/pdf-viewer/onduline-classic" },
  //       { name: "Onduline HR", pdf: "/pdf-viewer/onduline-hr" },
  //     ],
  //   },
  //   {
  //     name: "Qis",
  //     image: "/img/logos/qis.png",
  //     site: "https://qisturkiye.com/",
  //     products: [
  //       { name: "Qis Likit Membran", pdf: "/pdf-viewer/qis-likit" },
  //       { name: "Qis Poliüretan", pdf: "/pdf-viewer/qis-poliuretan" },
  //     ],
  //   },
  //   {
  //     name: "Aragonit",
  //     image: "/img/logos/aragonit2.jpg",
  //     site: "https://www.aragonit.com.tr/",
  //     products: [
  //       { name: "Aragonit Sıva", pdf: "/pdf-viewer/aragonit-siva" },
  //       { name: "Aragonit Yapıştırıcı", pdf: "/pdf-viewer/aragonit-yapistirici" },
  //     ],
  //   },
  //   {
  //     name: "İzocam",
  //     image: "/img/logos/izocamtr2.jpg",
  //     site: "https://www.izocam.com.tr/",
  //     products: [
  //       { name: "İzocam Cam Yünü", pdf: "/pdf-viewer/izocam-camyunu" },
  //       { name: "İzocam Taş Yünü", pdf: "/pdf-viewer/izocam-tasyunu" },
  //     ],
  //   },
  //   {
  //     name: "Ravago",
  //     image: "/img/logos/ravago.webp",
  //     site: "https://ravagobuildingsolutions.com/tr/tr/",
  //     products: [
  //       { name: "Ravatherm XPS", pdf: "/pdf-viewer/ravago-xps" },
  //       { name: "Ravago EPS", pdf: "/pdf-viewer/ravago-eps" },
  //     ],
  //   },
  //   {
  //     name: "Akdağ",
  //     image: "/img/logos/akdag-logo.png",
  //     site: "https://www.akdagtasyunu.com/",
  //     products: [
  //       { name: "Akdağ Taş Yünü Levha", pdf: "/pdf-viewer/akdag-tasyunu" },
  //       { name: "Akdağ Çatı Yünü", pdf: "/pdf-viewer/akdag-cati" },
  //     ],
  //   },
  //   {
  //     name: "HKSC",
  //     image: "/img/logos/hksc-logo2.png",
  //     site: "https://hksc.com.tr/",
  //     products: [
  //       { name: "HKSC Sıvı Yalıtım", pdf: "/pdf-viewer/hksc-sivi" },
  //       { name: "HKSC Yapıştırıcı", pdf: "/pdf-viewer/hksc-yapistirici" },
  //     ],
  //   },
  //   {
  //     name: "BBarrier",
  //     image: "/img/logos/bbarrier-logo.png",
  //     site: "",
  //     products: [
  //       { name: "BBarrier Membran", pdf: "/pdf-viewer/bbarrier-membran" },
  //       { name: "BBarrier Likit", pdf: "/pdf-viewer/bbarrier-likit" },
  //     ],
  //   },
  //   {
  //     name: "Clever",
  //     image: "/img/logos/clever-logo.png",
  //     site: "https://www.cleverpolymers.com/",
  //     products: [
  //       { name: "Clever PU Membran", pdf: "/pdf-viewer/clever-pu" },
  //       { name: "Clever Epoksi Kaplama", pdf: "/pdf-viewer/clever-epoksi" },
  //     ],
  //   },
  //   {
  //     name: "Bonus",
  //     image: "/img/logos/bonus-logo.png",
  //     site: "https://www.bonusyalitim.com.tr/tr/",
  //     products: [
  //       { name: "Bonus EPS Levha", pdf: "/pdf-viewer/bonus-eps" },
  //       { name: "Bonus Mantolama", pdf: "/pdf-viewer/bonus-mantolama" },
  //     ],
  //   },
  {
    name: "Beypan",
    image: "/img/logos/beypan-logo.jpg",
    site: "https://www.beypan.com.tr/tr",
    products: [{ name: "Beypan XPS", pdf: "/pdf-viewer/K-BeypanXPS-TSE" }],
  },
  {
    name: "UKS Yapı",
    image: "/img/logos/uksyapi.jpg",
    site: "https://www.uksyapi.com/",
    products: [
      { name: "UKS Yapı PROOF", pdf: "/pdf-viewer/UKSUKS-Yapi-PROOF-TSE" },
    ],
  },
];

// Not: Background component'i import edilmeli
// import Background from "../components/Background";

// Not: Background component'i import edilmeli
// import Background from "../components/Background";

// 👣 Footer Component
const FooterComponent = ({ onNavigate }) => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    onNavigate();
  };

  return (
    <footer className="relative bottom-0 w-full bg-[#080808]">
      <div className="flex md:gap-4 gap-9 text-3xl text-center justify-center items-center md:border-b-0 md:border-t-0 border-b border-t py-3 border-white">
        <a
          href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
          aria-label="insta"
        >
          <i className="bx bxl-instagram text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-4xl"></i>
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
        <a
          href="https://www.tiktok.com/@mehmetkara0788"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center w-14 h-14 bg-black border-2 border-white rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:border-black"
          aria-label="tiktok"
        >
          <i className="bx bxl-tiktok text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-pink-500 to-blue-500 text-4xl"></i>
        </a>
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
          aria-label="whatsapp"
        >
          <i className="bx bxl-whatsapp text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-700 text-4xl"></i>
        </a>
      </div>

      <ul className="mt-0 p-0 text-2xl leading-relaxed mb-0 text-center list-none flex flex-wrap justify-center items-center gap-6 md:gap-10 py-6 border-t border-b border-white bg-black">
        {[
          { id: "home", text: "Anasayfa" },
          { id: "about", text: "Hakkımızda" },
          { id: "services", text: "Hizmetler" },
          // { id: "testimonials", text: "Referanslar" },
          { id: "contact", text: "İletişim" },
        ].map((item) => (
          <li key={item.id} className="inline-block px-6">
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-white border-b-[3px] border-transparent transition-all duration-300 mx-6 hover:text-white hover:border-red-700"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-center text-white text-sm md:text-base py-6">
        © 2025 Designed by
        <span>
          <a
            href="https://umutfr.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-b-[3px] border-transparent transition-all duration-300 mx-3 hover:border-red-700"
          >
            {" "}
            umutfr{" "}
          </a>
        </span>
        All Rights Reserved
      </p>
    </footer>
  );
};

const TseDocuments = () => {
  const navigate = useNavigate();

  // Boxicons yükleme
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <div className="relative text-white overflow-x-hidden">
      {/* 🎨 Hareketli Background */}
      <Background />

      {/* 🟥 HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full px-[5%] transition-all duration-300 bg-black/40 flex justify-between items-center z-50 py-4 shadow-lg">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleGoHome();
          }}
          className="text-white text-2xl md:text-3xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          KARAOĞLU
          <span className="text-red-700 drop-shadow-[0_0_25px_rgba(158,0,0,1)]">
            <p className="text-lg">İZOLASYON & İNŞAAT</p>
          </span>
        </a>

        <button
          onClick={handleGoHome}
          className="text-white text-xl font-medium transition-all duration-300 border-b-[3px] border-transparent hover:border-red-700"
        >
          Anasayfa
        </button>
      </header>

      {/* 📄 ANA İÇERİK */}
      <section className="min-h-screen pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Çalıştığımız Firmaların{" "}
            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
              TSE Belgeleri
            </span>
          </h1>

          {/* 🔧 MARKA KARTLARI */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
            {firms.map((firm, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-sm border-2 border-red-700 rounded-xl p-6 w-full max-w-[400px] hover:scale-[1.03] hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
              >
                <a
                  href={firm.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={firm.image}
                    alt={firm.name}
                    className="w-full h-40 object-contain rounded-lg bg-white p-4 mb-4"
                  />
                </a>

                <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                  {firm.name}
                </h2>

                <div className="space-y-2">
                  {firm.products.map((product, i) => (
                    <a
                      key={i}
                      href={product.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-white text-black rounded-lg py-2 px-3 font-medium hover:bg-gray-200 transition-all"
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 🔴 Ana Sayfaya Dön Butonu */}
          <div className="text-center mt-16">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all duration-300"
            >
              <ArrowUpCircle size={22} />
              Ana sayfaya dön
            </button>
          </div>
        </div>
      </section>

      {/* 👣 Footer Component */}
      <FooterComponent onNavigate={handleGoHome} />
    </div>
  );
};

export default TseDocuments;
