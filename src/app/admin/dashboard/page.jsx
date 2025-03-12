"use client";
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function Dashboard() {
  const [userData, setUserData] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const storedData = sessionStorage.getItem("User/Login/Information");
    console.log(storedData);
    if (!storedData) {
      navigate.push("/admin/login");
    } else {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  console.log(userData);

  if (!userData) {
    return (
      <div className={styles.body}>
        <ClipLoader color="#192d2f" size={100} />
      </div>
    );
  } else {
    return (
      <div className={styles.body}>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
