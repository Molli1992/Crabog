"use client";
import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import CardServices from "../cards/cardServices/cardServices";
import CardLawyers from "../cards/cardLawyers/cardLawyers";
import CardReviews from "../cards/cardReviews/cardReviews";
import { ClipLoader } from "react-spinners";

export default function Slider({ arrayServices, arrayLawyers, arrayReviews }) {
  const [screenWidth, setScreenWidth] = useState(false);
  const swiperStyles = {
    "--swiper-navigation-color":
      arrayLawyers || arrayReviews ? "#192d2f" : "#ffffff",
    "--swiper-pagination-color":
      arrayLawyers || arrayReviews ? "#192d2f" : "#ffffff",
  };

  useEffect(() => {
    if (!screenWidth) {
      setScreenWidth(window.innerWidth);
    } else {
      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  let breakpoints;

  if (arrayServices) {
    breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    };
  } else if (arrayLawyers) {
    breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 45,
      },
    };
  }

  if (screenWidth) {
    return (
      <div className={styles.sliderContainer}>
        <Swiper
          breakpoints={breakpoints}
          navigation={
            screenWidth && screenWidth <= 850 && arrayReviews ? false : true
          }
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          style={swiperStyles}
        >
          {arrayServices &&
            arrayServices.map((data) => {
              return (
                <SwiperSlide key={data.id} className={styles.centeredSlide}>
                  <CardServices data={data} />
                </SwiperSlide>
              );
            })}

          {arrayLawyers &&
            arrayLawyers.map((data) => {
              return (
                <SwiperSlide key={data.id} className={styles.centeredSlide}>
                  <CardLawyers data={data} />
                </SwiperSlide>
              );
            })}

          {arrayReviews &&
            arrayReviews.map((data) => {
              return (
                <SwiperSlide key={data.id} className={styles.centeredSlide}>
                  <CardReviews data={data} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    );
  } else {
    return (
      <div className={styles.containerLoader}>
        <ClipLoader color="#192d2f" size={100} />
      </div>
    );
  }
}
