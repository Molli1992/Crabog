"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Home() {
  const arrayImages = [
    "http://afensor.like-themes.com/wp-content/uploads/2023/04/SLIDE_01.jpg",
    "http://afensor.like-themes.com/wp-content/uploads/2023/04/SLIDE_02.jpg",
    "http://afensor.like-themes.com/wp-content/uploads/2023/04/SLIDE_03.jpg",
    "http://afensor.like-themes.com/wp-content/uploads/2023/04/SLIDE_04.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { homeTranslations } = useLanguageStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.body}>
      <div
        className={styles.containerImage}
        style={{ backgroundImage: `url('${arrayImages[currentIndex]}')` }}
      >
        <motion.h1
          key={currentIndex}
          className={styles.titleImage}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {homeTranslations.titleImage}
        </motion.h1>
      </div>
      <div style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
}
