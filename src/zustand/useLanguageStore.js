import { create } from "zustand";

const useLanguageStore = create((set, get) => ({
  language: "spanish",
  setLanguage: (newLanguage) =>
    set({
      language: newLanguage,
      headerTranslations: get().getHeaderTranslations(newLanguage),
      homeTranslations: get().getHomeTranslations(newLanguage),
    }),

  getHeaderTranslations: (lang) => ({
    home: lang === "spanish" ? "Inicio" : "Home",
    aboutUs: lang === "spanish" ? "Nosotros" : "About Us",
    services: lang === "spanish" ? "Servicios" : "Services",
    blog: lang === "spanish" ? "Blog" : "Blog",
    contacts: lang === "spanish" ? "Contacto" : "Contacts",
  }),
  headerTranslations: {
    home: "Inicio",
    aboutUs: "Nosotros",
    services: "Servicios",
    blog: "Blog",
    contacts: "Contacto",
  },

  getHomeTranslations: (lang) => ({
    titleImage:
      lang === "spanish"
        ? "Servicios jurídicos confiables y especializados"
        : "Reliable and specialized legal services",
  }),
  homeTranslations: {
    titleImage: "Servicios jurídicos confiables y especializados",
  },
}));

export default useLanguageStore;
