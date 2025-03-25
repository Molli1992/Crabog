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
                  ? "Cangueiro Ruiz Abogados posee una red de corresponsales litigantes de primer nivel a lo largo y ancho del país. Asimismo, cuenta con una sólida red de aliados estratégicos en el exterior, habiendo participado en litigios internacionales de alta complejidad, lo que le ha permitido desarrollar una visión integral del derecho y sus implicancias en diversas jurisdicciones."
                  : "Cangueiro Ruiz Abogados has a network of top-tier litigating correspondents throughout the country. Additionally, it boasts a strong network of strategic allies abroad, having participated in highly complex international litigation, which has allowed it to develop a comprehensive vision of the law and its implications across various jurisdictions."
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "El Estudio mantiene alianzas con firmas legales de prestigio en América Latina, Europa y Estados Unidos, con quienes trabaja en conjunto en la estructuración de operaciones transnacionales, arbitrajes internacionales y la implementación de proyectos de inversión en la región. Nuestra capacidad de coordinar estrategias legales a nivel global nos permite ofrecer soluciones eficaces y adaptadas a los marcos normativos de cada país, asegurando a nuestros clientes una representación integral y de excelencia en asuntos de alcance internacional."
                  : "The firm maintains partnerships with prestigious legal firms in Latin America, Europe, and the United States, working collaboratively on structuring cross-border transactions, international arbitrations, and implementing investment projects in the region. Our ability to coordinate legal strategies globally enables us to offer effective solutions tailored to each country's regulatory frameworks, ensuring our clients comprehensive and high-quality representation in international matters."
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "Además, nuestra experiencia en asesoramiento jurídico internacional nos ha posicionado como un referente para empresas que buscan expandir sus operaciones fuera de sus fronteras, brindándoles soporte en temas regulatorios, comerciales y litigiosos en los mercados en los que operan."
                  : "Moreover, our experience in international legal advisory services has positioned us as a key reference for companies looking to expand their operations beyond their borders, providing them with support in regulatory, commercial, and litigation matters in the markets where they operate."
              }
              color="#192d2f"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
