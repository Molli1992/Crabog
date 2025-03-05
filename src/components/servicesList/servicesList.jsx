import React, { useState } from "react";
import styles from "./servicesList.module.css";
import Image from "next/image";
import serviceListImg from "../../../public/serviceListImg.jpg";
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
                ? "Los abogados están capacitados para analizar cuestiones legales y redactar"
                : "Lawyers are trained to analyze legal issues and draft "
            }
            span={
              language === "spanish" ? "documentos legales" : "legal documents"
            }
            color="#192d2f"
          />
        </div>

        <div className={styles.conatinerDescription}>
          <Description
            value={
              language === "spanish"
                ? "Uno de los principales beneficios de contratar un bufete de abogados es la experiencia y los conocimientos que aportan."
                : "One of the primary benefits of hiring a law firm is the expertise and experience that they bring to the table."
            }
            color="#1d2939b8"
          />
        </div>

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
              key={index}
              className={styles.itemContainer}
              onClick={() => handleItemClick(index)}
            >
              <div className={styles.itemList}>
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
