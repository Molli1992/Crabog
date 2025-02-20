"use client";
import styles from "./aboutUs.module.css";
import aboutUsImg from "../../../public/aboutUs-img.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import CompanyInfo from "@/components/companyInfo/companyInfo";
import Slider from "@/components/slider/slider";
import Title from "@/components/texts/title/title";
import LawyerOneImg from "../../../public/lawyer-1.jpg";

export default function AboutUs() {
  const { language } = useLanguageStore();

  const arrayLawyers = [
    {
      id: "arrayLawyers-1",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-2",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-3",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-4",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-5",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-6",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-7",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
    {
      id: "arrayLawyers-8",
      img: LawyerOneImg,
      name: "Dawson Timms",
      experience: "Junior Lasyer",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
    },
  ];

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
    </div>
  );
}
