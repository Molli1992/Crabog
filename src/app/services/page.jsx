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
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

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
          <Title
            value={ServiceTranslations.serviceTitle}
            span={ServiceTranslations.serviceSpan}
          />

          <Description value={ServiceTranslations.serviceDescription} />
        </div>

        <div className={styles.container}>
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
        </div>
      </div>

      <ServicesList />

      <div className={styles.containerSlider}>
        <div className={`${styles.containerH1}`}>
          <Title
            value={ServiceTranslations.sliderTitle}
            span={ServiceTranslations.sliderSpan}
          />
        </div>

        <Slider arrayServices={sliderData} />
      </div>
    </div>
  );
}
