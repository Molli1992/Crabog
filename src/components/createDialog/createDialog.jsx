"use client";
import React from "react";
import styles from "./createDialog.module.css";
import PrimaryButton from "../buttons/primaryButton";
import Title from "../texts/title/title"

export default function CreateDialog({
  Visible,
  TitleModal,
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
          <Title value={TitleModal ? TitleModal : "Title"} color="#192d2f" />

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
