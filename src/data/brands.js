// src/data/brands.js
export const brands = [
  {
    id: "beypan",
    name: "Beypan",
    logo: "/images/beypan.png",
    website: "https://www.beypan.com.tr",
    products: [{ name: "XPS Isı Yalıtım Levhası" }, { name: "EPS Levha" }],
    documents: [
      { name: "TSE Belgesi", file: "/docs/beypan-tse.pdf" },
      { name: "CE Sertifikası", file: "/docs/beypan-ce.pdf" },
    ],
  },
  {
    id: "mapei",
    name: "Mapei",
    logo: "/images/mapei.png",
    website: "https://www.mapei.com",
    products: [
      { name: "Mapelastic Waterproofing" },
      { name: "Keraflex Yapıştırıcı" },
    ],
    documents: [{ name: "TSE Belgesi", file: "/docs/mapei-tse.pdf" }],
  },
  {
    id: "onduline",
    name: "Onduline",
    logo: "/images/onduline.png",
    website: "https://www.onduline.com.tr",
    products: [
      { name: "Bitümlü Çatı Levhası" },
      { name: "Ondutiss Su Yalıtım Membranı" },
    ],
    documents: [{ name: "TSE Belgesi", file: "/docs/onduline-tse.pdf" }],
  },
];
