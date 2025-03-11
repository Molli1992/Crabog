"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function Login() {
  const navigate = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (login.email && login.password) {
      Swal.fire({
        title: "Exito!",
        text: "Te has logeado correctamente!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate.push("/admin/dashboard");
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
        <div className={styles.containerImg} />

        <div className={styles.container}>
          <Title value="Iniciar sesion" color="#192d2f" fontSize="42px" />

          <div className={styles.containerInputs}>
            <div className={styles.containerElements}>
              <Description value="Email" color="#192d2f" fontSize="18px" />
              <input
                value={login.email}
                name="email"
                className={styles.loginInput}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>

            <div className={styles.containerElements}>
              <Description value="Contraseña" color="#192d2f" fontSize="18px" />
              <input
                value={login.password}
                name="password"
                type="password"
                className={styles.loginInput}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>
          </div>

          <button
            className={styles.buttonLogin}
            onClick={() => {
              onSubmit();
            }}
          >
            Login
          </button>

          <div className={styles.containerElements}>
            <Description
              value="No tenes una cuenta?"
              color="#192d2f"
              fontSize="20px"
            />

            <Link href="/admin/register" className={styles.link}>
              Registrate
            </Link>
          </div>

          <Link href="/admin/resetPassword" className={styles.link2}>
            Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}
