import React, { useState } from "react";
import styles from "./profile.module.css";
import CreateDialog from "@/components/createDialog/createDialog";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import PrimaryButton from "@/components/buttons/primaryButton";
import PrimaryInput from "@/components/inputs/primaryInput";
import userLoginStore from "@/zustand/userLoginStore";
import Swal from "sweetalert2";

export default function Profile() {
  const { user, setUser } = userLoginStore();
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [dataProfile, setDataProfile] = useState({
    name: user.name,
    email: user.email,
  });

  const onSubmit = async () => {
    if (!dataProfile.name || !dataProfile.email) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!/\S+@\S+\.\S+/.test(dataProfile.email)) {
      Swal.fire({
        title: "Info!",
        text: "Por favor, ingresa un correo electrónico válido!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (
      user.name === dataProfile.name &&
      user.email === dataProfile.email
    ) {
      Swal.fire({
        title: "Info!",
        text: "No has realizado ningun cambio!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoader(true);
      try {
        const profileData = {
          id: encodeURIComponent(user.id),
          name: encodeURIComponent(dataProfile.name),
          email: encodeURIComponent(dataProfile.email),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/put`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Hubo un problema al modificar el usuario"
          );
        }

        const data = await response.json();

        setDataProfile({
          name: data.user.name,
          email: data.user.email,
        });
        setUser(data.user);

        Swal.fire({
          title: "Exito!",
          text: data.message
            ? data.message
            : "Usuario modificado correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoader(false);
      }
    }
  };

  const openModal = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setDataProfile({
      ...dataProfile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.body}>
      <CreateDialog
        Visible={visible}
        TitleModal="Editar Perfil"
        AcceptLabel="Submit"
        LoaderAccept={loader}
        OnSubmit={onSubmit}
        CancelLabel="Cancel"
        OnCancel={() => {
          setVisible(false);
          setDataProfile({
            name: user.name,
            email: user.email,
          });
        }}
        Children={
          <div className={styles.bodyModal}>
            <div className={styles.containerElements}>
              <Description value="Nombre" color="#192d2f" fontSize="18px" />
              <PrimaryInput
                value={dataProfile.name}
                name="name"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>

            <div className={styles.containerElements}>
              <Description value="Email" color="#192d2f" fontSize="18px" />
              <PrimaryInput
                value={dataProfile.email}
                name="email"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>
          </div>
        }
      />

      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Title value="Información de perfil:" color="#192d2f" />
          <PrimaryButton
            Value="Editar Perfil"
            Width="fit-content"
            OnClick={openModal}
          />
        </div>

        <div className={styles.containerInputs}>
          <Description value="Nombre:" color="#192d2f" />
          <input readOnly value={user.name} className={styles.input} />
        </div>

        <div className={styles.containerInputs}>
          <Description value="Email:" color="#192d2f" />
          <input readOnly value={user.email} className={styles.input} />
        </div>
      </div>
    </div>
  );
}
