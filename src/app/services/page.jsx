"use client";
import styles from "./services.module.css";
import serviceImg from "../../../public/service-img.png";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import ServicesList from "@/components/servicesList/servicesList";
import lawyerImg from "../../../public/lawyer-img.jpg";
import Image from "next/image";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";

export default function Services() {
  const { ServiceTranslations, language } = useLanguageStore();
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

  return (
    <div className={styles.body}>
      <HeroSection imgSrc={serviceImg} title={ServiceTranslations.titleImg} />
      <div className={styles.section}>
        <div className={`${styles.container} ${styles.containerImage}`}>
          <Image src={lawyerImg} alt="Lawyer" className={styles.image} />
        </div>

        <div className={`${styles.container} ${styles.containerTitle}`}>
          <h1 className={styles.title}>
            {ServiceTranslations.serviceTitle}{" "}
            <span className={styles.spanElement}>
              {" "}
              {ServiceTranslations.serviceSpan}
            </span>
          </h1>
          <p className={styles.description}>
            {ServiceTranslations.serviceDescription}
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            <FaAward className={styles.icons} />
            <div className={styles.containerText}>
              <h1 className={styles.title} style={{ fontSize: "24px" }}>
                {arrayList[0]}
              </h1>
              <p className={styles.description}>{arrayList[3]}</p>
            </div>
          </div>

          <div className={styles.item}>
            <RiCustomerService2Fill className={styles.icons} />
            <div className={styles.containerText}>
              <h1 className={styles.title} style={{ fontSize: "24px" }}>
                {arrayList[1]}
              </h1>
              <p className={styles.description}>{arrayList[4]}</p>
            </div>
          </div>

          <div className={styles.item}>
            <FaComments className={styles.icons} />
            <div className={styles.containerText}>
              <h1 className={styles.title} style={{ fontSize: "24px" }}>
                {arrayList[2]}
              </h1>
              <p className={styles.description}>{arrayList[5]}</p>
            </div>
          </div>
        </div>
      </div>
      <ServicesList />
    </div>
  );
}
