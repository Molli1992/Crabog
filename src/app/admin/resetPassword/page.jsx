"use client";
import React, { useState } from "react";
import styles from "./resetPassword.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const navigate = useRouter();
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (email) {
      Swal.fire({
        title: "Revisa tu correo!",
        text: "Te enviamos un email a tu correo para restablecer tu contraseña",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate.push("/admin/login");
      });
    } else {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
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
          <input
            value={email}
            className={styles.loginInput}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.containerButtons}>
          <button
            className={styles.buttonLogin}
            onClick={() => {
              navigate.push("/admin/login");
            }}
            style={{ background: "blueviolet" }}
          >
            Volver
          </button>

          <button
            className={styles.buttonLogin}
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
