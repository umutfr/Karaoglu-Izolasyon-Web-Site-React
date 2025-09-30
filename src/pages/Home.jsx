import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export const Home = () => {
  useEffect(() => {
    // Boxicons CSS'i yükle
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}

export default Home;