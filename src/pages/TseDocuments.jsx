import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpCircle } from "lucide-react";

// 🧱 MARKA VERİLERİ
const firms = [
  //   {
  //     name: "İzokem",
  //     image: "/img/logos/izokem.jpg",
  //     site: "http://izokem.com/",
  //     products: [
  //       { name: "İzokem Bitümlü Membran", pdf: "/pdfs/izokem-bitumlu.pdf" },
  //       { name: "İzokem Likit Membran", pdf: "/pdfs/izokem-likit.pdf" },
  //       { name: "İzokem Su Yalıtım Malzemesi", pdf: "/pdfs/izokem-su.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Mapei",
  //     image: "/img/logos/mapei.png",
  //     site: "https://www.mapei.com/",
  //     products: [
  //       { name: "Mapelastic Foundation", pdf: "/pdfs/mapei-mapelastic.pdf" },
  //       { name: "Mapei Ultraplan", pdf: "/pdfs/mapei-ultraplan.pdf" },
  //       { name: "Mapei Adesilex P9", pdf: "/pdfs/mapei-adesilex.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Onduline",
  //     image: "/img/logos/onduline.svg",
  //     site: "https://tr.onduline.com/tr/son-kullanici",
  //     products: [
  //       { name: "Onduline Classic", pdf: "/pdfs/onduline-classic.pdf" },
  //       { name: "Onduline HR", pdf: "/pdfs/onduline-hr.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Qis",
  //     image: "/img/logos/qis.png",
  //     site: "https://qisturkiye.com/",
  //     products: [
  //       { name: "Qis Likit Membran", pdf: "/pdfs/qis-likit.pdf" },
  //       { name: "Qis Poliüretan", pdf: "/pdfs/qis-poliuretan.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Aragonit",
  //     image: "/img/logos/aragonit2.jpg",
  //     site: "https://www.aragonit.com.tr/",
  //     products: [
  //       { name: "Aragonit Sıva", pdf: "/pdfs/aragonit-siva.pdf" },
  //       { name: "Aragonit Yapıştırıcı", pdf: "/pdfs/aragonit-yapistirici.pdf" },
  //     ],
  //   },
  //   {
  //     name: "İzocam",
  //     image: "/img/logos/izocamtr2.jpg",
  //     site: "https://www.izocam.com.tr/",
  //     products: [
  //       { name: "İzocam Cam Yünü", pdf: "/pdfs/izocam-camyunu.pdf" },
  //       { name: "İzocam Taş Yünü", pdf: "/pdfs/izocam-tasyunu.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Ravago",
  //     image: "/img/logos/ravago.webp",
  //     site: "https://ravagobuildingsolutions.com/tr/tr/",
  //     products: [
  //       { name: "Ravatherm XPS", pdf: "/pdfs/ravago-xps.pdf" },
  //       { name: "Ravago EPS", pdf: "/pdfs/ravago-eps.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Akdağ",
  //     image: "/img/logos/akdag-logo.png",
  //     site: "https://www.akdagtasyunu.com/",
  //     products: [
  //       { name: "Akdağ Taş Yünü Levha", pdf: "/pdfs/akdag-tasyunu.pdf" },
  //       { name: "Akdağ Çatı Yünü", pdf: "/pdfs/akdag-cati.pdf" },
  //     ],
  //   },
  //   {
  //     name: "HKSC",
  //     image: "/img/logos/hksc-logo2.png",
  //     site: "https://hksc.com.tr/",
  //     products: [
  //       { name: "HKSC Sıvı Yalıtım", pdf: "/pdfs/hksc-sivi.pdf" },
  //       { name: "HKSC Yapıştırıcı", pdf: "/pdfs/hksc-yapistirici.pdf" },
  //     ],
  //   },
  //   {
  //     name: "BBarrier",
  //     image: "/img/logos/bbarrier-logo.png",
  //     site: "",
  //     products: [
  //       { name: "BBarrier Membran", pdf: "/pdfs/bbarrier-membran.pdf" },
  //       { name: "BBarrier Likit", pdf: "/pdfs/bbarrier-likit.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Clever",
  //     image: "/img/logos/clever-logo.png",
  //     site: "https://www.cleverpolymers.com/",
  //     products: [
  //       { name: "Clever PU Membran", pdf: "/pdfs/clever-pu.pdf" },
  //       { name: "Clever Epoksi Kaplama", pdf: "/pdfs/clever-epoksi.pdf" },
  //     ],
  //   },
  //   {
  //     name: "Bonus",
  //     image: "/img/logos/bonus-logo.png",
  //     site: "https://www.bonusyalitim.com.tr/tr/",
  //     products: [
  //       { name: "Bonus EPS Levha", pdf: "/pdfs/bonus-eps.pdf" },
  //       { name: "Bonus Mantolama", pdf: "/pdfs/bonus-mantolama.pdf" },
  //     ],
  //   },
  {
    name: "Beypan",
    image: "/img/logos/beypan-logo.jpg",
    site: "https://www.beypan.com.tr/tr",
    products: [{ name: "Beypan XPS", pdf: "/pdfs/K-BeypanXPS-TSE.pdf" }],
  },
];

const TseDocuments = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <>
      {/* 🟥 MINI HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-red-700 z-50 px-6 py-3 flex justify-between items-center">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleGoHome();
          }}
          className="text-2xl font-extrabold text-white hover:text-red-600 transition"
        >
          KARAOĞLU<span className="text-red-600 ml-1">İZOLASYON</span>
        </a>
        <button
          onClick={handleGoHome}
          className="text-white text-lg font-medium border-b-2 border-transparent hover:border-red-700 transition"
        >
          Ana Sayfa
        </button>
      </header>

      {/* 📄 ANA İÇERİK */}
      <section className="min-h-screen bg-black text-white py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Çalıştığımız Firmaların{" "}
            <span className="text-red-600">TSE Belgeleri</span>
          </h1>

          {/* 🔧 ORTALAMA DÜZELTİLDİ */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
            {firms.map((firm, index) => (
              <div
                key={index}
                className="bg-[#111] border-2 border-red-700 rounded-xl p-6 w-full max-w-[400px] hover:scale-[1.03] hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-red-700"
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

                <h2 className="text-2xl font-semibold mb-4 text-center">
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

          {/* 🔴 Şık Ana Sayfaya Dön Butonu */}
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

      {/* ⚫ MINI FOOTER */}
      <footer className="bg-black/80 border-t border-red-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">KARAOĞLU İZOLASYON</span> —
        Tüm hakları saklıdır.
      </footer>
    </>
  );
};

export default TseDocuments;
