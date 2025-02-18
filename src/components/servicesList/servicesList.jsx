"use client";
import React, { useState } from "react";
import styles from "./servicesList.module.css";
import Image from "next/image";
import serviceListImg from "../../../public/serviceListImg.jpg";
import { MdArrowOutward } from "react-icons/md";
import useLanguageStore from "@/zustand/useLanguageStore";
import {
  TbArrowNarrowRightDashed,
  TbArrowNarrowLeftDashed,
} from "react-icons/tb";

export default function ServicesList() {
  const { ServiceTranslations, language } = useLanguageStore();
  const serviceList = [
    language === "spanish" ? "Violencia Doméstica" : "Domestic Violence",
    language === "spanish" ? "Delitos juveniles" : "Juvenile Crimes",
    language === "spanish"
      ? "Audiencias Administrativas"
      : "Administrative Hearings",
    language === "spanish" ? "Ley de Propiedad" : "Property Law",
    language === "spanish" ? "Delitos de conducción" : "Driving Crimes",
    language === "spanish" ? "Delitos de drogas" : "Drug Crimes",
    language === "spanish" ? "Divorcios y Custodia" : "Divorce & Custody",
    language === "spanish" ? "Defensa Penal" : "Criminal Defense",
    language === "spanish" ? "Accidentes de Tráfico" : "Traffic Accidents",
    language === "spanish" ? "Testamentos y Herencias" : "Wills & Inheritance",
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = serviceList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(serviceList.length / itemsPerPage);

  return (
    <div className={styles.body}>
      <div className={styles.containerLeft}>
        <h1 className={styles.title}>
          {ServiceTranslations.serviceListTitle}{" "}
          <span className={styles.spanElement}>
            {ServiceTranslations.serviceListSpan}
          </span>
        </h1>

        <p className={styles.description}>
          {ServiceTranslations.serviceListDescription}
        </p>

        <Image
          src={serviceListImg}
          alt="Legal building"
          className={styles.image}
        />
      </div>

      <div className={styles.containerRight}>
        {currentItems.map((item, index) => (
          <div key={index} className={styles.itemList}>
            <h1 className={styles.service}>{item}</h1>
            <MdArrowOutward className={styles.service} />
          </div>
        ))}

        <div className={styles.pagination}>
          {currentPage === 1 ? null : (
            <TbArrowNarrowLeftDashed
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={styles.icon}
              style={{ left: "0px" }}
            />
          )}

          {currentPage === totalPages ? null : (
            <TbArrowNarrowRightDashed
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={styles.icon}
              style={{ right: "0px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
