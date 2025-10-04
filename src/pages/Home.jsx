import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';

export const Home = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

return (
<div className="relative text-white overflow-x-hidden z-0">
  <Background />
  <Header className="relative z-10" />
  <Hero className="relative z-10" />
  <About className="relative z-10" />
  <Services className="relative z-10" />
  <Testimonials className="relative z-10" />
  <Contact className="relative z-10" />
  <Footer className="relative z-10" />
</div>

);

};

export default Home;