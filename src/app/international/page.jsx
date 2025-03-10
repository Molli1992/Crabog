"use client";
import styles from "./international.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import contactImg from "../../../public/contact-img/contactUs-img.jpg";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function International() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={contactImg}
        title={language === "spanish" ? "Internacional" : "International"}
      />
    </div>
  );
}
