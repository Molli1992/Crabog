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
  const { FooterTranslations } = useLanguageStore();

  const onClickUrl = (url) => {
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
            <p className={styles.text}>{FooterTranslations.phone}</p>
            <p className={styles.text} style={{ color: "#ffffff99" }}>
              +54 911 4021-7000
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <SlLocationPin className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>{FooterTranslations.address}</p>
            <p className={styles.text} style={{ color: "#ffffff99" }}>
              {FooterTranslations.addressText}
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <HiOutlineMailOpen className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>{FooterTranslations.email}</p>
            <p className={styles.text} style={{ color: "#ffffff99" }}>
              secretarias@crabog.com
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <LuAlarmClock className={styles.icons} />
          <div className={styles.containerText}>
            <p className={styles.text}>{FooterTranslations.hours}</p>
            <p className={styles.text} style={{ color: "#ffffff99" }}>
              {FooterTranslations.hoursText}
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
            onClick={() => onClickUrl("https://github.com/Molli1992/Crabog")}
          >
            Github
          </span>{" "}
          © All Rights Reserved - 2025 -{" "}
          <span
            style={{ color: "#cc4643", cursor: "pointer" }}
            onClick={() => onClickUrl("https://felipeblaksley.netlify.app/")}
          >
            Felipe Blaksley
          </span>
        </p>
      </div>
    </div>
  );
}
