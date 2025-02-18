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

  // HEADER -----------------------------------------------------------------------------------------------------------------

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

  // Home --------------------------------------------------------------------------------------------------------------------

  getHomeTranslations: (lang) => ({
    titleImage:
      lang === "spanish"
        ? "Servicios jurídicos confiables y especializados"
        : "Reliable and specialized legal services",
    titleImage2:
      lang === "spanish"
        ? "Enfoque especial para cada caso"
        : "Special approach for each case",
    titleImage3:
      lang === "spanish"
        ? "Experiencia en la que puedes confiar"
        : "Experience you can trust",
    titleImage4:
      lang === "spanish"
        ? "Abogado de confianza para tus necesidades"
        : "Trusted lawyer for your needs",
  }),
  homeTranslations: {
    titleImage: "Servicios jurídicos confiables y especializados",
    titleImage2: "Enfoque especial para cada caso",
    titleImage3: "Experiencia en la que puedes confiar",
    titleImage4: "Abogado de confianza para tus necesidades",
  },

  // HeroSection ----------------------------------------------------------------------------------------------------------------

  getHeroSectionTranslations: (lang) => ({
    link: lang === "spanish" ? "Inicio" : "Home",
  }),
  HeroSectionTranslations: {
    link: "Inicio",
  },

  // Service ---------------------------------------------------------------------------------------------------------------------

  getServiceTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Servicios" : "Services",
  }),
  ServiceTranslations: {
    titleImg: "Servicios",
  },

  // AboutUs ---------------------------------------------------------------------------------------------------------------------

  getAboutUsTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Nostros" : "About Us",
  }),
  AboutUsTranslations: {
    titleImg: "Nostros",
  },

  // Blog ---------------------------------------------------------------------------------------------------------------------

  getBlogTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Foro" : "Blog",
  }),
  BlogTranslations: {
    titleImg: "Foro",
  },

  // Contact ---------------------------------------------------------------------------------------------------------------------

  getContactTranslations: (lang) => ({
    titleImg: lang === "spanish" ? "Contacto" : "Contacts",
    infoWindow: lang === "spanish" ? "Ubicación" : "Location",
    formTitle: lang === "spanish" ? "Enviar Mensaje" : "Send Message",
    formDescription:
      lang === "spanish"
        ? "Complete este formulario y nuestros especialistas se comunicarán con usted en breve para una consulta detallada."
        : "Fill out this form and our specialists will contact you shortly for detailed consultation.",
    formName: lang === "spanish" ? "Nombre" : "Your name",
    formLastName: lang === "spanish" ? "Apellido" : "Your last name",
    formEmail: lang === "spanish" ? "Mail" : "Email",
    formPhone: lang === "spanish" ? "Telefono" : "Phone",
    formMessage: lang === "spanish" ? "Mensaje" : "Message",
    formButton: lang === "spanish" ? "Enviar" : "Submit",
  }),
  ContactTranslations: {
    titleImg: "Contacto",
    infoWindow: "Ubicación",
    formTitle: "Enviar Mensaje",
    formDescription:
      "Complete este formulario y nuestros especialistas se comunicarán con usted en breve para una consulta detallada.",
    formName: "Nombre",
    formLastName: "Apellido",
    formEmail: "Mail",
    formPhone: "Telefono",
    formMessage: "Mensaje",
    formButton: "Enviar",
  },

  // Footer ---------------------------------------------------------------------------------------------------------------------

  getFooterTranslations: (lang) => ({
    phone: lang === "spanish" ? "Telefono" : "Phone",
    address: lang === "spanish" ? "Dirección" : "Address",
    email: lang === "spanish" ? "Mail" : "Email",
    hours: lang === "spanish" ? "Horas de trabajo" : "Working Hours",

    addressText:
      lang === "spanish"
        ? "Maipú 1252, Piso 8º, C.A.B.A."
        : "Maipú 1252, 8th Floor, C.A.B.A.",
    hoursText:
      lang === "spanish" ? "Lun a vie: 8am. a 4pm" : "Mon-Fri: 8am - 4pm",
  }),
  FooterTranslations: {
    phone: "Telefono",
    address: "Dirección",
    email: "Mail",
    hours: "Horas de trabajo",

    addressText: "Maipú 1252, Piso 8º, C.A.B.A.",
    hoursText: "Lun a vie: 8am. a 4pm",
  },
}));

export default useLanguageStore;
