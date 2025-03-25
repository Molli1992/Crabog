"use client";
import styles from "./services.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import ServicesList from "@/components/servicesList/servicesList";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import Slider from "@/components/slider/slider";
import serviceImg from "../../../public/services-img/img-con-logo-2.jpg";
import librosImg from "../../../public/services-img/libros-img.jpeg";
import imgSlider1 from "../../../public/services-img/img-slider-1.jpg";
import imgSlider2 from "../../../public/services-img/img-slider-2.jpg";
import imgSlider3 from "../../../public/services-img/img-slider-3.jpg";
import imgSlider4 from "../../../public/services-img/img-slider-4.jpg";
import imgSlider5 from "../../../public/services-img/img-slider-5.jpg";
import imgSlider6 from "../../../public/services-img/img-slider-6.jpg";
import imgSlider7 from "../../../public/services-img/img-slider-7.jpg";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function Services() {
  const { language } = useLanguageStore();

  const arrayList = [
    {
      id: "arrayList-b-1",
      name: language === "spanish" ? "Derecho Laboral" : "Labor Law",
      desc:
        language === "spanish"
          ? "Nuestro estudio de abogados cuenta con un Departamento de Derecho Laboral"
          : "Our law firm has a dedicated Labor Law Department",
      Html: <FaHandshake className={styles.icons} />,
    },

    {
      id: "arrayList-b-2",
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
      id: "arrayList-b-3",
      name: language === "spanish" ? "Derecho de Seguros" : "Insurance Law",
      desc:
        language === "spanish"
          ? "Conocemos toda la problemática que plantea el negocio del Seguro desde hace ya 15 años"
          : "For over 15 years, we have been deeply familiar with the challenges of the insurance industry",
      Html: <FaShieldAlt className={styles.icons} />,
    },
  ];

  const sliderData = [
    {
      id: "services-slider-data-1",
      img: imgSlider1,
      desc:
        language === "spanish" ? "Litigios Complejos" : "Complex Litigation",
    },
    {
      id: "services-slider-data-2",
      img: imgSlider2,
      desc:
        language === "spanish"
          ? "Derecho Corporativo y Empresario"
          : "Corporate and Business Law",
    },
    {
      id: "services-slider-data-3",
      img: imgSlider3,
      desc: language === "spanish" ? "Derecho de Seguros" : "Insurance Law",
    },
    {
      id: "services-slider-data-4",
      img: imgSlider4,
      desc: language === "spanish" ? "Derecho Penal" : "Criminal Law",
    },
    {
      id: "services-slider-data-5",
      img: imgSlider5,
      desc: language === "spanish" ? "Derecho Laboral" : "Labor Law",
    },
    {
      id: "services-slider-data-6",
      img: imgSlider6,
      desc:
        language === "spanish"
          ? "Derecho Bancario y Financiero"
          : "Banking and Financial Law",
    },
    {
      id: "services-slider-data-7",
      img: imgSlider7,
      desc: language === "spanish" ? "Derecho Inmobiliario" : "Real Estate Law",
    },
  ];

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={serviceImg}
        title={language === "spanish" ? "Areas de Practica" : "Practice Areas"}
      />
      <div className={styles.section}>
        <div className={`${styles.container} ${styles.containerImage}`}>
          <Image src={librosImg} alt="Lawyer" className={styles.image} />
        </div>

        <div className={`${styles.container} ${styles.containerTitle}`}>
          <Title
            value={
              language === "spanish"
                ? "Nuestros abogados brindan servicios centrados en el cliente"
                : "Our Lawyers Provide Customer Centric"
            }
            span={
              language === "spanish"
                ? "a las corporaciones"
                : "Advice to Corporations"
            }
          />

          <Description
            value={
              language === "spanish"
                ? "En el panorama legal complejo y en constante cambio actual, tener un asesor legal confiable a su lado puede marcar la diferencia."
                : "In todays complex and ever-changing legal landscape, having atrusted legal advisor by your side can make all the difference."
            }
          />
        </div>

        <div className={styles.container}>
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

      <ServicesList />

      <div className={styles.containerSlider}>
        <div className={`${styles.containerH1}`}>
          <Title
            value={
              language === "spanish"
                ? "Además, los bufetes de abogados suelen contar con personal de apoyo,"
                : "In addition, law firms typically have a support staff,"
            }
            span={
              language === "spanish"
                ? "incluidos asistentes legales y asistentes administrativos"
                : "including paralegals and administrative assistants"
            }
          />
        </div>

        <Slider arrayServices={sliderData} />
      </div>
    </div>
  );
}
