"use client";
import styles from "./services.module.css";
import serviceImg from "../../../public/service-img.png";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Services() {
  const { ServiceTranslations } = useLanguageStore();

  return (
    <div>
      <HeroSection imgSrc={serviceImg} title={ServiceTranslations.titleImg} />
    </div>
  );
}
