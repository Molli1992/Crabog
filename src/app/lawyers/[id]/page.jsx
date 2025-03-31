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
import toastStore from "@/zustand/toastStore";

export default function LawyersProfile() {
  const { setToast, clearToast } = toastStore();
  const { language } = useLanguageStore();
  const params = useParams();

  const arrayData = language === "spanish" ? arrayLawyersSpanish : arrayLawyers;
  const profileData = arrayData.filter((lawyer) => {
    return lawyer.id === params.id;
  });

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
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
  };

  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    if (
      !formData.clientName ||
      !formData.clientEmail ||
      !formData.clientPhone ||
      !formData.clientMessage
    ) {
      Swal.fire({
        title: "Info!",
        text:
          language === "spanish"
            ? "Completar todos los campos"
            : "Complete all fields",
        icon: "info",
        confirmButtonText: "OK",
      });
    } else if (!validateEmail(formData.clientEmail)) {
      Swal.fire({
        title: "Info!",
        text:
          language === "spanish"
            ? "Formato de email incorrecto"
            : "Incorrect email format",
        icon: "info",
        confirmButtonText: "OK",
      });
    } else {
      setLoader(true);
      try {
        const dataClientEmail = {
          lawyerEmail: encodeURIComponent(profileData[0].email),
          clientName: encodeURIComponent(formData.clientName),
          clientEmail: encodeURIComponent(formData.clientEmail),
          clientPhone: encodeURIComponent(formData.clientPhone),
          clientMessage: encodeURIComponent(formData.clientMessage),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/emails/lawyerEmail`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataClientEmail),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || language === "spanish"
              ? "Error enviando mensaje"
              : "Error sending message"
          );
        }

        Swal.fire({
          title: language === "spanish" ? "Exito!" : "Success!",
          text:
            language === "spanish"
              ? "Mensaje enviado correctamente"
              : "Message sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text:
            language === "spanish"
              ? "Error enviando mensaje, intentar luego mas tarde o ponerse en contacto con el servidro. Disculpe las molestias."
              : "Error sending message, please try again later or contact the server. We apologize for the inconvenience.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoader(false);
        setFormData({
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          clientMessage: "",
        });
      }
    }
  };

  const downloadCV = () => {
    try {
      const fileName = profileData[0].document;
      const link = document.createElement("a");
      link.href = fileName;
      link.download = fileName.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setToast({
        visible: true,
        title: language === "spanish" ? "CV" : "Resume",
        description:
          language === "spanish"
            ? "Descargado correctamente"
            : "Downloaded successfully",
      });
    } catch (error) {
      console.log(error);

      setToast({
        visible: true,
        title: language === "spanish" ? "Error" : "Error",
        description:
          language === "spanish"
            ? "Descargando CV"
            : "Downloading Resume",
        error: true,
      });
    } finally {
      setTimeout(() => {
        clearToast();
      }, "5000");
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

                  {selectedItemIndex === index &&
                    Array.isArray(item.desc) &&
                    item.desc.map((descItem) => {
                      return (
                        <div key={`${index}-CV-${descItem.title}`}>
                          <h2 className={styles.serviceTitle}>
                            {descItem.title}
                          </h2>
                          <p className={styles.serviceDescription}>
                            {descItem.desc}
                          </p>
                        </div>
                      );
                    })}

                  {selectedItemIndex === index && !Array.isArray(item.desc) ? (
                    <p className={styles.serviceDescription}>{item.desc}</p>
                  ) : null}
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
            <FaPhoneVolume className={styles.iconsStatic} />
            <Description
              value={profileData[0].phone}
              color="#192d2f"
              fontSize="18px"
            />
          </div>

          <div className={styles.flexContainer}>
            <MdEmail className={styles.iconsStatic} />
            <Description
              value={profileData[0].email}
              color="#192d2f"
              fontSize="18px"
            />
          </div>

          <div className={styles.flexContainer}>
            <button className={styles.resumeButton} onClick={downloadCV}>
              {language === "spanish" ? "Descargar CV" : "Download Resume"}
            </button>

            {profileData[0].linkedin ? (
              <FaLinkedinIn
                className={styles.icons}
                onClick={() => {
                  onClickOpenUrl(profileData[0].linkedin);
                }}
              />
            ) : null}

            {profileData[0].instagram ? (
              <FaInstagram
                className={styles.icons}
                onClick={() => {
                  onClickOpenUrl(profileData[0].instagram);
                }}
              />
            ) : null}
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
            value={formData.clientName}
            onChange={onChangeFormData}
            name="clientName"
          />

          <input
            className={styles.formInput}
            placeholder={language === "spanish" ? "Mail" : "Email"}
            value={formData.clientEmail}
            onChange={onChangeFormData}
            name="clientEmail"
          />

          <input
            className={styles.formInput}
            placeholder={language === "spanish" ? "Telefono" : "Phone"}
            value={formData.clientPhone}
            onChange={onChangeFormData}
            name="clientPhone"
            type="number"
          />

          <textarea
            style={{ height: "100px" }}
            className={styles.formInput}
            placeholder={language === "spanish" ? "Mensaje" : "Message"}
            value={formData.clientMessage}
            onChange={onChangeFormData}
            name="clientMessage"
          />

          <button className={styles.formButton} onClick={onSubmit}>
            {loader ? (
              <ClipLoader color="#ffffff" size={20} />
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
