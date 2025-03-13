import React, { useState } from "react";
import styles from "./profile.module.css";
import CreateDialog from "@/components/createDialog/createDialog";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const editProfile = async () => {
    console.log("editProfile");
  };

  return (
    <div className={styles.body}>
      <CreateDialog
        Visible={true}
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

      <div className={styles.container}>Profile</div>
    </div>
  );
}
