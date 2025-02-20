"use client";
import styles from "./aboutUs.module.css";
import aboutUsImg from "../../../public/aboutUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import CompanyInfo from "@/components/companyInfo/companyInfo";
import Slider from "@/components/slider/slider";
import { arrayLawyers } from "@/data/data";
import Image from "next/image";
import aboutUsImg3 from "../../../public/aboutUs-3-img.jpg";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function AboutUs() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={aboutUsImg}
        title={language === "spanish" ? "Nostros" : "About Us"}
      />

      <div className={styles.container}>
        <CompanyInfo />
      </div>

      <div className={styles.containerSlider}>
        <div className={`${styles.containerH1}`}>
          <Title
            value={
              language === "spanish"
                ? "Conoce a nuestros Abogados"
                : "Meet our Lawyers"
            }
            fontSize="36px"
            color="#192d2f"
          />
        </div>

        <Slider arrayLawyers={arrayLawyers} />
      </div>

      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <Image src={aboutUsImg3} alt="Firm" className={styles.image} />
        </div>

        <div className={styles.containerRight}>
          <div className={styles.containerTitle}>
            <Title
              value={
                language === "spanish"
                  ? "Profesionales autorizados"
                  : "Licensed Professionals Who is Authorized"
              }
              span={language === "spanish" ? "para ejercer" : "to Practice"}
            />

            <Description
              value={
                language === "spanish"
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                  : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
              }
            />

            <Description
              value={
                language === "spanish"
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
