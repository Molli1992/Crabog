import React, { useState } from "react";
import styles from "./servicesList.module.css";
import Image from "next/image";
import serviceListImg from "../../../public/services-img/serviceListImg.jpg";
import { MdArrowOutward } from "react-icons/md";
import useLanguageStore from "@/zustand/useLanguageStore";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import { serviceList, serviceListSpanish } from "@/data/services";

export default function ServicesList() {
  const { language } = useLanguageStore();

  const arrayList = language === "spanish" ? serviceListSpanish : serviceList;

  const [selectedItemIndex, setSelectedItemIndex] = useState(false);

  const handleItemClick = (index) => {
    setSelectedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLeft}>
        <div className={styles.conatinerTitle}>
          <Title
            value={
              language === "spanish"
                ? "Enfoque legal integral,"
                : "Comprehensive legal approach,"
            }
            span={
              language === "spanish"
                ? "orientado a resultados"
                : "results-oriented"
            }
            color="#192d2f"
          />
        </div>

        <Description
          value={
            language === "spanish"
              ? "Abordamos cada caso con un enfoque interdisciplinario, combinando nuestras distintas áreas de práctica para brindar respuestas jurídicas integrales, sólidas y eficaces. Nuestro equipo está conformado por profesionales con experiencia en diversas ramas del derecho, lo que nos permite acompañar a nuestros clientes en una amplia gama de situaciones, desde la prevención de conflictos hasta la defensa de sus derechos en instancias judiciales y extrajudiciales. La excelencia técnica, la ética profesional y la cercanía con el cliente son pilares de nuestra forma de trabajar."
              : "We approach each case with an interdisciplinary focus, combining our various practice areas to provide comprehensive, solid, and effective legal solutions. Our team consists of professionals with experience in different branches of law, enabling us to support our clients in a wide range of situations, from conflict prevention to the defense of their rights in both judicial and extrajudicial proceedings. Technical excellence, professional ethics, and close client relationships are the pillars of our work approach."
          }
          color="#1d2939b8"
        />

        <Image
          src={serviceListImg}
          alt="Legal building"
          className={styles.image}
        />
      </div>

      <div className={styles.containerRight}>
        {arrayList &&
          arrayList.map((item, index) => (
            <div
              key={item.id}
              className={styles.itemContainer}
              onClick={() => handleItemClick(index)}
            >
              <div
                className={styles.itemList}
                style={{
                  color: selectedItemIndex === index ? "#cc4643" : "",
                }}
              >
                <h1 className={styles.service}>{item.serviceName}</h1>
                <div>
                  <MdArrowOutward className={styles.service} />
                </div>
              </div>

              {selectedItemIndex === index && (
                <p className={styles.serviceDescription}>
                  {item.serviceDescription}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
