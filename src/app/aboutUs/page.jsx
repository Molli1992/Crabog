"use client";
import styles from "./aboutUs.module.css";
import aboutUsImg from "../../../public/aboutUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import CompanyInfo from "@/components/companyInfo/companyInfo";

export default function AboutUs() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={aboutUsImg}
        title={language === "spanish" ? "Nostros" : "About Us"}
      />
      <div className={styles.container}>
        <CompanyInfo />
      </div>
    </div>
  );
}
