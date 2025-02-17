"use client";
import styles from "./heroSection.module.css";
import Link from "next/link";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function HeroSection({ imgSrc, title }) {
  const { HeroSectionTranslations } = useLanguageStore();

  return (
    <div
      className={styles.body}
      style={{ backgroundImage: `url('${imgSrc.src}')` }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>
          <Link href="/" className={styles.link}>
            {HeroSectionTranslations.link}
          </Link>
          {" / "} {title}
        </p>
      </div>
    </div>
  );
}
