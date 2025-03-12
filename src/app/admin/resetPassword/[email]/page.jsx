"use client";
import React, { useState } from "react";
import styles from "../resetPassword.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import Swal from "sweetalert2";
import { useRouter, useParams } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function ResetPassword() {
  const navigate = useRouter();
  const params = useParams();
  const [password, setPassword] = useState({
    password: "",
    repeatPassword: "",
  });
  const [loaderSumbit, setLoaderSubmit] = useState(false);

  const onChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    if (!password.password || !password.repeatPassword) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password.password)) {
      Swal.fire({
        title: "Info!",
        text: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (password.password !== password.repeatPassword) {
      Swal.fire({
        title: "Info!",
        text: "Las contraseñas no coinciden!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const dataResetPassword = {
          email: decodeURIComponent(params.email),
          password: encodeURIComponent(password.password),
          repeatPassword: encodeURIComponent(password.email),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/resetPassword`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataResetPassword),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al restablecer la contraseña"
          );
        }

        const data = await response.json();

        Swal.fire({
          title: "Exito!",
          text: data.message
            ? data.message
            : "Contraseña restablecida correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          navigate.push("/admin/login");
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
          <Title value="Nueva contraseña" color="#192d2f" />
          <Description
            value="Por favor ingresa tu nueva contraseña"
            color="#192d2f"
          />
        </div>

        <div className={styles.containerElements}>
          <Description value="Contraseña" color="#192d2f" fontSize="18px" />
          <input
            value={password.password}
            className={styles.loginInput}
            onChange={(e) => {
              onChange(e);
            }}
            type="password"
            name="password"
          />
        </div>

        <div className={styles.containerElements}>
          <Description
            value="Repetir contraseña"
            color="#192d2f"
            fontSize="18px"
          />
          <input
            value={password.repeatPassword}
            className={styles.loginInput}
            onChange={(e) => {
              onChange(e);
            }}
            type="password"
            name="repeatPassword"
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
            Login
          </button>

          <button
            className={styles.buttonLogin}
            onClick={() => {
              onSubmit();
            }}
          >
            {loaderSumbit ? <ClipLoader color="#ffffff" size={30} /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
