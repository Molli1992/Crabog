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
import Slider from "@/components/slider/slider";
import imgSlider1 from "../../../public/img-slider-1.jpg";
import imgSlider2 from "../../../public/img-slider-2.jpg";
import imgSlider3 from "../../../public/img-slider-3.jpg";
import imgSlider4 from "../../../public/img-slider-4.jpg";
import imgSlider5 from "../../../public/img-slider-5.jpg";
import imgSlider6 from "../../../public/img-slider-6.jpg";

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

  const sliderData = [
    {
      id: "services-slider-data-1",
      img: imgSlider1,
      desc:
        language === "spanish"
          ? "Contratos Empresariales"
          : "Businesses Contracts",
    },
    {
      id: "services-slider-data-2",
      img: imgSlider2,
      desc:
        language === "spanish" ? "Problemas migratorios" : "Migration Issues",
    },
    {
      id: "services-slider-data-3",
      img: imgSlider3,
      desc:
        language === "spanish" ? "Asuntos Corporativos" : "Corporate Matters",
    },
    {
      id: "services-slider-data-4",
      img: imgSlider4,
      desc: language === "spanish" ? "Cumplimiento legal" : "Legal Compliance",
    },
    {
      id: "services-slider-data-5",
      img: imgSlider5,
      desc:
        language === "spanish"
          ? "Protección de la propiedad intelectual"
          : "Intellectual Property Protection",
    },
    {
      id: "services-slider-data-6",
      img: imgSlider6,
      desc:
        language === "spanish"
          ? "Asesoría en Derecho Tributario"
          : "Tax Law Advisory",
    },
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

      <div className={styles.containerSlider}>
        <div className={`${styles.containerH1}`}>
          <h1 className={styles.title}>
            {ServiceTranslations.sliderTitle}{" "}
            <span className={styles.spanElement}>
              {ServiceTranslations.sliderSpan}{" "}
            </span>
            {ServiceTranslations.sliderText}
          </h1>
        </div>

        <Slider arrayServices={sliderData} />
      </div>
    </div>
  );
}
