"use client";
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import Title from "@/components/texts/title/title";

export default function Dashboard() {
  const [userData, setUserData] = useState(false);
  const navigate = useRouter();

  const fetchUser = async (dataParsed) => {
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/users/getUser/${encodeURIComponent(
          dataParsed.id
        )}/${encodeURIComponent(dataParsed.email)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error de validacion de usuario");
      }

      setUserData(dataParsed);
    } catch (error) {
      sessionStorage.removeItem("User/Login/Information");
      navigate.push("/admin/login");
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("User/Login/Information");
    const parsedData = JSON.parse(storedData);
    if (!parsedData) {
      navigate.push("/admin/login");
    } else {
      fetchUser(parsedData);
    }
  }, []);

  if (!userData) {
    return (
      <div
        className={styles.body}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <ClipLoader color="#192d2f" size={100} />
      </div>
    );
  } else {
    return (
      <div className={styles.body}>
        <div className={styles.sideBar}>
          <div>
            <Title value="Noticias" color="#192d2f" />
            <p className={styles.text}>Crear noticia</p>
            <p className={styles.text}>Modificar noticia</p>
            <p className={styles.text}>Eliminar noticia</p>
          </div>

          <div>
            <Title value="Generos" color="#192d2f" />
            <p className={styles.text}>Crear genero</p>
            <p className={styles.text}>Modificar genero</p>
            <p className={styles.text}>Eliminar genero</p>
          </div>

          <div>
            <Title value="Usuario" color="#192d2f" />
            <p className={styles.text}>Modificar usuario</p>
            <p className={styles.text}>Eliminar usuario</p>
          </div>
        </div>

        <div className={styles.container}></div>
      </div>
    );
  }
}
