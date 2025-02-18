"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import logoCrabog from "../../../public/logo_crabog.png";
import flagArgentina from "../../../public/flag-Argentina.png";
import flagGranBretaña from "../../../public/flag-Gran-Bretaña.png";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, headerTranslations } = useLanguageStore();
  const [openMenu, setOpenMenu] = useState(false);

  const onClickOpenUrl = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={styles.body}
      style={{
        backgroundColor:
          scrolling || pathname !== "/" || openMenu ? "#2e2e2e" : "transparent",
        borderBottom:
          scrolling || pathname !== "/" || openMenu ? "none" : "1px solid gray",
      }}
    >
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
          <Image src={logoCrabog} alt="Logo" className={styles.whiteImage} />
        </Link>
      </div>

      <div
        className={styles.container}
        style={{ width: "calc(100% - 500px)", gap: "50px" }}
      >
        <Link
          href="/"
          className={styles.containerText}
          style={{ color: pathname === "/" ? "#b79e63" : "#ffffff" }}
        >
          <p className={styles.text}>{headerTranslations.home}</p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/aboutUs"
          className={styles.containerText}
          style={{ color: pathname === "/aboutUs" ? "#b79e63" : "#ffffff" }}
        >
          <p className={styles.text}>{headerTranslations.aboutUs}</p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/services"
          className={styles.containerText}
          style={{ color: pathname === "/services" ? "#b79e63" : "#ffffff" }}
        >
          <p className={styles.text}>{headerTranslations.services}</p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/blog"
          className={styles.containerText}
          style={{ color: pathname === "/blog" ? "#b79e63" : "#ffffff" }}
        >
          <p className={styles.text}>{headerTranslations.blog}</p>
          <MdArrowOutward className={styles.text} />
        </Link>

        <Link
          href="/contact"
          className={styles.containerText}
          style={{ color: pathname === "/contact" ? "#b79e63" : "#ffffff" }}
        >
          <p className={styles.text}>{headerTranslations.contacts}</p>
          <MdArrowOutward className={styles.text} />
        </Link>
      </div>

      <div
        className={styles.container}
        style={{ width: "250px", borderLeft: "1px solid gray" }}
      >
        <div
          className={styles.containerIcons}
          style={{ borderRight: "1px solid gray" }}
        >
          <FaLinkedinIn
            className={styles.icons}
            onClick={() => {
              onClickOpenUrl("https://www.linkedin.com/company/cangueiro-ruiz-abogados/");
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
              color: pathname === "/" ? "#b79e63" : "#ffffff",
            }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>{headerTranslations.home}</p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/aboutUs"
            className={styles.containerText}
            style={{ color: pathname === "/aboutUs" ? "#b79e63" : "#ffffff" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>{headerTranslations.aboutUs}</p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/services"
            className={styles.containerText}
            style={{ color: pathname === "/services" ? "#b79e63" : "#ffffff" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>{headerTranslations.services}</p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/blog"
            className={styles.containerText}
            style={{ color: pathname === "/blog" ? "#b79e63" : "#ffffff" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>{headerTranslations.blog}</p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <Link
            href="/contact"
            className={styles.containerText}
            style={{ color: pathname === "/contact" ? "#b79e63" : "#ffffff" }}
            onClick={() => setOpenMenu(false)}
          >
            <p className={styles.textMenu}>{headerTranslations.contacts}</p>
            <MdArrowOutward className={styles.textMenu} />
          </Link>

          <div className={styles.containerSocialNetworks}>
            <FaLinkedinIn
              className={styles.icons}
              onClick={() => {
                onClickOpenUrl("https://www.linkedin.com/company/cangueiro-ruiz-abogados/");
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
