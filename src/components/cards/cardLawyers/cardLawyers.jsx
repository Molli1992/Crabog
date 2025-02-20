"use client";
import styles from "./cardLawyers.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function CardLawyers({ data }) {
  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.cardLawyers}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${data.img.src}')` }}
      >
        <div
          className={styles.containerIcons}
          style={{ top: "20px", right: "55px" }}
        >
          <FaLinkedinIn
            className={styles.icons}
            onClick={() => {
              onClickOpenUrl(data.linkedin);
            }}
          />
        </div>

        <div
          className={styles.containerIcons}
          style={{ top: "55px", right: "55px" }}
        >
          <FaInstagram
            className={styles.icons}
            onClick={() => {
              onClickOpenUrl(data.instagram);
            }}
          />
        </div>
      </div>

      <div className={styles.containerInfo}>
        <Title value={data.name} fontSize="24px" color="#192d2f" />
        <Description value={data.experience} color="#b79e63" />
      </div>
    </div>
  );
}
