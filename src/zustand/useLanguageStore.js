import { create } from "zustand";

const useLanguageStore = create((set, get) => ({
  language: "spanish",
  setLanguage: (newLanguage) =>
    set({
      language: newLanguage,
      headerTranslations: get().getHeaderTranslations(newLanguage),
      homeTranslations: get().getHomeTranslations(newLanguage),
      HeroSectionTranslations: get().getHeroSectionTranslations(newLanguage),
      ServiceTranslations: get().getServiceTranslations(newLanguage),
      AboutUsTranslations: get().getAboutUsTranslations(newLanguage),
      BlogTranslations: get().getBlogTranslations(newLanguage),
      ContactTranslations: get().getContactTranslations(newLanguage),
    }),

  getHeaderTranslations: (lang) => ({
    home: lang === "spanish" ? "Inicio" : "Home",
    aboutUs: lang === "spanish" ? "Nosotros" : "About Us",
    services: lang === "spanish" ? "Servicios" : "Services",
    blog: lang === "spanish" ? "Foro" : "Blog",
    contacts: lang === "spanish" ? "Contacto" : "Contacts",
  }),
  headerTranslations: {
    home: "Inicio",
    aboutUs: "Nosotros",
    services: "Servicios",
    blog: "Foro",
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

  getHeroSectionTranslations: (lang) => ({
    link: lang === "spanish" ? "Inicio" : "Home",
  }),
  HeroSectionTranslations: {
    link: "Inicio",
  },

  getServiceTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Servicios" : "Services",
  }),
  ServiceTranslations: {
    titleImg: "Servicios",
  },

  getAboutUsTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Nostros" : "About Us",
  }),
  AboutUsTranslations: {
    titleImg: "Nostros",
  },

  getBlogTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Foro" : "Blog",
  }),
  BlogTranslations: {
    titleImg: "Foro",
  },

  getContactTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Contacto" : "Contacts",
  }),
  ContactTranslations: {
    titleImg: "Contacto",
  },
}));

export default useLanguageStore;
