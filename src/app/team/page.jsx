"use client";
import styles from "./team.module.css";
import useLanguageStore from "@/zustand/useLanguageStore";
import { arrayLawyers, arrayLawyersSpanish } from "@/data/lawyers";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import Slider from "@/components/slider/slider";

export default function Team() {
  const { language } = useLanguageStore();
  const arrayData = language === "spanish" ? arrayLawyersSpanish : arrayLawyers;
  const titleFontSize = "60px";
  const descriptionFontSize = "22px";

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Title
            value={language === "spanish" ? "Equipo" : "Team"}
            color="#192d2f"
            fontSize={titleFontSize}
          />
        </div>

        <div className={styles.containerDescription}>
          <Description
            value={
              language === "spanish"
                ? "«El trabajo en equipo transforma problemas complejos en soluciones posibles.»"
                : "«Teamwork transforms complex problems into possible solutions.»"
            }
            color="#192d2f"
            fontSize={descriptionFontSize}
          />
        </div>

        <Slider arrayTeam={arrayData} />
      </div>
    </div>
  );
}
