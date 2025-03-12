"use client";
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function Dashboard() {
  const [userData, setUserData] = useState(false);
  const navigate = useRouter();

  const fetchUser = async (dataParsed) => {
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/users/getUser/${encodeURIComponent(
          dataParsed.id
        )}/${encodeURIComponent(dataParsed.email)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error de validacion de usuario");
      }

      setUserData(dataParsed);
    } catch (error) {
      navigate.push("/admin/login");
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("User/Login/Information");
    const parsedData = JSON.parse(storedData);
    if (!parsedData) {
      navigate.push("/admin/login");
    } else {
      fetchUser(parsedData);
    }
  }, []);

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
