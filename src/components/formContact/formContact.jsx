import React, { useState } from "react";
import styles from "./formContact.module.css";
import useLanguageStore from "@/zustand/useLanguageStore";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function FormContact() {
  const { language } = useLanguageStore();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    clientLastName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
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
    if (
      !formData.clientName ||
      !formData.clientLastName ||
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
          clientName: encodeURIComponent(formData.clientName),
          clientLastName: encodeURIComponent(formData.clientLastName),
          clientEmail: encodeURIComponent(formData.clientEmail),
          clientPhone: encodeURIComponent(formData.clientPhone),
          clientMessage: encodeURIComponent(formData.clientMessage),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/emails/contactEmail`,
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
          clientLastName: "",
          clientEmail: "",
          clientPhone: "",
          clientMessage: "",
        });
      }
    }
  };

  return (
    <div className={styles.body}>
      <Title
        value={language === "spanish" ? "Enviar Mensaje" : "Send Message"}
        color="#192d2f"
        fontSize="36px"
      />

      <Description
        value={
          language === "spanish"
            ? "Complete este formulario y nuestros especialistas se comunicarán con usted en breve para una consulta detallada."
            : "Fill out this form and our specialists will contact you shortly for detailed consultation."
        }
        color="#1f242c"
      />

      <div className={styles.containerInput}>
        <input
          className={styles.formInput}
          placeholder={language === "spanish" ? "Nombre" : "Your name"}
          value={formData.clientName}
          onChange={onChangeFormData}
          name="clientName"
        />
        <input
          className={styles.formInput}
          placeholder={language === "spanish" ? "Apellido" : "Your last name"}
          value={formData.clientLastName}
          onChange={onChangeFormData}
          name="clientLastName"
        />
      </div>

      <div className={styles.containerInput}>
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
      </div>

      <textarea
        style={{ width: "100%", height: "100px" }}
        className={styles.formInput}
        placeholder={language === "spanish" ? "Mensaje" : "Message"}
        value={formData.clientMessage}
        onChange={onChangeFormData}
        name="clientMessage"
      />

      <div className={styles.containerButton}>
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
  );
}
