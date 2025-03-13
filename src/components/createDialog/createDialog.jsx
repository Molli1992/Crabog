"use client";
import React from "react";
import styles from "./createDialog.module.css";
import { Button } from "primereact/button";

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
                <Button
                  className={styles.button}
                  style={{ backgroundColor: "blueviolet" }}
                  OnClick={() => {
                    OnCancel();
                  }}
                  loading={LoaderCancel}
                >
                  {CancelLabel ? CancelLabel : "Cancel"}
                </Button>
              </div>
            ) : null}

            {OnSubmit ? (
              <div
                style={{ width: CancelLabel && AcceptLabel ? "50%" : "100%" }}
              >
                <Button
                  className={styles.button}
                  OnClick={() => {
                    OnSubmit();
                  }}
                  loading={LoaderAccept}
                >
                  {AcceptLabel ? AcceptLabel : "Submit"}
                </Button>
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
