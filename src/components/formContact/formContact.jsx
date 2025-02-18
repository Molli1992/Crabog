"use client";
import React, { useState } from "react";
import styles from "./formContact.module.css";
import useLanguageStore from "@/zustand/useLanguageStore";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

export default function FormContact() {
  const { ContactTranslations, language } = useLanguageStore();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

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
    setLoader(true);
    try {
      if (
        !formData.name ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.message
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
      } else if (!validateEmail(formData.email)) {
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
      <h1 className={styles.title}>{ContactTranslations.formTitle}</h1>
      <p className={styles.description}>
        {ContactTranslations.formDescription}
      </p>

      <div className={styles.containerInput}>
        <input
          className={styles.formInput}
          placeholder={`${ContactTranslations.formName}`}
          value={formData.name}
          onChange={onChangeFormData}
          name="name"
        />
        <input
          className={styles.formInput}
          placeholder={`${ContactTranslations.formLastName}`}
          value={formData.lastName}
          onChange={onChangeFormData}
          name="lastName"
        />
      </div>

      <div className={styles.containerInput}>
        <input
          className={styles.formInput}
          placeholder={`${ContactTranslations.formEmail}`}
          value={formData.email}
          onChange={onChangeFormData}
          name="email"
        />
        <input
          className={styles.formInput}
          placeholder={`${ContactTranslations.formPhone}`}
          value={formData.phone}
          onChange={onChangeFormData}
          name="phone"
          type="number"
        />
      </div>

      <textarea
        style={{ width: "100%", height: "100px" }}
        className={styles.formInput}
        placeholder={`${ContactTranslations.formMessage}`}
        value={formData.message}
        onChange={onChangeFormData}
        name="message"
      />

      <div className={styles.containerButton}>
        <button className={styles.formButton} onClick={onSubmit}>
          {loader ? (
            <ClipLoader color="#192d2f" size={15} />
          ) : (
            ContactTranslations.formButton
          )}
        </button>
      </div>
    </div>
  );
}
