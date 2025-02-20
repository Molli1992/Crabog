import styles from "./heroSection.module.css";
import Link from "next/link";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function HeroSection({ imgSrc, title }) {
  const { language } = useLanguageStore();

  return (
    <div
      className={styles.body}
      style={{ backgroundImage: `url('${imgSrc.src}')` }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>
          <Link href="/" className={styles.link}>
            {language === "spanish" ? "Inicio" : "Home"}
          </Link>
          {" / "} {title}
        </p>
      </div>
    </div>
  );
}
