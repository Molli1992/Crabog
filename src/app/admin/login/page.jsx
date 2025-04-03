"use client";
import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import PrimaryButton from "@/components/buttons/primaryButton";
import PrimaryInput from "@/components/inputs/primaryInput";

export default function Login() {
  const navigate = useRouter();
  const [loaderSumbit, setLoaderSubmit] = useState(false);
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

  const onSubmit = async () => {
    if (!login.email || !login.password) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const dataLogin = {
          email: encodeURIComponent(login.email),
          password: encodeURIComponent(login.password),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/loginUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataLogin),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al logear el usuario"
          );
        }

        const data = await response.json();

        sessionStorage.setItem(
          "User/Login/Information",
          JSON.stringify(data.user)
        );

        Swal.fire({
          title: "Exito!",
          text: data.message ? data.message : "Te has logeado correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          navigate.push("/admin/dashboard");
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

  useEffect(() => {
    const storedData = sessionStorage.getItem("User/Login/Information");
    if (storedData) {
      navigate.push("/admin/dashboard");
    }
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <div className={styles.containerImg} />

        <div className={styles.container}>
          <Title value="Iniciar sesion" color="#192d2f" fontSize="42px" />

          <div className={styles.containerInputs}>
            <div className={styles.containerElements}>
              <Description value="Email" color="#192d2f" fontSize="18px" />
              <PrimaryInput
                value={login.email}
                name="email"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>

            <div className={styles.containerElements}>
              <Description value="Contraseña" color="#192d2f" fontSize="18px" />
              <PrimaryInput
                value={login.password}
                name="password"
                type="password"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>
          </div>

          <PrimaryButton
            OnClick={() => {
              onSubmit();
            }}
            Loader={loaderSumbit}
            Value="Login"
            Width="fit-content"
          />

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
