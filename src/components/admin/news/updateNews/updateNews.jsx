import React, { useState, useMemo, useEffect } from "react";
import styles from "./updateNews.module.css";
import Table from "@/components/table/table";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import PrimaryButton from "@/components/buttons/primaryButton";
import { FaTrashAlt } from "react-icons/fa";
import CreateDialog from "@/components/createDialog/createDialog";
import Description from "@/components/texts/description/description";
import PrimaryInput from "@/components/inputs/primaryInput";

export default function UpdateNews() {
  const [news, setNews] = useState(false);
  const [rows, setRows] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loaderSumbit, setLoaderSubmit] = useState(false);
  const [types, setTypes] = useState(false);
  const [dataNewsUpdate, setDataNewsUpdate] = useState({
    id: "",
    title: "",
    description: "",
    link: "",
    type: "",
    typeName: "",
  });

  const onChange = (e) => {
    setDataNewsUpdate({
      ...dataNewsUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e) => {
    setDataNewsUpdate({
      ...dataNewsUpdate,
      type: e.target.value === "Selecciona un genero" ? "" : e.target.value,
      typeName: e.target.value,
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Titulo",
        accessor: "title",
      },
      {
        Header: "Genero",
        accessor: "type",
      },
      {
        Header: "Editar",
        accessor: "edit",
      },
      {
        Header: "Borrar",
        accessor: "delete",
      },
    ],
    []
  );

  function isValidURL(string) {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (err) {
      return false;
    }
  }

  const newsUpdate = async () => {
    if (
      !dataNewsUpdate.id ||
      !dataNewsUpdate.title ||
      !dataNewsUpdate.description ||
      !dataNewsUpdate.link ||
      !dataNewsUpdate.type
    ) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!isValidURL(dataNewsUpdate.link)) {
      Swal.fire({
        title: "Info!",
        text: "La url del campo link es invalida!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoaderSubmit(true);
      try {
        const putData = {
          id: dataNewsUpdate.id,
          title: encodeURIComponent(dataNewsUpdate.title),
          description: encodeURIComponent(dataNewsUpdate.description),
          link: encodeURIComponent(dataNewsUpdate.link),
          type: dataNewsUpdate.type,
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news/put`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(putData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al modificar el genero"
          );
        }

        setRows((prevRows) =>
          prevRows.map((row) =>
            row.id === dataNewsUpdate.id
              ? {
                  id: dataNewsUpdate.id,
                  title: dataNewsUpdate.title,
                  type: dataNewsUpdate.type,
                  edit: (
                    <PrimaryButton
                      fontSize="18px"
                      OnClick={() => {
                        setDataNewsUpdate({
                          id: dataNewsUpdate.id,
                          title: dataNewsUpdate.title,
                          description: dataNewsUpdate.description,
                          link: dataNewsUpdate.link,
                          type: dataNewsUpdate.type,
                          typeName: dataNewsUpdate.type,
                        });
                        setVisible(true);
                      }}
                      Value="Editar"
                      Width="fit-content"
                    />
                  ),
                  delete: (
                    <FaTrashAlt
                      onClick={() => deleteNews(dataNewsUpdate.id)}
                      style={{ cursor: "pointer" }}
                    />
                  ),
                }
              : row
          )
        );
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.message ? error.message : "Error interno del servidor",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoaderSubmit(false);
        setVisible(false);
        setDataNewsUpdate({
          id: "",
          title: "",
          description: "",
          link: "",
          type: "",
          typeName: "",
        });
      }
    }
  };

  const deleteNews = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Hubo un problema al eliminar el genero"
        );
      }

      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Error interno del servidor",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news/get`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Hubo un problema al obtener los usuarios"
        );
      }

      const data = await response.json();
      let dataRows = [];
      for (let i = 0; i < data.news.length; i++) {
        dataRows.push({
          id: data.news[i].id,
          title: data.news[i].title,
          type: data.news[i].type,
          edit: (
            <PrimaryButton
              fontSize="18px"
              OnClick={() => {
                setDataNewsUpdate({
                  id: data.news[i].id,
                  title: data.news[i].title,
                  description: data.news[i].description,
                  link: data.news[i].link,
                  type: data.news[i].type,
                  typeName: data.news[i].type,
                });
                setVisible(true);
              }}
              Value="Editar"
              Width="fit-content"
            />
          ),
          delete: (
            <FaTrashAlt
              onClick={() => deleteNews(data.news[i].id)}
              style={{ cursor: "pointer" }}
            />
          ),
        });
      }

      setNews(data.news);
      setRows(dataRows);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message ? error.message : "Error interno del servidor",
        icon: "error",
        confirmButtonText: "Ok",
      });
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
    fetchNews();
    fetchTypes();
  }, []);

  return (
    <div className={styles.body}>
      <CreateDialog
        Visible={visible}
        TitleModal="Editar Noticia"
        AcceptLabel="Editar"
        LoaderAccept={loaderSumbit}
        OnSubmit={newsUpdate}
        CancelLabel="Cancel"
        OnCancel={() => {
          setVisible(false);
        }}
        Children={
          <div className={styles.modalContainer}>
            <div style={{ marginBottom: "5px" }}>
              <Description
                value="Por favor completa todos los campos para editar la noticia"
                color="#192d2f"
              />
            </div>

            <div className={styles.containerElements}>
              <Description value="Titulo" color="#192d2f" fontSize="18px" />
              <PrimaryInput
                value={dataNewsUpdate.title}
                onChange={(e) => {
                  onChange(e);
                }}
                name="title"
              />
            </div>

            <div className={styles.containerElements}>
              <Description
                value="Descripción"
                color="#192d2f"
                fontSize="18px"
              />
              <PrimaryInput
                value={dataNewsUpdate.description}
                onChange={(e) => {
                  onChange(e);
                }}
                name="description"
              />
            </div>

            <div className={styles.containerElements}>
              <Description value="Link" color="#192d2f" fontSize="18px" />
              <PrimaryInput
                value={dataNewsUpdate.link}
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
                value={dataNewsUpdate.typeName}
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
          </div>
        }
      />
      {!news ? (
        <ClipLoader color="#192d2f" size={100} />
      ) : (
        <div className={styles.container}>
          <Table columns={columns} data={rows} />
        </div>
      )}
    </div>
  );
}
