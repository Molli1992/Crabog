import styles from "./companyInfo.module.css";
import Title from "../texts/title/title";
import Description from "../texts/description/description";
import useLanguageStore from "@/zustand/useLanguageStore";
import {
  FaHandshake,
  FaBalanceScale,
  FaShieldAlt,
  FaGavel,
} from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

export default function CompanyInfo() {
  const { language } = useLanguageStore();

  const arrayList = [
    {
      id: "arrayList-a-1",
      name:
        language === "spanish"
          ? "Derecho Corporativo y Empresario"
          : "Corporate and Business Law",
      desc:
        language === "spanish"
          ? "Tenemos un equipo altamente calificado para brindar asesoramiento sobre cuestiones de Derecho Corporativo y Derecho Empresario."
          : "We have a highly qualified team providing advisory services on Corporate and Business Law matters.",
      Html: <FaHandshake className={styles.icons} />,
    },

    {
      id: "arrayList-a-2",
      name:
        language === "spanish"
          ? "Conflictos societarios y litigios complejos"
          : "Corporate conflicts and complex litigation",
      desc:
        language === "spanish"
          ? "Nuestro estudio cuenta con una sólida trayectoria en la resolución de conflictos societarios y litigios complejos, representando a socios, accionistas, directores y empresas en disputas de alto impacto."
          : "Our firm has a strong track record in resolving corporate conflicts and complex litigation, representing partners, shareholders, directors, and companies in high-impact disputes.",
      Html: <FaBalanceScale className={styles.icons} />,
    },

    {
      id: "arrayList-a-3",
      name: language === "spanish" ? "Derecho Laboral" : "Labor Law",
      desc:
        language === "spanish"
          ? "Brindamos nuestros servicios de asesoramiento integral en materia de Derecho Laboral tanto a empresas como a particulares."
          : "We provide comprehensive advisory services in Labor Law to both companies and individuals.",
      Html: <FaShieldAlt className={styles.icons} />,
    },

    {
      id: "arrayList-a-5",
      name: language === "spanish" ? "Derecho de Seguros" : "Insurance Law",
      desc:
        language === "spanish"
          ? "Contamos con profesionales altamente calificados y conocimientos profundizados para el tratamiento del Derecho de seguros."
          : "We have highly qualified professionals with extensive expertise in Insurance Law.",
      Html: <FaBuildingColumns className={styles.icons} />,
    },

    {
      id: "arrayList-a-4",
      name:
        language === "spanish" ? "Derecho Penal" : "Banking and Financial Law",
      desc:
        language === "spanish"
          ? "Poseemos una Unidad de Compliance para brindarles a los distintos clientes un programa de integridad a medida que los exima o atenúe la eventual responsabilidad penal que pudiera tener."
          : "We have a Compliance Unit dedicated to providing our clients with a customized integrity program that exempts or mitigates any potential criminal liability they may face.",
      Html: <FaGavel className={styles.icons} />,
    },
  ];

  const arrayHistory = [
    {
      id: "arrayHistory-1",
      data:
        language === "spanish"
          ? "Conformado por profesionales altamente calificados en el ejercicio de la abogacía, el Estudio se destaca por acompañar a sus clientes proveyendo servicios jurídicos confiables y especializados, involucrando en forma permanente a sus Socios y el equipo que cada uno de ellos lidera para proveer soluciones legales prácticas e innovadoras."
          : "Composed of highly qualified professionals in the practice of law, the Firm stands out for accompanying its clients by providing reliable and specialized legal services, permanently involving its Partners and the team that each of them leads to provide practical and innovative legal solutions.",
    },
    {
      id: "arrayHistory-2",
      data:
        language === "spanish"
          ? "Nuestro objetivo primordial es el trabajo en equipo en donde cada integrante de CANGUEIRO RUIZ ABOGADOS es una pieza fundamental del engranaje del Estudio. "
          : "Our primary objective is teamwork where each member of CANGUEIRO RUIZ ABOGADOS is a fundamental piece of the gear of the Firm.",
    },
    {
      id: "arrayHistory-3",
      data:
        language === "spanish"
          ? "Con amplio reconocimiento entre sus pares, nuestro Estudio ha proyectado su crecimiento en distintos países de la región, donde algunos de nuestros clientes nos han elegido para acompañarlos liderando la implementación de proyectos de inversión y financiamiento en sus distintos países."
          : "Widely recognized among its peers, our Firm has projected its growth in different countries of the region, where some of our clients have chosen us to accompany them leading the implementation of projects of investment and financing in their different countries.",
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Title
            value={
              language === "spanish"
                ? "Brindamos a nuestros clientes servicios"
                : "We provide our clients with innovative"
            }
            span={
              language === "spanish"
                ? "jurídicos innovadores"
                : "legal services"
            }
          />

          {arrayHistory &&
            arrayHistory.map((element) => {
              return <Description key={element.id} value={element.data} />;
            })}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerImg} />
      </div>

      <div className={styles.container}>
        <div className={styles.containerItems}>
          {arrayList &&
            arrayList.map((element) => {
              return (
                <div className={styles.item} key={element.id}>
                  <div>{element.Html}</div>

                  <div>
                    <Title fontSize="24px" value={element.name} />
                    <Description value={element.desc} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
