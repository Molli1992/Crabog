import React, { useState } from "react";
import styles from "./profile.module.css";
import CreateDialog from "@/components/createDialog/createDialog";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const editProfile = async () => {
    console.log("editProfile");
  };

  return (
    <div className={styles.body}>
      <CreateDialog
        Visible={visible}
        Title="Edit Profile"
        AcceptLabel="Submit"
        LoaderAccept={loader}
        OnSubmit={editProfile}
        CancelLabel="Cancel"
        OnCancel={() => {
          setVisible(false);
        }}
        Children={<div></div>}
      />

      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Title value="Información de perfil:" color="#192d2f" />
          
        </div>

        <div className={styles.containerInputs}>
          <Description value="Nombre:" color="#192d2f" />
          <input readOnly value={"Felipe Blaksley"} className={styles.input} />
        </div>

        <div className={styles.containerInputs}>
          <Description value="Email:" color="#192d2f" />
          <input
            readOnly
            value={"felipe.blaksley@hotmail.com"}
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
}
