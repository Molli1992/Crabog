"use client";
import styles from "./contact.module.css";
import contactImg from "../../../public/contactUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";

export default function Contact() {
  const { ContactTranslations, FooterTranslations } = useLanguageStore();

  return (
    <div className={styles.body}>
      <HeroSection imgSrc={contactImg} title={ContactTranslations.titleImg} />
      <div className={styles.container}>
        <div className={styles.item}>
          <SlLocationPin className={styles.icons} />
          <h1 className={styles.itemTitle}>{FooterTranslations.address}</h1>
          <p className={styles.itemText}>{FooterTranslations.addressText}</p>
        </div>

        <div className={styles.item}>
          <BiPhoneCall className={styles.icons} />
          <h1 className={styles.itemTitle}>{FooterTranslations.phone}</h1>
          <p className={styles.itemText}>+54 911 4021-7000</p>
        </div>

        <div className={styles.item}>
          <HiOutlineMailOpen className={styles.icons} />
          <h1 className={styles.itemTitle}>{FooterTranslations.email}</h1>
          <p className={styles.itemText}>secretarias@crabog.com</p>
        </div>

        <div className={styles.item}>
          <LuAlarmClock className={styles.icons} />
          <h1 className={styles.itemTitle}>{FooterTranslations.hours}</h1>
          <p className={styles.itemText}>{FooterTranslations.hoursText}</p>
        </div>
      </div>
    </div>
  );
}
