import React, { useState } from "react";
import styles from "./createTypes.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import PrimaryInput from "@/components/inputs/primaryInput";
import PrimaryButton from "@/components/buttons/primaryButton";
import Swal from "sweetalert2";

export default function CreateTypes() {
  const [typeName, setTypeName] = useState("");
  const [loaderSumbit, setLoaderSubmit] = useState(false);

  const onSubmit = async () => {
    if (!typeName) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const dataTypes = {
          name: encodeURIComponent(typeName),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/types/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataTypes),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al crear el genero"
          );
        }

        const data = await response.json();

        Swal.fire({
          title: "Exito!",
          text: data.message ? data.message : "Genero creado correctamente",
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
        setTypeName("");
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
          <Title value="Crear nuevo genero" color="#192d2f" />
          <p className={styles.text}>
            Por favor ingresa el nombre del nuevo tipo de genero que quieres
            agregar para las noticias
          </p>
        </div>

        <div className={styles.containerElements}>
          <Description value="Nombre" color="#192d2f" fontSize="18px" />
          <PrimaryInput
            value={typeName}
            onChange={(e) => {
              setTypeName(e.target.value);
            }}
          />
        </div>

        <div className={styles.containerButtons}>
          <PrimaryButton
            OnClick={() => {
              onSubmit();
            }}
            Value="Crear"
            Loader={loaderSumbit}
          />
        </div>
      </div>
    </div>
  );
}
