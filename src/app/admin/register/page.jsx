"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import { ClipLoader } from "react-spinners";

export default function Register() {
  const navigate = useRouter();
  const [loaderSumbit, setLoaderSubmit] = useState(false);
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

  const onSubmit = async () => {
    if (
      !register.name ||
      !register.email ||
      !register.password ||
      !register.repeatPassword
    ) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!/\S+@\S+\.\S+/.test(register.email)) {
      Swal.fire({
        title: "Info!",
        text: "Por favor, ingresa un correo electrónico válido!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(register.password)) {
      Swal.fire({
        title: "Info!",
        text: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (register.password !== register.repeatPassword) {
      Swal.fire({
        title: "Info!",
        text: "Las contraseñas no coinciden!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const dataRegister = {
          name: encodeURIComponent(register.name),
          email: encodeURIComponent(register.email),
          password: encodeURIComponent(register.password),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataRegister),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al registrar el usuario"
          );
        }

        const data = await response.json();

        Swal.fire({
          title: "Exito!",
          text: data.message
            ? data.message
            : "Te has registrado correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          navigate.push("/admin/login");
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.message ? error.message : "Error interno del servidor",
          icon: "error",
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
              {loaderSumbit ? (
                <ClipLoader color="#ffffff" size={30} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
