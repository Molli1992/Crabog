import React, { useState, useMemo, useEffect } from "react";
import styles from "./updateTypes.module.css";
import Table from "@/components/table/table";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import PrimaryButton from "@/components/buttons/primaryButton";
import { FaTrashAlt } from "react-icons/fa";
import CreateDialog from "@/components/createDialog/createDialog";
import Description from "@/components/texts/description/description";
import PrimaryInput from "@/components/inputs/primaryInput";

export default function UpdateTypes() {
  const [types, setTypes] = useState(false);
  const [rows, setRows] = useState([]);
  const [typeID, setTypeID] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loaderSumbit, setLoaderSubmit] = useState(false);
  const [typeName, setTypeName] = useState("");

  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Modificar",
        accessor: "update",
      },
      {
        Header: "Borrar",
        accessor: "delete",
      },
    ],
    []
  );

  const typesUpdate = async () => {
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
        const putData = {
          id: encodeURIComponent(typeID),
          name: encodeURIComponent(typeName),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/types/put`,
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
            row.id === typeID
              ? {
                  ...row,
                  name: typeName,
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
        setTypeName(false);
        setVisible(false);
        setTypeID(false);
      }
    }
  };

  const deleteType = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/types/delete`,
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
      let dataRows = [];
      for (let i = 0; i < data.types.length; i++) {
        dataRows.push({
          id: data.types[i].id,
          name: data.types[i].name,
          update: (
            <PrimaryButton
              Value="Modificar"
              OnClick={() => {
                setTypeID(data.types[i].id);
                setVisible(true);
                setTypeName(data.types[i].name);
              }}
              Width="fit-content"
              fontSize="16px"
            />
          ),
          delete: (
            <FaTrashAlt
              onClick={() => deleteType(data.types[i].id)}
              style={{ cursor: "pointer" }}
            />
          ),
        });
      }

      setTypes(data.types);
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

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div className={styles.body}>
      <CreateDialog
        Visible={visible}
        TitleModal="Editar Genero"
        AcceptLabel="Editar"
        LoaderAccept={loaderSumbit}
        OnSubmit={typesUpdate}
        CancelLabel="Cancel"
        OnCancel={() => {
          setVisible(false);
          setTypeID(false);
        }}
        Children={
          <div className={styles.modalContainer}>
            <div style={{ marginBottom: "20px" }}>
              <Description
                value="Por favor ingresa el nuevo nombre que le quieres asignar al genero"
                color="#192d2f"
              />
            </div>

            <Description value="Nombre" color="#192d2f" fontSize="18px" />
            <PrimaryInput
              value={typeName}
              onChange={(e) => {
                setTypeName(e.target.value);
              }}
            />
          </div>
        }
      />
      {!types ? (
        <ClipLoader color="#192d2f" size={100} />
      ) : (
        <div className={styles.container}>
          <Table columns={columns} data={rows} />
        </div>
      )}
    </div>
  );
}
