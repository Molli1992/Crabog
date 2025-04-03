"use client";
import styles from "./services.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import ServicesList from "@/components/servicesList/servicesList";
import Slider from "@/components/slider/slider";
import serviceImg from "../../../public/services-img/img-con-logo-2.jpg";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import imgSlider1 from "../../../public/services-img/img-slider-1.png";
import imgSlider2 from "../../../public/services-img/img-slider-2.jpeg";
import imgSlider3 from "../../../public/services-img/img-slider-3.jpg";
import imgSlider4 from "../../../public/services-img/img-slider-4.webp";
import imgSlider5 from "../../../public/services-img/img-slider-5.jpg";
import imgSlider6 from "../../../public/services-img/img-slider-6.webp";

export default function Services() {
  const { language } = useLanguageStore();

  const sliderData = [
    {
      id: "services-slider-data-3",
      img: imgSlider1,
      desc: language === "spanish" ? "Derecho de Seguros" : "Insurance Law",
    },
    {
      id: "services-slider-data-4",
      img: imgSlider2,
      desc: language === "spanish" ? "Derecho Penal" : "Criminal Law",
    },
    {
      id: "services-slider-data-5",
      img: imgSlider3,
      desc: language === "spanish" ? "Derecho Laboral" : "Labor Law",
    },
    {
      id: "services-slider-data-2",
      img: imgSlider4,
      desc:
        language === "spanish"
          ? "Derecho Corporativo y Empresario"
          : "Corporate and Business Law",
    },
    {
      id: "services-slider-data-6",
      img: imgSlider5,
      desc:
        language === "spanish"
          ? "Derecho Bancario y Financiero"
          : "Banking and Financial Law",
    },
    {
      id: "services-slider-data-7",
      img: imgSlider6,
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
        <div className={styles.container}>
          <div className={styles.containerText}>
            <Title
              value={
                language === "spanish"
                  ? "Comprometidos con la excelencia jurídica,"
                  : "Committed to legal excellence, "
              }
              span={
                language === "spanish"
                  ? "enfocados en sus objetivos"
                  : "focused on your goals"
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "En un entorno legal cada vez más dinámico y desafiante, contar con el asesoramiento adecuado es clave para tomar decisiones estratégicas. Nuestro equipo de abogados se dedica a brindar un servicio personalizado y orientado al cliente, acompañando con soluciones legales eficientes, confiables y a la medida de sus necesidades."
                  : "In an increasingly dynamic and challenging legal environment, having the right advice is key to making strategic decisions. Our team of lawyers is committed to providing a personalized, client-oriented service, offering efficient, reliable, and tailored legal solutions to meet your needs."
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "En un entorno legal cada vez más dinámico y desafiante, contar con el asesoramiento adecuado es clave para tomar decisiones estratégicas. Nuestro equipo de abogados se dedica a brindar un servicio personalizado y orientado al cliente, acompañando con soluciones legales eficientes, confiables y a la medida de sus necesidades."
                  : "In an increasingly dynamic and challenging legal environment, having the right advice is key to making strategic decisions. Our team of lawyers is committed to providing a personalized, client-oriented service, offering efficient, reliable, and tailored legal solutions to meet your needs."
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "En un entorno legal cada vez más dinámico y desafiante, contar con el asesoramiento adecuado es clave para tomar decisiones estratégicas. Nuestro equipo de abogados se dedica a brindar un servicio personalizado y orientado al cliente, acompañando con soluciones legales eficientes, confiables y a la medida de sus necesidades."
                  : "In an increasingly dynamic and challenging legal environment, having the right advice is key to making strategic decisions. Our team of lawyers is committed to providing a personalized, client-oriented service, offering efficient, reliable, and tailored legal solutions to meet your needs."
              }
            />
          </div>
        </div>

        <div className={styles.image} />
      </div>

      <ServicesList />

      <div className={styles.containerSlider}>
        <div className={`${styles.containerH1}`}>
          <Title
            value={
              language === "spanish"
                ? "Contamos con profesionales altamente capacitados en diversas ramas del derecho, preparados para"
                : "We have highly trained professionals in various branches of law,"
            }
            span={
              language === "spanish"
                ? "ofrecer soluciones jurídicas sólidas, eficientes y personalizadas"
                : "prepared to offer solid, efficient, and personalized legal solutions"
            }
          />
        </div>

        <Slider arrayServices={sliderData} />
      </div>
    </div>
  );
}
