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
      FooterTranslations: get().getFooterTranslations(newLanguage),
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

  getFooterTranslations: (lang) => ({
    phone: lang === "spanish" ? "Telefono:" : "Phone:",
    address: lang === "spanish" ? "Dirección:" : "Address:",
    email: lang === "spanish" ? "Mail:" : "Email:",
    hours: lang === "spanish" ? "Horas de trabajo:" : "Working Hours:",

    addressText:
      lang === "spanish"
        ? "Maipú 1252, Piso 8º, C.A.B.A."
        : "Maipú 1252, 8th Floor, C.A.B.A.",
    hoursText:
      lang === "spanish" ? "Lun a vie: 8am. a 4pm" : "Mon-Fri: 8am - 4pm",
  }),
  FooterTranslations: {
    phone: "Telefono:",
    address: "Dirección:",
    email: "Mail:",
    hours: "Horas de trabajo:",

    addressText: "Maipú 1252, Piso 8º, C.A.B.A.",
    hoursText: "Lun a vie: 8am. a 4pm",
  },
}));

export default useLanguageStore;
