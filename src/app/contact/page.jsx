"use client";
import styles from "./contact.module.css";
import contactImg from "../../../public/contactUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Contact() {
  const { ContactTranslations } = useLanguageStore();

  return (
    <div>
      <HeroSection imgSrc={contactImg} title={ContactTranslations.titleImg} />
      <div style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
}
