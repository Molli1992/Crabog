"use client";
import React, { useState, useEffect } from "react";
import styles from "./blog.module.css";
import blogImg from "../../../public/blog-img.jpg";
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

export default function Blog() {
  const router = useRouter();
  const { language } = useLanguageStore();
  const placeholder =
    language === "spanish" ? "Buscar por titulo" : "Search by title";
  const [types, setTypes] = useState(language === "spanish" ? "Todas" : "All");

  useEffect(() => {
    if (language === "spanish") {
      setTypes("Todas");
      setFilterArrayBlog(dataBlogCastellano);
    } else {
      setTypes("All");
      setFilterArrayBlog(dataBlog);
    }
    setValueInput("");
  }, [language]);

  const dataBlog = [
    {
      id: "blog-1",
      link: "https://www.linkedin.com/feed/",
      type: "ATTORNEY",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-2",
      link: "https://www.linkedin.com/feed/",
      type: "COURT",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-3",
      link: "https://www.linkedin.com/feed/",
      type: "CRIMINAL",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-4",
      link: "https://www.linkedin.com/feed/",
      type: "INDEPENDENCE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-5",
      link: "https://www.linkedin.com/feed/",
      type: "JUSTICE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-6",
      link: "https://www.linkedin.com/feed/",
      type: "LAW",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-7",
      link: "https://www.linkedin.com/feed/",
      type: "SCIENCE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-8",
      link: "https://www.linkedin.com/feed/",
      type: "SCIENCE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-9",
      link: "https://www.linkedin.com/feed/",
      type: "SCIENCE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-10",
      link: "https://www.linkedin.com/feed/",
      type: "SCIENCE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
    {
      id: "blog-11",
      link: "https://www.linkedin.com/feed/",
      type: "SCIENCE",
      date: "MAY 19, 2021",
      views: 243,
      title: "The Impact of Technology on the Legal System",
      desc: "Law and justice are fundamental pillars of society. They govern how we interact with one another and ensure that everyone is treated fairly and equally. However, the legal system is often complex and difficult to navigate, leading to a lack of access to justice for many. In this article, we’ll explore the importance of law and justice, how the legal system works, and what can be done to improve access to justice for all. “Equal justice under law is not merely a caption on the facade of the Supreme Court …",
    },
  ];

  const dataBlogCastellano = [
    {
      id: "blog-1",
      link: "https://www.linkedin.com/feed/",
      type: "ABOGADOS",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-2",
      link: "https://www.linkedin.com/feed/",
      type: "TRIBUNAL",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-3",
      link: "https://www.linkedin.com/feed/",
      type: "CRIMINAL",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-4",
      link: "https://www.linkedin.com/feed/",
      type: "INDEPENDENCIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-5",
      link: "https://www.linkedin.com/feed/",
      type: "JUSTICIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-6",
      link: "https://www.linkedin.com/feed/",
      type: "DERECHO",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-7",
      link: "https://www.linkedin.com/feed/",
      type: "CIENCIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-8",
      link: "https://www.linkedin.com/feed/",
      type: "CIENCIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-9",
      link: "https://www.linkedin.com/feed/",
      type: "CIENCIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-10",
      link: "https://www.linkedin.com/feed/",
      type: "CIENCIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
    {
      id: "blog-11",
      link: "https://www.linkedin.com/feed/",
      type: "CIENCIA",
      date: "19 MAYO 2021",
      views: 243,
      title: "El Impacto de la Tecnología en el Sistema Legal",
      desc: "El derecho y la justicia son pilares fundamentales de la sociedad. Regulan cómo interactuamos entre nosotros y garantizan que todos sean tratados de manera justa e igualitaria. Sin embargo, el sistema legal suele ser complejo y difícil de navegar, lo que genera una falta de acceso a la justicia para muchos. En este artículo, exploraremos la importancia del derecho y la justicia, cómo funciona el sistema legal y qué se puede hacer para mejorar el acceso a la justicia para todos. 'La justicia igualitaria bajo la ley no es solo un lema en la fachada de la Corte Suprema...'",
    },
  ];

  const dataTypes = [
    { name: "All", id: "type-1" },
    { name: "Attorney", id: "type-2" },
    { name: "Court", id: "type-3" },
    { name: "Criminal", id: "type-4" },
    { name: "Independence", id: "type-5" },
    { name: "Justice", id: "type-6" },
    { name: "Law", id: "type-7" },
    { name: "Science", id: "type-8" },
  ];

  const dataCastellano = [
    { name: "Todas", id: "type-1" },
    { name: "Abogados", id: "type-2" },
    { name: "Tribunal", id: "type-3" },
    { name: "Criminal", id: "type-4" },
    { name: "Independencia", id: "type-5" },
    { name: "Justicia", id: "type-6" },
    { name: "Derecho", id: "type-7" },
    { name: "Ciencia", id: "type81" },
  ];

  const arrayBlog = language === "spanish" ? dataBlogCastellano : dataBlog;
  const arrayTypes = language === "spanish" ? dataCastellano : dataTypes;
  const [filterArrayBlog, setFilterArrayBlog] = useState(arrayBlog);
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
    window.scroll(0, 400);
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

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filterArrayBlog.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterArrayBlog.length / itemsPerPage);

  return (
    <div className={styles.body}>
      <HeroSection
        imgSrc={blogImg}
        title={language === "spanish" ? "Foro" : "Blog"}
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
                    window.open(data.link, "_blank");
                  }}
                />
              );
            })}

          <div className={styles.pagination}>
            {currentPage === 1 ? null : (
              <TbArrowNarrowLeftDashed
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  window.scroll(0, 400);
                }}
                className={styles.icon}
                style={{ left: "0px" }}
              />
            )}

            {currentPage === totalPages || filterArrayBlog.length < 9 ? null : (
              <TbArrowNarrowRightDashed
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  window.scroll(0, 400);
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
                        color: types === type.name ? "#b79e63" : "",
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
              {language === "spanish" ? "Nosotros" : "About Us"}
            </h1>

            <p className={styles.aboutUs}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate omnis quaerat, ipsum dolores rem quos fugit totam
              reprehenderit, commodi porro corrupti cupiditate error, optio
              nostrum repellendus tempora! Corporis, ratione aliquid!
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
