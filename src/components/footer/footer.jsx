"use client";
import styles from "./footer.module.css";
import Image from "next/image";
import logoCrabog from "../../../public/logo_crabog.png";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Footer() {
  const { language } = useLanguageStore();

  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.body}>
      <div className={styles.containerLogo}>
        <Link href="/">
          <Image src={logoCrabog} alt="Logo" className={styles.whiteImage} />
        </Link>
      </div>

      <div className={styles.containerInfo}>
        <div className={styles.item}>
          <BiPhoneCall className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>
              {language === "spanish" ? "Telefono" : "Phone"}:
            </p>
            <p className={styles.text} style={{ color: "#1d2939b8" }}>
              +54 911 4021-7000
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <SlLocationPin className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>
              {language === "spanish" ? "Dirección" : "Address"}:
            </p>
            <p className={styles.text} style={{ color: "#1d2939b8" }}>
              {language === "spanish"
                ? "Maipú 1252, Piso 8º, C.A.B.A."
                : "Maipú 1252, 8th Floor, C.A.B.A."}
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <HiOutlineMailOpen className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>
              {language === "spanish" ? "Mail" : "Email"}:
            </p>
            <p className={styles.text} style={{ color: "#1d2939b8" }}>
              secretarias@crabog.com
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <LuAlarmClock className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>
              {language === "spanish"
                ? "Horario de Atencion"
                : "Business Hours"}
              :
            </p>
            <p className={styles.text} style={{ color: "#1d2939b8" }}>
              {language === "spanish"
                ? "Lun a vie: 8hs a 20hs"
                : "Mon-Fri: 8am - 8pm"}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.containerRights}>
        <p className={styles.text}>
          <span
            className={styles.text}
            style={{ color: "#cc4643", cursor: "pointer" }}
            onClick={() =>
              onClickOpenUrl("https://github.com/Molli1992/Crabog")
            }
          >
            Github
          </span>{" "}
          © All Rights Reserved - 2025 -{" "}
          <span
            style={{ color: "#cc4643", cursor: "pointer" }}
            onClick={() =>
              onClickOpenUrl("https://felipeblaksley.netlify.app/")
            }
          >
            Felipe Blaksley
          </span>
        </p>
      </div>
    </div>
  );
}
