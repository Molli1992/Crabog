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
                ? "El estudio se ha consolidado como un referente en la resolución de disputas complejas, con reconocida trayectoria en litigios comerciales, civiles y societarios de alta envergadura, así como en procesos de reestructuración empresarial, concursos, quiebras y recupero de activos. Nuestra intervención se destaca también en el ámbito del derecho penal, especialmente en casos vinculados a delitos económicos, financieros y corporativos, donde la estrategia y la precisión legal son fundamentales."
                : "The firm has established itself as a benchmark in the resolution of complex disputes, with a recognized track record in high-profile commercial, civil, and corporate litigation, as well as in business restructuring processes, insolvency proceedings, bankruptcies, and asset recovery. Our intervention also stands out in the field of criminal law, particularly in cases related to economic, financial, and corporate crimes, where strategy and legal precision are essential."
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Nuestra experiencia incluye la representación de clientes en conflictos contractuales, responsabilidad civil, disputas entre accionistas y ejecuciones judiciales, tanto en el fuero civil y comercial como en el penal económico."
                : "Our experience includes representing clients in contractual disputes, civil liability cases, shareholder conflicts, and judicial enforcement proceedings, both in civil and commercial courts as well as in economic criminal law matters."
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Contamos con un equipo técnico-jurídico de excelencia, capaz de anticipar escenarios, construir estrategias procesales innovadoras y alcanzar resultados favorables, ya sea en negociaciones, procesos judiciales o instancias arbitrales. Nuestro perfil firme, analítico y orientado a la defensa integral del cliente nos posiciona entre los estudios más respetados del mercado."
                : "We have a top-tier legal and technical team capable of anticipating scenarios, developing innovative procedural strategies, and achieving favorable outcomes—whether in negotiations, judicial proceedings, or arbitration. Our strong, analytical, and client-focused approach positions us among the most respected law firms in the market."
            }
          />
        </div>
      </div>
    </div>
  );
}
