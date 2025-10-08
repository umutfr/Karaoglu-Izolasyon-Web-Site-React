import React from "react";

const applications = [
  {
    title: "Uygulama 1",
    image: "/images/app1.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 2",
    image: "/images/app2.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 3",
    image: "/images/app3.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 4",
    image: "/images/app4.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 5",
    image: "/images/app5.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 6",
    image: "/images/app6.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 7",
    image: "/images/app7.jpg",
    description: "Kısa açıklama buraya gelecek."
  },
  {
    title: "Uygulama 8",
    image: "/images/app8.jpg",
    description: "Kısa açıklama buraya gelecek."
  }
];

const Projects = () => {
  return (
    <section id="projects" className=" px-[12%] md:min-h-screen py-10 scroll-mt-15 backdrop-blur-xs">
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-center text-3xl font-bold text-white mb-12 md:mb-8 md:text-6xl md:pb-8">Uygulamalarımız</h2>  

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden 
                         shadow-[0_0_15px_rgba(25,25,112,0.4)] 
                         hover:shadow-[0_0_25px_rgba(25,25,112,0.8)] 
                         transition-all duration-300"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
                <p className="text-sm text-gray-300">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
