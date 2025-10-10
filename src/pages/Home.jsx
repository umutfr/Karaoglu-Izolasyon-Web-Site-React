
import React, { useEffect, lazy, Suspense } from "react";

// Lazy import
const Header = lazy(() => import("../components/Header"));
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
// const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Background = lazy(() => import("../components/Background"));
const Projects = lazy(() => import("../components/Projects"));

const WhatsAppButton = lazy(() => import("../components/WhatsAppButton"));

export const Home = () => {
  // boxicons gibi dış CSS ekleme
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
      <Suspense fallback={<div>Loading Background...</div>}><Background /></Suspense>
      <Suspense fallback={<div>Loading Header...</div>}><Header /></Suspense>
      <Suspense fallback={<div>Loading Hero...</div>}><Hero /></Suspense>
      <Suspense fallback={<div>Loading About...</div>}><About /></Suspense>
      <Suspense fallback={<div>Loading Services...</div>}><Services /></Suspense>
      {/*<Suspense fallback={<div>Loading Testimonials...</div>}><Testimonials /></Suspense>*/}
      <Suspense fallback={<div>Loading Projects...</div>}><Projects /></Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}><Contact /></Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}><Footer /></Suspense>
      <Suspense fallback={<div>Loading Whatsapp...</div>}><WhatsAppButton /></Suspense>
    </div>
  );
};

export default Home;
