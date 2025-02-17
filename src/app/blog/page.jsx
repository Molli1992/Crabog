"use client";
import styles from "./blog.module.css";
import blogImg from "../../../public/blog-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Blog() {
  const { BlogTranslations } = useLanguageStore();

  return (
    <div>
      <HeroSection imgSrc={blogImg} title={BlogTranslations.titleImg} />
      <div style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
}
