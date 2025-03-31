"use client";
import React, { useEffect, useRef } from "react";
import styles from "./toast.module.css";
import toastStore from "@/zustand/toastStore";
import { FaRegCheckCircle } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

export default function Toast() {
  const toastRef = useRef(null);
  const { toast, clearToast } = toastStore();

  useEffect(() => {
    if (toast.visible) {
      const handleClickOutside = (event) => {
        if (toastRef.current && !toastRef.current.contains(event.target)) {
          clearToast();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [toast.visible]);

  if (toast.visible) {
    return (
      <div className={`${styles.body} ${styles.fadeInUp}`} ref={toastRef}>
        <div className={styles.container}>
          <div className={styles.containerTitle}>
            {toast.error ? (
              <CgCloseO className={styles.icons} />
            ) : (
              <FaRegCheckCircle className={styles.icons} />
            )}
            <h1 className={styles.title}>{toast.title}</h1>
          </div>

          <IoMdClose
            className={styles.icons}
            style={{ cursor: "pointer" }}
            onClick={() => clearToast()}
          />
        </div>

        <p className={styles.description}>{toast.description}</p>
      </div>
    );
  } else {
    return null;
  }
}