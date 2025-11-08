import React, { useEffect, lazy, Suspense, memo } from "react";

// Lazy import
const Header = lazy(() => import("../components/Header"));
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Background = lazy(() => import("../components/Background"));
const WhatsAppButton = lazy(() => import("../components/WhatsAppButton"));

// ✅ Tüm değişmeyen component’leri memo ile wrap
const MemoHeader = memo(Header);
const MemoHero = memo(Hero);
const MemoAbout = memo(About);
const MemoServices = memo(Services);
const MemoContact = memo(Contact);
const MemoFooter = memo(Footer);
const MemoBackground = memo(Background);
const MemoWhatsAppButton = memo(WhatsAppButton);

export const Home = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden z-0">
      {/* ✅ Background sadece 1 KEZ yükleniyor */}
      <Suspense fallback={null}>
        <MemoBackground key="static-bg" />
      </Suspense>

      <Suspense fallback={null}>
        <MemoHeader />
      </Suspense>
      <Suspense fallback={null}>
        <MemoHero />
      </Suspense>
      <Suspense fallback={null}>
        <MemoAbout />
      </Suspense>
      <Suspense fallback={null}>
        <MemoServices />
      </Suspense>
      <Suspense fallback={null}>
        <MemoContact />
      </Suspense>
      <Suspense fallback={null}>
        <MemoFooter />
      </Suspense>
      <Suspense fallback={null}>
        <MemoWhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Home;
