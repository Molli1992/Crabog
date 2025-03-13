"use client";
import React from "react";
import styles from "./createDialog.module.css";
import PrimaryButton from "../buttons/primaryButton";

export default function CreateDialog({
  Visible,
  Title,
  Children,
  AcceptLabel,
  LoaderAccept,
  OnSubmit,
  CancelLabel,
  LoaderCancel,
  OnCancel,
}) {
  const handleBodyClick = (event) => {
    if (event.target === event.currentTarget) {
      OnCancel();
    }
  };

  if (Visible) {
    return (
      <div className={styles.body} onClick={handleBodyClick}>
        <div className={`${styles.modal}  ${styles.fadeInUp}`}>
          <i className={`${styles.icon} pi pi-times`} onClick={OnCancel} />
          <h1 className={styles.title}>{Title ? Title : "Title"}</h1>

          <div className={styles.container}>{Children}</div>

          <div className={styles.containerButtons}>
            {OnCancel ? (
              <div
                style={{ width: CancelLabel && AcceptLabel ? "50%" : "100%" }}
              >
                <PrimaryButton
                  bgColor="blueviolet"
                  OnClick={() => {
                    OnCancel();
                  }}
                  Loader={LoaderCancel}
                  Value={CancelLabel ? CancelLabel : "Cancel"}
                />
              </div>
            ) : null}

            {OnSubmit ? (
              <div
                style={{ width: CancelLabel && AcceptLabel ? "50%" : "100%" }}
              >
                <PrimaryButton
                  OnClick={() => {
                    OnSubmit();
                  }}
                  Loader={LoaderAccept}
                  Value={AcceptLabel ? AcceptLabel : "Submit"}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
