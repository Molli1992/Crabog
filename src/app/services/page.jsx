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
                  ? "En un entorno legal en constante evolución, donde los cambios normativos, los desafíos económicos y la complejidad de las relaciones jurídicas exigen cada vez más precisión, agilidad y estrategia, contar con el asesoramiento legal adecuado marca la diferencia. En nuestro estudio jurídico trabajamos con un objetivo claro: brindar un acompañamiento integral, cercano y altamente calificado que permita a cada cliente tomar decisiones informadas, seguras y efectivas."
                  : "In a constantly evolving legal environment—where regulatory changes, economic challenges, and the complexity of legal relationships demand greater precision, agility, and strategy—having the right legal counsel makes all the difference. At our law firm, we work with a clear objective: to provide comprehensive, personalized, and highly qualified legal support that empowers each client to make informed, secure, and effective decisions."
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "Sabemos que detrás de cada consulta hay una preocupación, un proyecto o un conflicto que necesita ser abordado con responsabilidad, profundidad y compromiso. Por eso, ofrecemos un servicio legal personalizado, adaptado a las características específicas de cada situación, con un enfoque práctico que prioriza los intereses de nuestros clientes sin perder de vista los principios fundamentales del derecho."
                  : "We understand that behind every inquiry, there is a concern, a project, or a dispute that requires responsible, thorough, and committed attention. That is why we offer a tailored legal service, adapting to the unique characteristics of each situation with a practical approach that prioritizes our clients' interests while upholding the fundamental principles of law."
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "Nuestro equipo está conformado por abogados con sólida formación académica, trayectoria profesional y experiencia en diversas ramas del derecho, lo que nos permite abordar tanto casos particulares como necesidades corporativas con la misma dedicación y excelencia. Trabajamos de manera interdisciplinaria, combinando el conocimiento jurídico con una comprensión real del entorno en el que se desarrollan nuestros clientes, sean empresas, instituciones o personas."
                  : "Our team is composed of attorneys with solid academic backgrounds, extensive professional experience, and expertise in various branches of law, allowing us to address both individual cases and corporate needs with the same dedication and excellence. We work in an interdisciplinary manner, combining legal knowledge with a deep understanding of the environments in which our clients operate—whether they are businesses, institutions, or individuals."
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "Nos especializamos en una amplia gama de áreas de práctica, entre las que se destacan el Derecho Penal, Derecho Corporativo y Comercial, Litigios y Resolución de Conflictos, Derecho Administrativo, Derecho Laboral, Derecho Civil y de Familia, Compliance, Derecho Internacional y Asesoramiento en materia de recuperación de activos y prevención del delito económico. En cada una de ellas, brindamos soluciones legales integrales, innovadoras y sostenibles, orientadas a minimizar riesgos, resolver controversias y acompañar procesos de crecimiento o transformación."
                  : "We specialize in a wide range of practice areas, including Criminal Law, Corporate and Commercial Law, Litigation and Dispute Resolution, Administrative Law, Labor Law, Civil and Family Law, Compliance, International Law, and advisory services related to asset recovery and economic crime prevention. In each of these areas, we provide comprehensive, innovative, and sustainable legal solutions aimed at minimizing risks, resolving disputes, and supporting growth or transformation processes."
              }
            />
          </div>
        </div>

        <div className={styles.image} />
      </div>

      <ServicesList />
    </div>
  );
}
