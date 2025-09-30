import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#080808] px-[12%] py-40 scroll-mt-24">
      <h2 className="text-center text-[8rem] font-bold mb-20">İletişim</h2>
      
      <div className="flex justify-center items-stretch gap-20 border-2 border-red-900 rounded-[4rem] p-28">
        {/* Sol Konum Kısmı */}
        <div className="flex flex-col justify-center text-center pb-4">
          <h3 className="flex items-center justify-center gap-2 text-4xl pb-6">
            <i className="bx bx-location text-white text-4xl"></i>
            Konum
          </h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.6822050591663!2d36.24414657629241!3d37.06505565272425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152f21dab27f76a1%3A0xa3756875f7a0d201!2sKarao%C4%9Flu%20Izolasyon!5e0!3m2!1str!2str!4v1758891402988!5m2!1str!2str" 
            width="400" 
            height="300" 
            className="border-0 rounded-xl"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Dikey Çizgi */}
        <div className="w-[2px] bg-red-900 mx-8 h-auto"></div>

        {/* Sağ Kısım */}
        <div className="flex flex-wrap flex-col justify-start text-left gap-16 pt-12">
          <div>
            <h3 className="flex items-center gap-2 text-4xl mb-0">
              <i className="bx bx-phone text-white"></i>
              Telefon
            </h3>
            <p className="text-2xl font-semibold leading-relaxed pt-4">+90 536 410 61 01</p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-4xl mb-0">
              <i className="bx bx-envelope text-white"></i>
              Mail
            </h3>
            <a 
              href="mailto:karaogluizoalsyon@hotmail.com"
              className="text-3xl text-white no-underline border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
            >
              karaogluizoalsyon@hotmail.com
            </a>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-4xl mb-0">
              <i className="bx bx-share-alt text-white"></i>
              Sosyal Medya
            </h3>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.instagram.com/yalitim_osmaniye_mehmet_kara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white no-underline border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/mehmet.kara.955910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white no-underline border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
              >
                Facebook
              </a>
              <a 
                href="#"
                className="text-3xl text-white no-underline border-b-2 border-transparent transition-all duration-300 hover:border-red-900 hover:text-red-900"
              >
                Tiktok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;