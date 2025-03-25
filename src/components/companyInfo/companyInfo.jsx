import styles from "./companyInfo.module.css";
import Title from "../texts/title/title";
import Description from "../texts/description/description";
import useLanguageStore from "@/zustand/useLanguageStore";
import { FaHandshake } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";

export default function CompanyInfo() {
  const { language } = useLanguageStore();

  const arrayList = [
    {
      id: "arrayList-a-1",
      name: language === "spanish" ? "Derecho Laboral" : "Labor Law",
      desc:
        language === "spanish"
          ? "Nuestro estudio de abogados cuenta con un Departamento de Derecho Laboral"
          : "Our law firm has a dedicated Labor Law Department",
      Html: <FaHandshake className={styles.icons} />,
    },

    {
      id: "arrayList-a-2",
      name:
        language === "spanish"
          ? "Derecho Bancario y Financiero"
          : "Banking and Financial Law",
      desc:
        language === "spanish"
          ? "Nuestro Estudio Jurídico cuenta con profesionales con vasta experiencia en las áreas de Derecho Bancario y Derecho Financiero"
          : "Our law firm is staffed with professionals who have extensive experience in Banking and Financial Law",
      Html: <BsBank2 className={styles.icons} />,
    },

    {
      id: "arrayList-a-3",
      name: language === "spanish" ? "Derecho de Seguros" : "Insurance Law",
      desc:
        language === "spanish"
          ? "Contamos con profesionales altamente calificados y conocimientos profundizados para el tratamiento de siniestros en curso, juicios y consecuencias para las compañías aseguradoras"
          : "We have highly qualified professionals and in-depth knowledge for handling ongoing claims, lawsuits, and consequences for insurance companies.",
      Html: <FaShieldAlt className={styles.icons} />,
    },

    {
      id: "arrayList-a-4",
      name: language === "spanish" ? "Derecho Penal" : "Criminal Law",
      desc:
        language === "spanish"
          ? "Tenemos un equipo altamente calificado para brindar asesoramiento sobre cuestiones de Derecho Penal"
          : "We have a highly qualified team providing advisory services on Criminal Law",
      Html: <FaGavel className={styles.icons} />,
    },

    {
      id: "arrayList-a-5",
      name: language === "spanish" ? "Derecho Inmobiliario" : "Real Estate Law",
      desc:
        language === "spanish"
          ? "Asesoramos a empresas, inversores, desarrolladores, fiduciarias, constructoras y demás actores del mercado inmobiliario"
          : "We advise companies, investors, developers, fiduciaries, construction companies, and other players in the real estate market",
      Html: <FaBuildingColumns className={styles.icons} />,
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
