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
          <div className={styles.containerImg} />

          <div className={styles.containerText}>
            <Title
              value={
                language === "spanish"
                  ? "Proyección Internacional y Red Estratégica de Corresponsalía"
                  : "International Projection and Strategic Correspondence Network"
              }
              color="#192d2f"
              fontSize={"32px"}
            />

            <Description
              value={
                language === "spanish"
                  ? "Cangueiro Ruiz Abogados ha construido una sólida proyección internacional a través de una red confiable y activa de corresponsales litigantes en todo el país, así como alianzas estratégicas con firmas legales de prestigio en América Latina, Europa y Estados Unidos. Esta red nos permite intervenir con eficacia en jurisdicciones diversas y brindar un servicio jurídico de excelencia en asuntos que trascienden fronteras."
                  : "Cangueiro Ruiz Abogados has built a strong international presence through a reliable and active network of litigation correspondents across the country, as well as strategic alliances with prestigious law firms in Latin America, Europe, and the United States. This network enables us to operate effectively across various jurisdictions and provide top-tier legal services in matters that transcend borders."
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "Nuestra participación en litigios internacionales complejos, operaciones transnacionales, arbitrajes y procesos de recuperación de activos ha consolidado nuestra capacidad de diseñar estrategias legales adaptadas a marcos normativos diversos, entendiendo las particularidades culturales, comerciales y regulatorias de cada país. Trabajamos junto a estudios aliados en la estructuración de vehículos de inversión, cumplimiento regulatorio internacional, planificación contractual y resolución de controversias en ámbitos judiciales y arbitrales."
                  : "Our involvement in complex international litigation, transnational operations, arbitration, and asset recovery processes has strengthened our ability to design legal strategies tailored to diverse regulatory frameworks. We understand the cultural, commercial, and regulatory nuances of each country, allowing us to work alongside allied firms in structuring investment vehicles, ensuring international regulatory compliance, drafting contractual agreements, and resolving disputes in both judicial and arbitral forums."
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "Acompañamos a empresas, inversores y particulares en su proceso de expansión internacional, brindando soporte integral en materia societaria, contractual, tributaria, regulatoria y litigiosa. Ya sea en la apertura de nuevas operaciones, la firma de acuerdos estratégicos o la resolución de disputas, nuestra intervención se distingue por su enfoque integral, su visión estratégica y su profundo conocimiento del derecho comparado y del entorno global."
                  : "We support businesses, investors, and individuals in their international expansion, offering comprehensive guidance on corporate, contractual, tax, regulatory, and litigation matters. Whether assisting with new business ventures, negotiating strategic agreements, or resolving disputes, our approach is distinguished by its comprehensive perspective, strategic vision, and deep understanding of comparative law and the global legal landscape."
              }
              color="#192d2f"
            />

            <Description
              value={
                language === "spanish"
                  ? "En Cangueiro Ruiz Abogados entendemos que el derecho internacional exige respuestas rápidas, coordinadas y técnicamente impecables. Por eso, articulamos nuestras capacidades locales con una mirada global, ofreciendo soluciones jurídicas a medida de cada desafío, y garantizando a nuestros clientes representación experta, cercana y eficaz en todos los contextos."
                  : "At Cangueiro Ruiz Abogados, we recognize that international law demands swift, coordinated, and technically impeccable responses. That is why we integrate our local expertise with a global perspective, delivering customized legal solutions for every challenge and ensuring our clients receive expert, responsive, and effective representation in all contexts."
              }
              color="#192d2f"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
