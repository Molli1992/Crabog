"use client";
import styles from "./reviews.module.css";
import Title from "@/components/texts/title/title";
import Slider from "@/components/slider/slider";
import useLanguageStore from "@/zustand/useLanguageStore";
import { arrayReviewsSpanish, arrayReviewsEnglish } from "@/data/data";

export default function Reviews() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.containerSlider}>
      <Title
        value={
          language === "spanish" ? "Nuestro Clientes" : "What Our Clients Say"
        }
        fontSize="42px"
        color="#192d2f"
      />

      <Slider
        arrayReviews={
          language === "spanish" ? arrayReviewsSpanish : arrayReviewsEnglish
        }
      />
    </div>
  );
}
