import styles from "./lawyers.module.css";
import Title from "@/components/texts/title/title";
import Slider from "@/components/slider/slider";
import { arrayLawyers } from "@/data/data";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Lawyers() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.containerSlider}>
      <Title
        value={
          language === "spanish"
            ? "Conoce a nuestros Abogados"
            : "Meet our Lawyers"
        }
        fontSize="42px"
        color="#192d2f"
      />

      <Slider arrayLawyers={arrayLawyers} />
    </div>
  );
}
