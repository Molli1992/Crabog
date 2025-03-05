"use client";
import React, { useState } from "react";
import styles from "./lawyersProfile.module.css";
import HeroSection from "@/components/heroSection/heroSection";
import tribunalImg from "../../../../public/lawyers-img/tribunal-vacio.jpg";
import useLanguageStore from "@/zustand/useLanguageStore";
import { arrayLawyers, arrayLawyersSpanish } from "@/data/lawyers";
import { useParams } from "next/navigation";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";
import { MdArrowOutward } from "react-icons/md";
import {
  TbArrowNarrowRightDashed,
  TbArrowNarrowLeftDashed,
} from "react-icons/tb";

export default function LawyersProfile() {
  const { language } = useLanguageStore();
  const params = useParams();

  const arrayData = language === "spanish" ? arrayLawyersSpanish : arrayLawyers;
  const profileData = arrayData.filter((lawyer) => {
    return lawyer.id === params.id;
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = profileData[0].cv.slice(startIndex, endIndex);

  const totalPages = Math.ceil(profileData[0].cv.length / itemsPerPage);

  const handleItemClick = (index) => {
    setSelectedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");

    e.stopPropagation();
  };

  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    setLoader(true);
    try {
      if (!formData.name || !formData.phone || !formData.message) {
        Swal.fire({
          title: "Info!",
          text:
            language === "spanish"
              ? "Completar todos los campos"
              : "Complete all fields",
          icon: "info",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: language === "spanish" ? "Exito!" : "Success!",
          text:
            language === "spanish"
              ? "Mensaje enviado correctamente"
              : "Message sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={tribunalImg}
        title={profileData[0].name}
        desc={profileData[0].experience}
      />

      <div className={styles.container}>
        <div
          style={{ backgroundImage: `url('${profileData[0].img.src}')` }}
          className={styles.profileImg}
          alt="Profile IMG"
        />

        <div className={styles.infoProfile}>
          <Title value={profileData[0].name} color="#192d2f" />

          <Description
            value={profileData[0].experience}
            color="#cc4643"
            fontSize="18px"
          />

          <div className={styles.listSection}>
            <div className={styles.containerList}>
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className={styles.itemContainer}
                  onClick={() => handleItemClick(index)}
                  style={{
                    color: selectedItemIndex === index ? "#cc4643" : "",
                  }}
                >
                  <div className={styles.itemList}>
                    <h1 className={styles.service}>{item.name}</h1>
                    <MdArrowOutward className={styles.service} />
                  </div>

                  {selectedItemIndex === index && (
                    <p className={styles.serviceDescription}>{item.desc}</p>
                  )}
                </div>
              ))}

              <div
                className={styles.pagination}
                style={{
                  justifyContent: currentPage === 1 ? "right" : "space-between",
                }}
              >
                {currentPage === 1 ? null : (
                  <TbArrowNarrowLeftDashed
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
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

          <div className={styles.flexContainer} style={{ marginTop: "0px" }}>
            <FaPhoneVolume className={styles.icons} />
            <Description
              value={profileData[0].phone}
              color="#192d2f"
              fontSize="18px"
            />
          </div>

          <div className={styles.flexContainer}>
            <MdEmail className={styles.icons} />
            <Description
              value={profileData[0].email}
              color="#192d2f"
              fontSize="18px"
            />
          </div>

          <div className={styles.flexContainer}>
            <FaLinkedinIn
              className={styles.icons}
              style={{ color: "#192d2f", cursor: "pointer" }}
              onClick={() => {
                onClickOpenUrl(profileData[0].linkedin);
              }}
            />

            <FaInstagram
              className={styles.icons}
              style={{ color: "#192d2f", cursor: "pointer" }}
              onClick={() => {
                onClickOpenUrl(profileData[0].instagram);
              }}
            />
          </div>
        </div>

        <div className={styles.formProfile}>
          <Title
            value={language === "spanish" ? "Contactame" : "Contact Me"}
            color="#192d2f"
          />

          <input
            className={styles.formInput}
            placeholder={language === "spanish" ? "Nombre" : "Name"}
            value={formData.name}
            onChange={onChangeFormData}
            name="name"
          />

          <input
            className={styles.formInput}
            placeholder={language === "spanish" ? "Telefono" : "Phone"}
            value={formData.phone}
            onChange={onChangeFormData}
            name="phone"
            type="number"
          />

          <textarea
            style={{ height: "100px" }}
            className={styles.formInput}
            placeholder={language === "spanish" ? "Mensaje" : "Message"}
            value={formData.message}
            onChange={onChangeFormData}
            name="message"
          />

          <button className={styles.formButton} onClick={onSubmit}>
            {loader ? (
              <ClipLoader color="#192d2f" size={15} />
            ) : language === "spanish" ? (
              "Enviar"
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
