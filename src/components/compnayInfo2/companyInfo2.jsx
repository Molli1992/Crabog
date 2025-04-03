import styles from "./companyInfo2.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function CompanyInfo2() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft} />

      <div className={styles.containerRight}>
        <div className={styles.containerTitle}>
          <Title
            value={language === "spanish" ? "Litigios" : "Complex"}
            span={language === "spanish" ? "Complejos" : "Litigation"}
          />

          <Description
            value={
              language === "spanish"
                ? "Es orgullo de nuestro estudio de abogados, el reconocimiento adquirido en el área de litigios tanto dentro del Derecho Comercial como del Derecho Civil de alta complejidad, así como en conflictos societarios, reestructuraciones corporativas, concursos y quiebras y recupero de créditos otorgados por entidades bancarias. El perfil combativo en defensa de los intereses del cliente, han hecho que el Estudio sea uno de los más respetados del mercado."
                : "The firm has established itself as a benchmark in resolving complex disputes, with a recognized track record in high-profile commercial, civil, and corporate litigation, as well as in business restructuring, insolvency, bankruptcy, and asset recovery processes. Our expertise also extends to criminal law, particularly in cases related to economic, financial, and corporate crimes, where strategy and legal precision are essential."
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Nuestra experiencia incluye la representación de clientes en conflictos contractuales, responsabilidad civil, disputas entre accionistas y ejecuciones judiciales, tanto en el fuero civil y comercial como en el penal económico."
                : "Our experience includes representing clients in contractual disputes, civil liability cases, shareholder conflicts, and judicial enforcement proceedings, both in civil and commercial courts and in economic criminal matters."
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Contamos con un equipo técnico-jurídico de excelencia, capaz de anticipar escenarios, construir estrategias procesales innovadoras y alcanzar resultados favorables, ya sea en negociaciones, procesos judiciales o instancias arbitrales. Nuestro perfil firme, analítico y orientado a la defensa integral del cliente nos posiciona entre los estudios más respetados del mercado."
                : "We have a top-tier legal and technical team capable of anticipating scenarios, developing innovative procedural strategies, and achieving favorable outcomes—whether in negotiations, judicial proceedings, or arbitration. Our firm’s strong, analytical, and client-focused approach positions us among the most respected law firms in the market."
            }
          />
        </div>
      </div>
    </div>
  );
}
