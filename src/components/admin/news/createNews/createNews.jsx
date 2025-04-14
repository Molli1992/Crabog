import React, { useState, useEffect } from "react";
import styles from "./createNews.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import PrimaryInput from "@/components/inputs/primaryInput";
import PrimaryButton from "@/components/buttons/primaryButton";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

export default function CreateNews() {
  const [types, setTypes] = useState(false);
  const [news, setNews] = useState({
    title: "",
    description: "",
    link: "",
    type: "",
    typeName: "Selecciona un genero",
  });
  const [loaderSumbit, setLoaderSubmit] = useState(false);

  const onChange = (e) => {
    setNews({
      ...news,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e) => {
    setNews({
      ...news,
      type: e.target.value === "Selecciona un genero" ? "" : e.target.value,
      typeName: e.target.value,
    });
  };

  function isValidURL(string) {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (err) {
      return false;
    }
  }

  const onSubmit = async () => {
    if (!news.title || !news.description || !news.link || !news.type) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!isValidURL(news.link)) {
      Swal.fire({
        title: "Info!",
        text: "La url del campo link es invalida!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const dataNews = {
          title: encodeURIComponent(news.title),
          description: encodeURIComponent(news.description),
          link: encodeURIComponent(news.link),
          type: news.type,
          date: new Date().toLocaleString("es-AR", {
            timeZone: "America/Argentina/Buenos_Aires",
          }),
          seen: 0,
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataNews),
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
          text: data.message ? data.message : "Noticia creada correctamente",
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
        setNews({
          title: "",
          description: "",
          link: "",
          type: "",
          typeName: "Selecciona un genero",
        });
      }
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/types/get`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Hubo un problema al obtener los usuarios"
        );
      }

      const data = await response.json();

      setTypes(data.types);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message ? error.message : "Error interno del servidor",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  if (!types) {
    <div className={styles.body}>
      <ClipLoader color="#192d2f" size={100} />
    </div>;
  } else {
    return (
      <div className={styles.body}>
        <div className={styles.form}>
          <div
            className={styles.containerElements}
            style={{ textAlign: "center" }}
          >
            <Title value="Crear nueva noticia" color="#192d2f" />
            <p className={styles.text}>
              Por favor completa todos los campos para crear una nueva noticia
            </p>
          </div>

          <div className={styles.containerElements}>
            <Description value="Titulo" color="#192d2f" fontSize="18px" />
            <PrimaryInput
              value={news.title}
              onChange={(e) => {
                onChange(e);
              }}
              name="title"
            />
          </div>

          <div className={styles.containerElements}>
            <Description value="Descripción" color="#192d2f" fontSize="18px" />
            <PrimaryInput
              value={news.description}
              onChange={(e) => {
                onChange(e);
              }}
              name="description"
            />
          </div>

          <div className={styles.containerElements}>
            <Description value="Link" color="#192d2f" fontSize="18px" />
            <PrimaryInput
              value={news.link}
              onChange={(e) => {
                onChange(e);
              }}
              name="link"
            />
          </div>

          <div className={styles.containerElements}>
            <Description value="Generos" color="#192d2f" fontSize="18px" />
            <select
              className={styles.select}
              onChange={(e) => onChangeSelect(e)}
              value={news.typeName}
            >
              <option className={styles.option}>Selecciona un genero</option>
              {types &&
                types.map((type) => {
                  return (
                    <option key={type.name} className={styles.option}>
                      {type.name}
                    </option>
                  );
                })}
            </select>
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
}
