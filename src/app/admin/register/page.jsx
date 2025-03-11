"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function Register() {
  const navigate = useRouter();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (
      register.name &&
      register.email &&
      register.password &&
      register.repeatPassword
    ) {
      Swal.fire({
        title: "Exito!",
        text: "Te has registrado correctamente!",
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
        <div className={styles.containerImg} />

        <div className={styles.container}>
          <Title value="Registrate" color="#192d2f" fontSize="42px" />

          <div className={styles.containerElements}>
            <Description
              value="Nombre completo"
              color="#192d2f"
              fontSize="18px"
            />
            <input
              value={register.name}
              name="name"
              className={styles.loginInput}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>

          <div className={styles.containerElements}>
            <Description value="Email" color="#192d2f" fontSize="18px" />
            <input
              value={register.email}
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
              value={register.password}
              name="password"
              type="password"
              className={styles.loginInput}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>

          <div className={styles.containerElements}>
            <Description
              value="Repetir contraseña"
              color="#192d2f"
              fontSize="18px"
            />
            <input
              value={register.repeatPassword}
              name="repeatPassword"
              type="password"
              className={styles.loginInput}
              onChange={(e) => {
                onChange(e);
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
    </div>
  );
}
