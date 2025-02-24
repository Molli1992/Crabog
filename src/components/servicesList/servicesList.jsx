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
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function ServicesList() {
  const { language } = useLanguageStore();

  const serviceList = [
    {
      serviceName:
        language === "spanish" ? "Violencia Doméstica" : "Domestic Violence",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish" ? "Delitos juveniles" : "Juvenile Crimes",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish"
          ? "Audiencias Administrativas"
          : "Administrative Hearings",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName: language === "spanish" ? "Ley de Propiedad" : "Property Law",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish" ? "Delitos de conducción" : "Driving Crimes",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName: language === "spanish" ? "Delitos de drogas" : "Drug Crimes",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish" ? "Divorcios y Custodia" : "Divorce & Custody",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish" ? "Defensa Penal" : "Criminal Defense",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish" ? "Accidentes de Tráfico" : "Traffic Accidents",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
    {
      serviceName:
        language === "spanish"
          ? "Testamentos y Herencias"
          : "Wills & Inheritance",
      serviceDescription:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!",
    },
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = serviceList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(serviceList.length / itemsPerPage);

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
        {currentItems.map((item, index) => (
          <div
            key={index}
            className={styles.itemContainer}
            onClick={() => handleItemClick(index)}
          >
            <div className={styles.itemList}>
              <h1 className={styles.service}>{item.serviceName}</h1>
              <MdArrowOutward className={styles.service} />
            </div>

            {selectedItemIndex === index && (
              <p className={styles.serviceDescription}>
                {item.serviceDescription}
              </p>
            )}
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
