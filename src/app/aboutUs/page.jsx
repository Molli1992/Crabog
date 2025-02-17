"use client";
import styles from "./aboutUs.module.css";
import aboutUsImg from "../../../public/aboutUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function AboutUs() {
  const { AboutUsTranslations } = useLanguageStore();

  return (
    <div>
      <HeroSection imgSrc={aboutUsImg} title={AboutUsTranslations.titleImg} />
    </div>
  );
}
