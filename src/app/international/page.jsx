"use client";
import styles from "./international.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import ImgCiudad from "../../../public/international-img/img-ciudad.jpeg";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function International() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={ImgCiudad}
        title={language === "spanish" ? "Internacional" : "International"}
      />

      <div className={styles.container}>
        <Title
          value={
            language === "spanish"
              ? "RECONOCIMIENTO INTERNACIONAL"
              : "INTERNATIONAL RECOGNITION"
          }
          color="#192d2f"
        />

        <div className={styles.containerFlex}>
          <div className={styles.containerLeft} />

          <div className={styles.containerRight}>
            <Title
              value={
                language === "spanish"
                  ? "CORRESPONSALIA Y PROYECCION INTERNACIONAL: CANGUEIRO RUIZ ABOGADOS"
                  : "CORRESPONDENCE AND INTERNATIONAL PROJECTION: CANGUEIRO RUIZ ABOGADOS"
              }
              color="#192d2f"
              fontSize={"24px"}
            />

            <Description
              value={
                language === "spanish"
                  ? "posee una red de corresponsales litigantes de primer nivel a lo largo y ancho del país. Asimismo, posee una importante red de corresponsales en el exterior habiendo participado en litigios internacionales de alta complejidad. El Estudio mantiene, además, alianzas con Estudios de primer nivel en Latinoamérica con quienes trabaja en conjunto en la implementación de proyectos de inversión en la Región."
                  : "The Firm has a network of top-level litigating correspondents throughout the country. It also has an important network of correspondents abroad, having participated in highly complex international litigation. The Firm also maintains alliances with top-level firms in Latin America with whom it works together on the implementation of investment projects in the Region."
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
              }
              color="#192d2f"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
