import React, { useEffect, lazy, Suspense } from "react";

// Lazy yüklenen componentler
const Header = lazy(() => import("../components/Header"));
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Background = lazy(() => import("../components/Background"));

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
      <Suspense fallback={<div className="p-5 text-center">Loading Background...</div>}>
        <Background />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading Header...</div>}>
        <Header className="relative z-10" />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading Hero...</div>}>
        <Hero className="relative z-10" />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading About...</div>}>
        <About className="relative z-10" />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading Services...</div>}>
        <Services className="relative z-10" />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading Testimonials...</div>}>
        <Testimonials className="relative z-10" />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading Contact...</div>}>
        <Contact className="relative z-10" />
      </Suspense>

      <Suspense fallback={<div className="p-5 text-center">Loading Footer...</div>}>
        <Footer className="relative z-10" />
      </Suspense>
    </div>
  );
};

export default Home;
