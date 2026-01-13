"use client";
import React, { useState, useEffect } from "react";
import styles from "./blog.module.css";
import blogImg from "../../../public/news-img/foto-exterior-1.jpg";
import HeroSection from "@/components/heroSection/heroSection";
import useLanguageStore from "@/zustand/useLanguageStore";
import BlogCard from "@/components/cards/blogCard/blogCard";
import { CiSearch } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import {
  TbArrowNarrowRightDashed,
  TbArrowNarrowLeftDashed,
} from "react-icons/tb";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

// t.types

export default function Blog() {
  const router = useRouter();
  const { language } = useLanguageStore();
  const placeholder =
    language === "spanish" ? "Buscar por titulo" : "Search by title";
  const [types, setTypes] = useState(language === "spanish" ? "Todas" : "All");

  const [arrayBlog, setArrayBlog] = useState(false);
  const [arrayTypes, setArrayTypes] = useState(false);
  const [filterArrayBlog, setFilterArrayBlog] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const onClickTypes = (name) => {
    if (name === "Todas" || name === "All") {
      setFilterArrayBlog(arrayBlog);
    } else {
      const filterBlog = arrayBlog.filter((blog) => {
        return blog.type.toLowerCase() === name.toLowerCase();
      });

      setFilterArrayBlog(filterBlog);
    }

    setTypes(name);
    setCurrentPage(1);
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });
  };

  const searchBlog = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filterBlog = arrayBlog.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm)
    );

    setFilterArrayBlog(filterBlog);
    setTypes(language === "spanish" ? "Todas" : "All");
    setCurrentPage(1);
    setValueInput(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  var itemsPerPage;
  var startIndex;
  var endIndex;
  var currentItems;
  var totalPages;

  if (filterArrayBlog) {
    itemsPerPage = 8;
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    currentItems = filterArrayBlog.slice(startIndex, endIndex);
    totalPages = Math.ceil(filterArrayBlog.length / itemsPerPage);
  }

  const onClickCard = async (link, id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news/addView`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Hubo un problema al enviar el email"
        );
      }

      const data = await response.json();

      const updatedArray = arrayBlog.map((item) =>
        item.id === data.news.id ? data.news : item
      );

      const updatedFilterArray = filterArrayBlog.map((item) =>
        item.id === data.news.id ? data.news : item
      );

      setArrayBlog(updatedArray);
      setFilterArrayBlog(updatedFilterArray);
      window.open(link, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news/get`
      );

      const data = await response.json();

      setArrayBlog(data.news);
      setFilterArrayBlog(data.news);

    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message ? error.message : "Error interno del servidor",
        icon: "error",
        confirmButtonText: "OK",
      });

      setArrayBlog([]);
      setFilterArrayBlog([]);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/types/get`
      );

      const data = await response.json();

      setArrayTypes([{ id: 0, name: "Todas" }, ...data.types]);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message ? error.message : "Error interno del servidor",
        icon: "error",
        confirmButtonText: "OK",
      });

      setArrayTypes([]);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchTypes();
  }, []);

  useEffect(() => {
    if (language === "spanish") {
      setTypes("Todas");
    } else {
      setTypes("All");
    }

    if (arrayBlog) {
      setFilterArrayBlog(arrayBlog);
    }

    setValueInput("");
  }, [language]);

  if (!arrayBlog || !arrayTypes || !filterArrayBlog) {
    return (
      <div className={styles.body}>
        <HeroSection
          imgSrc={blogImg}
          title={language === "spanish" ? "Noticias" : "News"}
        />

        <div className={styles.containerLoader}>
          <ClipLoader color="#192d2f" size={100} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={blogImg}
        title={language === "spanish" ? "Noticias" : "News"}
      />
      <div className={styles.container}>
        <div className={styles.conatinerBlog}>
          {currentItems &&
            currentItems.map((data) => {
              return (
                <BlogCard
                  data={data}
                  key={data.id}
                  OnClick={() => {
                    onClickCard(data.link, data.id);
                  }}
                />
              );
            })}

          <div className={styles.pagination}>
            {currentPage === 1 ? null : (
              <TbArrowNarrowLeftDashed
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  window.scrollTo({
                    top: 400,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={styles.icon}
                style={{ left: "0px" }}
              />
            )}

            {currentPage === totalPages ||
              filterArrayBlog.length < 9 ? null : (
              <TbArrowNarrowRightDashed
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  window.scrollTo({
                    top: 400,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={styles.icon}
                style={{ right: "0px" }}
              />
            )}

            {filterArrayBlog.length === 0 ? (
              <div className={styles.nanElementsContainer}>
                <h1 className={styles.titleNanElements}>
                  {language === "spanish"
                    ? "No hay elementos encontrados"
                    : "No items found"}
                </h1>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.conatinerSidebar}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder={placeholder}
              className={styles.inputSearch}
              onChange={(e) => searchBlog(e)}
              value={valueInput}
            />
            <CiSearch className={styles.searchIcon} />
          </div>

          <div className={styles.containerCategories}>
            <h1 className={styles.titleCategories}>
              {language === "spanish" ? "Categorias" : "Categories"}
            </h1>

            {arrayTypes &&
              arrayTypes.map((type) => {
                return (
                  <div className={styles.containerType} key={type.id}>
                    <MdArrowOutward className={styles.iconArrow} />
                    <p
                      className={styles.type}
                      style={{
                        color: types === type.name ? "#cc4643" : "",
                      }}
                      onClick={() => onClickTypes(type.name)}
                    >
                      {type.name}
                    </p>
                  </div>
                );
              })}
          </div>

          <div className={styles.containerCategories}>
            <h1 className={styles.titleCategories}>
              {language === "spanish" ? "Nuestra Esencia" : "Our essence"}
            </h1>

            <p className={styles.aboutUs}>
              {language === "spanish"
                ? "Conformado por profesionales altamente calificados en el ejercicio de la abogacía, el Estudio se destaca por acompañar a sus clientes proveyendo servicios jurídicos confiables y especializados, involucrando en forma permanente a sus Socios y el equipo que cada uno de ellos lidera para proveer soluciones legales prácticas e innovadoras."
                : "Composed of highly qualified professionals in the practice of law, the Firm stands out for accompanying its clients by providing reliable and specialized legal services, permanently involving its Partners and the team that each of them leads to provide practical and innovative legal solutions."}
            </p>

            <button
              className={styles.button}
              onClick={() => router.push("/aboutUs")}
            >
              {language === "spanish" ? "Leer más" : "Read More"}
              <MdArrowOutward className={styles.iconButton} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
