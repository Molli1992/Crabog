"use client";
import styles from "./aboutUs.module.css";
import aboutUsImg from "../../../public/aboutUs-img/foto-oficina-1.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import CompanyInfo from "@/components/companyInfo/companyInfo";
import CompanyInfo2 from "@/components/compnayInfo2/companyInfo2";
import Lawyers from "@/components/lawyers/lawyers";

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

      <Lawyers />

      <CompanyInfo2 />
    </div>
  );
}
