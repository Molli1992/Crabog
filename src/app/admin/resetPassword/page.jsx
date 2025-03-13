"use client";
import React, { useState } from "react";
import styles from "./resetPassword.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/buttons/primaryButton";
import PrimaryInput from "@/components/inputs/primaryInput";

export default function ResetPassword() {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [loaderSumbit, setLoaderSubmit] = useState(false);

  const onSubmit = async () => {
    if (!email) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const dataEmail = {
          userEmail: encodeURIComponent(email),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/emails/resetPassword`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataEmail),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al enviar el email"
          );
        }

        const data = await response.json();

        Swal.fire({
          title: "Revisa tu correo!",
          text: data.message
            ? data.message
            : `Te enviamos un email a ${email} para restablecer tu contraseña`,
          icon: "success",
          confirmButtonText: "Ok",
        });
      } catch (error) {
        Swal.fire({
          title: "Info!",
          text: error.message ? error.message : "Error interno del servidor",
          icon: "info",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoaderSubmit(false);
        setEmail("");
      }
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <div
          className={styles.containerElements}
          style={{ textAlign: "center" }}
        >
          <Title value="Restablecer contraseña" color="#192d2f" />
          <Description
            value="Por favor ingresa tu email para restablecer tu contraseña"
            color="#192d2f"
          />
        </div>

        <div className={styles.containerElements}>
          <Description value="Email" color="#192d2f" fontSize="18px" />
          <PrimaryInput
            value={email}
            className={styles.loginInput}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.containerButtons}>
          <PrimaryButton
            OnClick={() => {
              navigate.push("/admin/login");
            }}
            Value="Volver"
            bgColor="blueviolet"
          />

          <PrimaryButton
            OnClick={() => {
              onSubmit();
            }}
            Value="Enviar"
            Loader={loaderSumbit}
          />
        </div>
      </div>
    </div>
  );
}
