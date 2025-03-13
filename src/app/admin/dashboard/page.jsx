"use client";
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import Title from "@/components/texts/title/title";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import userLoginStore from "@/zustand/userLoginStore";
import Profile from "@/components/admin/users/profile/profile";
import UpdateUsers from "@/components/admin/users/updateUser/updateUser";
import PrimaryButton from "@/components/buttons/primaryButton";

export default function Dashboard() {
  const navigate = useRouter();
  const { user, setUser } = userLoginStore();
  const [activeSection, setActiveSection] = useState("Perfil");
  const [openMenu, setOpenMenu] = useState(true);

  const onClickMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  const changeSection = (section) => {
    setActiveSection(section);
    if (window.innerWidth <= 850) {
      setOpenMenu(false);
    }
  };

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

      setUser(dataParsed);
    } catch (error) {
      sessionStorage.removeItem("User/Login/Information");
      setUser(false);
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

  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(window.innerWidth > 850);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!user) {
    return (
      <div
        className={styles.body}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <ClipLoader color="#192d2f" size={100} />
      </div>
    );
  } else {
    return (
      <div className={styles.body}>
        <div
          className={styles.menu}
          style={{ left: openMenu ? " 200px" : "20px" }}
        >
          {!openMenu ? (
            <RxHamburgerMenu
              className={styles.burgerIcon}
              onClick={onClickMenu}
            />
          ) : (
            <RiCloseLargeLine
              className={styles.burgerIcon}
              onClick={onClickMenu}
            />
          )}
        </div>

        {openMenu ? (
          <div className={styles.sideBar}>
            <div>
              <h1 className={styles.title}>Menú</h1>
              <Title value="Noticias" color="#192d2f" />
              <p
                className={styles.text}
                style={{
                  color: activeSection === "Crear noticias" ? "gray" : "",
                }}
                onClick={() => changeSection("Crear noticias")}
              >
                Crear noticias
              </p>
              <p
                className={styles.text}
                style={{
                  color: activeSection === "Modificar noticias" ? "gray" : "",
                }}
                onClick={() => changeSection("Modificar noticias")}
              >
                Tabla de noticias
              </p>
            </div>

            <div>
              <Title value="Generos" color="#192d2f" />
              <p
                className={styles.text}
                style={{
                  color: activeSection === "Crear generos" ? "gray" : "",
                }}
                onClick={() => changeSection("Crear generos")}
              >
                Crear generos
              </p>
              <p
                className={styles.text}
                style={{
                  color: activeSection === "Modificar generos" ? "gray" : "",
                }}
                onClick={() => changeSection("Modificar generos")}
              >
                Tabla de generos
              </p>
            </div>

            <div>
              <Title value="Usuario" color="#192d2f" />
              <p
                className={styles.text}
                style={{ color: activeSection === "Perfil" ? "gray" : "" }}
                onClick={() => changeSection("Perfil")}
              >
                Perfil
              </p>
              <p
                className={styles.text}
                style={{
                  color: activeSection === "Modificar usuarios" ? "gray" : "",
                }}
                onClick={() => changeSection("Modificar usuarios")}
              >
                Tabla de usuarios
              </p>
            </div>

            <PrimaryButton
              OnClick={() => {
                sessionStorage.removeItem("User/Login/Information");
                setUser(false);
                navigate.push("/admin/login");
              }}
              Value="Logout"
              Width="fit-content"
            />
          </div>
        ) : null}

        <div className={styles.container}>
          {activeSection === "Perfil" ? <Profile /> : null}

          {activeSection === "Modificar usuarios" ? <UpdateUsers /> : null}
        </div>
      </div>
    );
  }
}
