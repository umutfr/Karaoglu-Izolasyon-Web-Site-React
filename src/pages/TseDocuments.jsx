import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpCircle,
  FileBadge,
  FlaskConical,
  BadgeCheck,
  BookOpen,
} from "lucide-react";
import Background from "../components/Background";

// 🧱 MARKA VERİLERİ
const firms = [
  {
    name: "Beypan",
    image: "/img/logos/beypan-logo.jpg",
    site: "https://www.beypan.com.tr/tr",
    documents: {
      tse: [
        { name: "Beypan XPS TSE Belgesi", pdf: "/pdf-viewer/K-BeypanXPS-TSE" },
      ],
      tests: [],
      yerliMali: [],
      teknikFoy: [],
    },
  },

  {
    name: "UKS Yapı",
    image: "/img/logos/uksyapi.jpg",
    site: "https://www.uksyapi.com/",
    documents: {
      tse: [
        {
          name: "UKS Yapı PROOF TSE Belgesi",
          pdf: "/pdf-viewer/UKSUKS-Yapi-PROOF-TSE",
        },
      ],
      tests: [],
      yerliMali: [],
      teknikFoy: [],
    },
  },

  {
    name: "QIS Yapı Kimyasalları",
    image: "/img/logos/qis.png",
    site: "https://qisturkiye.com/",
    documents: {
      tse: [],
      tests: [
        {
          name: "CRS Likit Su İşleme Lab. Sonuclari",
          pdf: "/pdf-viewer/K-QIS-CRS-likit-su-isleme-LAB",
        },
      ],
      yerliMali: [],
      teknikFoy: [],
    },
  },
];

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

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const categories = [
    { key: "tse", label: "TSE Belgeleri", icon: <FileBadge size={18} /> },
    { key: "tests", label: "Test Sonuçları", icon: <FlaskConical size={18} /> },
    { key: "yerliMali", label: "Yerli Malı", icon: <BadgeCheck size={18} /> },
    { key: "teknikFoy", label: "Teknik Föyler", icon: <BookOpen size={18} /> },
  ];

  return (
    <div className="relative text-white overflow-x-hidden">
      <Background />

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
              Belgeleri
            </span>
          </h1>

          {/* 🔧 MARKA KARTLARI — SADECE BURASI DEĞİŞTİ */}
          <div className="flex flex-wrap justify-center gap-10">
            {firms.map((firm, index) => {
              const [activeTab, setActiveTab] = useState("tse");

              return (
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

                  <div className="flex justify-center gap-2 mb-4 flex-wrap">
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setActiveTab(cat.key)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeTab === cat.key
                            ? "bg-red-700 text-white shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        {cat.icon}
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {firm.documents[activeTab] &&
                    firm.documents[activeTab].length > 0 ? (
                      firm.documents[activeTab].map((doc, i) => (
                        <a
                          key={i}
                          href={doc.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center bg-white text-black rounded-lg py-2 px-3 font-medium hover:bg-gray-200 transition-all"
                        >
                          {doc.name}
                        </a>
                      ))
                    ) : (
                      <p className="text-center text-gray-400 text-sm">
                        Bu kategoride belge bulunmuyor.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

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

      <FooterComponent onNavigate={handleGoHome} />
    </div>
  );
};

export default TseDocuments;
