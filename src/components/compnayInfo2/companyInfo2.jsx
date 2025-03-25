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
                : "Our law firm takes pride in the recognition we have earned in the field of litigation, both in Commercial Law and highly complex Civil Law, as well as in corporate disputes, corporate restructurings, insolvency proceedings, and the recovery of credits granted by banking institutions. Our firms strong and strategic defense of our clients' interests has established us as one of the most respected firms in the market."
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Nuestra trayectoria nos ha permitido representar a clientes en disputas de gran envergadura, incluyendo litigios contractuales, responsabilidad civil, conflictos entre accionistas y ejecuciones judiciales de obligaciones financieras."
                : "Our experience has allowed us to represent clients in high-profile disputes, including contractual litigation, civil liability cases, shareholder conflicts, and judicial enforcement of financial obligations."
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Contamos con un equipo altamente capacitado para diseñar estrategias legales innovadoras, anticipar contingencias y lograr resultados favorables en negociaciones y litigios, tanto en instancias judiciales como en procedimientos arbitrales. Nos destacamos por nuestra capacidad analítica, solidez argumentativa y compromiso absoluto con la defensa de los intereses de quienes confían en nuestros servicios."
                : "We have a highly skilled team capable of designing innovative legal strategies, anticipating contingencies, and achieving favorable outcomes in negotiations and litigation, both in judicial proceedings and arbitration processes. We stand out for our analytical capacity, strong argumentation, and absolute commitment to defending the interests of those who trust our services."
            }
          />
        </div>
      </div>
    </div>
  );
}
