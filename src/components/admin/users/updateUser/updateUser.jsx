import React, { useState, useMemo, useEffect } from "react";
import styles from "./updateUser.module.css";
import Table from "@/components/table/table";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import Switch from "@/components/inputs/switch/InputSwitch";
import { FaTrashAlt } from "react-icons/fa";

export default function UpdateUsers() {
  const [users, setUsers] = useState(false);
  const [rows, setRows] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Mail",
        accessor: "email",
      },
      {
        Header: "Activo",
        accessor: "active",
      },
      {
        Header: "Borrar",
        accessor: "delete",
      },
    ],
    []
  );

  const activeUser = async (code, active) => {
    try {
      const putData = {
        code: encodeURIComponent(code),
        isActive: active === 0 ? true : false,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/put`,
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
          errorData.message || "Hubo un problema al modificar el usuario"
        );
      }

      const data = await response.json();

      setRows((prevRows) =>
        prevRows.map((row) =>
          row.code === code
            ? {
                ...row,
                active: (
                  <Switch
                    Checked={data.user.isActive === 0 ? false : true}
                    OnChange={() =>
                      activeUser(data.user.code, data.user.isActive)
                    }
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
    }
  };

  const deleteUser = async (code) => {
    try {
      const deleteData = {
        code: encodeURIComponent(code),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(deleteData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Hubo un problema al eliminar el usuario"
        );
      }

      setRows((prevRows) => prevRows.filter((row) => row.code !== code));
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Error interno del servidor",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/getAllUser`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Hubo un problema al obtener los usuarios"
        );
      }

      const data = await response.json();
      let dataRows = [];
      for (let i = 0; i < data.users.length; i++) {
        dataRows.push({
          code: data.users[i].code,
          name: data.users[i].name,
          email: data.users[i].email,
          active: (
            <Switch
              Checked={data.users[i].isActive === 0 ? false : true}
              OnChange={() =>
                activeUser(data.users[i].code, data.users[i].isActive)
              }
            />
          ),
          delete: (
            <FaTrashAlt
              onClick={() => deleteUser(data.users[i].code)}
              style={{ cursor: "pointer" }}
            />
          ),
        });
      }

      setUsers(data.users);
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
    fetchUsers();
  }, []);

  return (
    <div className={styles.body}>
      {!users ? (
        <ClipLoader color="#192d2f" size={100} />
      ) : (
        <div className={styles.container}>
          <Table columns={columns} data={rows} />
        </div>
      )}
    </div>
  );
}
