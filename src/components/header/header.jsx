"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import logoCrabog from "../../../public/logo_crabog.png";
import flagArgentina from "../../../public/header-img/flag-Argentina.png";
import flagGranBretaña from "../../../public/header-img/flag-Gran-Bretaña.png";
import useLanguageStore from "@/zustand/useLanguageStore";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguageStore();
  const [openMenu, setOpenMenu] = useState(false);
  const [showLinksAboutsUs, setShowLinksAboutsUs] = useState(false);
  const [showLinksServices, setShowLinksServices] = useState(false);

  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");
    setOpenMenu(false);
  };

  const onClickFlag = () => {
    if (language === "spanish") {
      setLanguage("english");
    } else {
      setLanguage("spanish");
    }
  };

  const onClickMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.responsiveContainerIcons}>
        <Image
          src={language === "spanish" ? flagGranBretaña : flagArgentina}
          alt="Flag"
          style={{ cursor: "pointer" }}
          onClick={onClickFlag}
          className={styles.responsiveFlag}
        />
      </div>

      <div className={styles.containerLogo}>
        <Link href="/">
          <Image src={logoCrabog} alt="Logo" className={styles.logo} />
        </Link>
      </div>

      <div
        className={styles.container}
        style={{ width: "calc(100% - 500px)", gap: "50px" }}
      >
        <Link
          href="/"
          className={styles.containerText}
          style={{ color: pathname === "/" ? "#cc4643" : "#192d2f" }}
        >
          <p className={styles.text}>
            {language === "spanish" ? "Inicio" : "Home"}
          </p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/aboutUs"
          className={styles.containerText}
          style={{ color: pathname === "/aboutUs" ? "#cc4643" : "#192d2f" }}
        >
          <p className={styles.text}>
            {language === "spanish" ? "Nuestra Esencia" : "Our essence"}
          </p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/team"
          className={styles.containerText}
          style={{ color: pathname === "/team" ? "#cc4643" : "#192d2f" }}
        >
          <p className={styles.text}>
            {language === "spanish" ? "Equipo" : "Team"}
          </p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <div
          className={styles.containerOpenLinks}
          onMouseEnter={() => setShowLinksServices(true)}
          onMouseLeave={() => setShowLinksServices(false)}
        >
          <div
            className={styles.containerText}
            style={{
              cursor: "default",
              color:
                pathname === "/services" || pathname === "/international"
                  ? "#cc4643"
                  : "#192d2f",
            }}
          >
            <p className={styles.text}>
              {language === "spanish" ? "Areas de Practica" : "Practice Areas"}
            </p>
            <MdArrowOutward className={styles.text} />
          </div>

          {showLinksServices && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={styles.opneLinks}
            >
              <Link
                href="/international"
                className={styles.containerText}
                style={{
                  color: pathname === "/international" ? "#cc4643" : "#192d2f",
                }}
              >
                <p className={styles.textLink}>
                  {language === "spanish" ? "Internacional" : "International"}
                </p>
              </Link>

              <Link
                href="/services"
                className={styles.containerText}
                style={{
                  color: pathname === "/services" ? "#cc4643" : "#192d2f",
                }}
              >
                <p className={styles.textLink}>
                  {language === "spanish"
                    ? "Areas de Practica"
                    : "Practice Areas"}
                </p>
              </Link>
            </motion.div>
          )}
        </div>

        <Link
          href="/news"
          className={styles.containerText}
          style={{ color: pathname === "/news" ? "#cc4643" : "#192d2f" }}
        >
          <p className={styles.text}>
            {language === "spanish" ? "Noticias" : "News"}
          </p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/contact"
          className={styles.containerText}
          style={{ color: pathname === "/contact" ? "#cc4643" : "#192d2f" }}
        >
          <p className={styles.text}>
            {language === "spanish" ? "Contacto" : "Contact"}
          </p>
          <MdArrowOutward className={styles.text} />
        </Link>
      </div>

      <div
        className={styles.container}
        style={{ borderLeft: "1px solid gray" }}
      >
        <div
          className={styles.containerIcons}
          style={{ borderRight: "1px solid gray" }}
        >
          <FaWhatsapp
            className={styles.icons}
            onClick={() => {
              onClickOpenUrl("https://wa.me/5491138031129");
            }}
          />
        </div>

        <div
          className={styles.containerIcons}
          style={{ borderRight: "1px solid gray" }}
        >
          <FaLinkedinIn
            className={styles.icons}
            onClick={() => {
              onClickOpenUrl(
                "https://www.linkedin.com/company/cangueiro-ruiz-abogados/"
              );
            }}
          />
        </div>

        <div
          className={styles.containerIcons}
          style={{ borderRight: "1px solid gray" }}
        >
          <FaInstagram
            className={styles.icons}
            onClick={() => {
              onClickOpenUrl("https://www.instagram.com/crabog_/");
            }}
          />
        </div>

        <div className={styles.containerIcons}>
          <Image
            src={language === "spanish" ? flagGranBretaña : flagArgentina}
            alt="Flag"
            width={25}
            height={25}
            style={{ cursor: "pointer" }}
            onClick={onClickFlag}
          />
        </div>
      </div>

      <div className={styles.menu}>
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
        <div className={styles.containerMenu}>
          <Link
            href="/"
            className={styles.containerText}
            style={{
              color: pathname === "/" ? "#cc4643" : "#192d2f",
            }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Inicio" : "Home"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/aboutUs"
            className={styles.containerText}
            style={{ color: pathname === "/aboutUs" ? "#cc4643" : "#192d2f" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Nuestra Esencia" : "Our essence"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/services"
            className={styles.containerText}
            style={{ color: pathname === "/services" ? "#cc4643" : "#192d2f" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Areas de Practica" : "Practice Areas"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/international"
            className={styles.containerText}
            style={{
              color: pathname === "/international" ? "#cc4643" : "#192d2f",
            }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Internacional" : "International"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/team"
            className={styles.containerText}
            style={{ color: pathname === "/team" ? "#cc4643" : "#192d2f" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Equipo" : "Team"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/news"
            className={styles.containerText}
            style={{ color: pathname === "/news" ? "#cc4643" : "#192d2f" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Noticias" : "News"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/contact"
            className={styles.containerText}
            style={{ color: pathname === "/contact" ? "#cc4643" : "#192d2f" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>
              {language === "spanish" ? "Contacto" : "Contact"}
            </p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <div className={styles.containerSocialNetworks}>
            <FaWhatsapp
              className={styles.icons}
              onClick={() => {
                onClickOpenUrl("https://wa.me/5491138031129");
              }}
            />
            <FaLinkedinIn
              className={styles.icons}
              onClick={() => {
                onClickOpenUrl(
                  "https://www.linkedin.com/company/cangueiro-ruiz-abogados/"
                );
              }}
            />
            <FaInstagram
              className={styles.icons}
              onClick={() => {
                onClickOpenUrl("https://www.instagram.com/crabog_/");
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
