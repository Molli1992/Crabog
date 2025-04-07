"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import useLanguageStore from "@/zustand/useLanguageStore";
import homeImg1 from "../../public/home-img/foto-exterior-4.jpg";
import homeImg2 from "../../public/home-img/crabog-directorio.jpg";
import homeImg3 from "../../public/home-img/foto-exterior-3.jpg";
import homeImg4 from "../../public/home-img/foto-con-logo-1.jpg";
import homeImg5 from "../../public/home-img/foto-grupal.jpeg";
import FormContact from "@/components/formContact/formContact";
import ServicesList from "@/components/servicesList/servicesList";
import CompanyInfo from "@/components/companyInfo/companyInfo";
import Lawyers from "@/components/lawyers/lawyers";
import CompanyInfo2 from "@/components/compnayInfo2/companyInfo2";

export default function Home() {
  const { language } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrayImages = [homeImg1, homeImg2, homeImg3, homeImg4, homeImg5];
  const arrayTitles = [
    language === "spanish"
      ? "Conocimientos Solidos y Especializados"
      : "Solid and Specialized Knowledge",

    language === "spanish"
      ? "Trabajo en Equipo y Coordinado"
      : "Teamwork and Coordination",

    language === "spanish"
      ? "Defensa Ferrea de los Intereses de Nuestros Clientes"
      : "Strong Defense of Our Clients' Interests",

    language === "spanish"
      ? "Abogado de Confianza para tus Necesidades"
      : "Trusted Lawyer for Your Needs",

    language === "spanish" ? "" : "",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.body}>
      <div
        className={styles.containerImage}
        style={{ backgroundImage: `url('${arrayImages[currentIndex].src}')` }}
      >
        <motion.h1
          key={currentIndex}
          className={styles.titleImage}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {arrayTitles[currentIndex]}
        </motion.h1>
      </div>

      <div className={styles.container}>
        <CompanyInfo />
      </div>

      <ServicesList />

      <CompanyInfo2 />

      <div className={styles.container}>
        <Lawyers />
      </div>

      <div className={styles.containerForm}>
        <FormContact />
      </div>
    </div>
  );
}
