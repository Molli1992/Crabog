import React, { useState, useEffect } from "react";
import styles from "./blogCard.module.css";
import { FaEye } from "react-icons/fa";
import useLanguageStore from "@/zustand/useLanguageStore";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function BlogCard({ data, OnClick }) {
  const { language } = useLanguageStore();
  const [loader, setLoader] = useState(false);

  const [translateType, setTranslateType] = useState(data.type);
  const [translateTitle, setTranslateTitle] = useState(data.title);
  const [translateDescription, setTranslateDescription] = useState(
    data.description
  );
  const [formattedDate, setFormattedDate] = useState(data.date);

  async function translateText(text, targetLang = "en") {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=es|${targetLang}`
    );
    const data = await res.json();
    return data.responseData.translatedText;
  }

  useEffect(() => {
    if (language !== "spanish") {
      setLoader(true);

      async function translate() {
        try {
          const translatedType = await translateText(data.type);
          const translatedTitle = await translateText(data.title);
          const translatedDesc = await translateText(data.description);

          setTranslateType(translatedType);
          setTranslateTitle(translatedTitle);
          setTranslateDescription(translatedDesc);

          function formatDate(dateString) {
            const [day, month, yearAndTime] = dateString.split("/");
            const [year, time] = yearAndTime.split(", ");
            return `${month}/${day}/${year}, ${time}`;
          }

          setFormattedDate(formatDate(data.date));
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Error translating into English",
            icon: "error",
            confirmButtonText: "Ok",
          });
        } finally {
          setLoader(false);
        }
      }

      translate();
    } else {
      setTranslateType(data.type);
      setTranslateTitle(data.title);
      setTranslateDescription(data.description);
      setFormattedDate(data.date);
    }
  }, [language]);

  if (loader) {
    return (
      <div className={styles.body}>
        <ClipLoader color="#192d2f" size={100} />
      </div>
    );
  } else {
    return (
      <div className={styles.body} onClick={() => OnClick()}>
        <button className={styles.button}>{translateType}</button>

        <div className={styles.flexContainer} style={{ gap: "10px" }}>
          <p>{formattedDate}</p>
          {"|"}
          <div className={styles.flexContainer} style={{ gap: "5px" }}>
            <FaEye className={styles.icon} />
            <p>{data.seen}</p>
          </div>
        </div>

        <h1 className={styles.title}>{translateTitle}</h1>
        <p className={styles.desc}>{translateDescription}</p>
      </div>
    );
  }
}
