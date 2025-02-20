"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import useLanguageStore from "@/zustand/useLanguageStore";
import homeImg1 from "../../public/home-crabog-1.jpg";
import homeImg2 from "../../public/home-crabog-2.jpg";
import homeImg3 from "../../public/home-crabog-3.jpg";
import homeImg4 from "../../public/home-crabog-4.jpg";

export default function Home() {
  const { language } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrayImages = [homeImg1, homeImg2, homeImg3, homeImg4];
  const arrayTitles = [
    language === "spanish"
      ? "Servicios jurídicos confiables y especializados"
      : "Reliable and specialized legal services",

    language === "spanish"
      ? "Enfoque especial para cada caso"
      : "Special approach for each case",

    language === "spanish"
      ? "Experiencia en la que puedes confiar"
      : "Experience you can trust",

    language === "spanish"
      ? "Abogado de confianza para tus necesidades"
      : "Trusted lawyer for your needs",
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
      <div style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
}
