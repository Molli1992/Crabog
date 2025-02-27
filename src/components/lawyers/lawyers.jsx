import styles from "./lawyers.module.css";
import Title from "@/components/texts/title/title";
import Slider from "@/components/slider/slider";
import { arrayLawyers, arrayLawyersSpanish } from "@/data/data";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Lawyers({ backgroundColor, colorWhite }) {
  const { language } = useLanguageStore();

  return (
    <div
      className={styles.containerSlider}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "" }}
    >
      <Title
        value={
          language === "spanish"
            ? "Conoce a nuestros Abogados"
            : "Meet our Lawyers"
        }
        fontSize="42px"
        color={backgroundColor ? "" : "#192d2f"}
      />

      <Slider
        colorWhite={colorWhite ? true : false}
        arrayLawyers={
          language === "spanish" ? arrayLawyersSpanish : arrayLawyers
        }
      />
    </div>
  );
}
