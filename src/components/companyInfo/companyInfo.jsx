import styles from "./companyInfo.module.css";
import Image from "next/image";
import aboutUs2Img from "../../../public/aboutUs-2-img.jpg";
import Title from "../texts/title/title";
import Description from "../texts/description/description";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function CompanyInfo() {
  const { language } = useLanguageStore();

  const arrayList = [
    language === "spanish" ? "Reclamaciones de seguros" : "Insurance Claims",
    language === "spanish" ? "Consultoría Empresarial" : "Business Consulting",
    language === "spanish" ? "Análisis de contratos" : "Contract Analysis",

    language === "spanish"
      ? "Los despachos de abogados tienen acceso a tecnología de punta"
      : "Law firms often have access to cutting-edge technology",
    language === "spanish"
      ? "Bases de datos de investigación y bibliotecas jurídicas invaluables en la construcción empresarial"
      : "Research databases, and legal libraries, which can be invaluable in building",
    language === "spanish"
      ? "Los despachos de abogados tienen acceso a tecnología de punta"
      : "Law firms often have access to cutting-edge technology",
  ];

  const arrayHistory = [
    language === "spanish"
      ? "Conformado por profesionales altamente calificados en el ejercicio de la abogacía, el Estudio se destaca por acompañar a sus clientes proveyendo servicios jurídicos confiables y especializados, involucrando en forma permanente a sus Socios y el equipo que cada uno de ellos lidera para proveer soluciones legales prácticas e innovadoras."
      : "Composed of highly qualified professionals in the practice of law, the Firm stands out for accompanying its clients by providing reliable and specialized legal services, permanently involving its Partners and the team that each of them leads to provide practical and innovative legal solutions.",
    language === "spanish"
      ? "Nuestro objetivo primordial es el trabajo en equipo en donde cada integrante de CANGUEIRO RUIZ ABOGADOS es una pieza fundamental del engranaje del Estudio. "
      : "Our primary objective is teamwork where each member of CANGUEIRO RUIZ ABOGADOS is a fundamental piece of the gear of the Firm.",
    language === "spanish"
      ? "Con amplio reconocimiento entre sus pares, nuestro Estudio ha proyectado su crecimiento en distintos países de la región, donde algunos de nuestros clientes nos han elegido para acompañarlos liderando la implementación de proyectos de inversión y financiamiento en sus distintos países."
      : "Widely recognized among its peers, our Firm has projected its growth in different countries of the region, where some of our clients have chosen us to accompany them leading the implementation of projects of investment and financing in their different countries.",
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

          <Description value={arrayHistory[0]} />

          <Description value={arrayHistory[1]} />

          <Description value={arrayHistory[2]} />
        </div>
      </div>

      <div className={styles.container}>
        <Image src={aboutUs2Img} alt="Lawyer" className={styles.image} />
      </div>

      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div>
              <FaAward className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[0]} />
              <Description value={arrayList[3]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <RiCustomerService2Fill className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[1]} />
              <Description value={arrayList[4]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <FaComments className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[2]} />
              <Description value={arrayList[5]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <FaAward className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[0]} />
              <Description value={arrayList[3]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <RiCustomerService2Fill className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[1]} />
              <Description value={arrayList[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
