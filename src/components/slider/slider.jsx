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
import TeamCard from "../cards/teamCard/teamCard";
import { ClipLoader } from "react-spinners";

export default function Slider({
  arrayServices,
  arrayLawyers,
  arrayReviews,
  arrayTeam,
  colorWhite,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(false);
  const swiperStyles = {
    "--swiper-navigation-color":
      (!colorWhite && arrayLawyers) ||
      (!colorWhite && arrayReviews) ||
      arrayTeam
        ? "#192d2f"
        : "#ffffff",
    "--swiper-pagination-color":
      (!colorWhite && arrayLawyers) ||
      (!colorWhite && arrayReviews) ||
      arrayTeam
        ? "#192d2f"
        : "#ffffff",
    "--swiper-pagination-bullet-inactive-color":
      (!colorWhite && arrayLawyers) ||
      (!colorWhite && arrayReviews) ||
      arrayTeam
        ? "#192d2f"
        : "#ffffff",
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

  if (arrayTeam) {
    breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1320: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    };
  } else if (arrayServices || arrayTeam) {
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
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          centeredSlides={arrayTeam ? true : false}
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

          {arrayTeam &&
            arrayTeam.map((data, index) => (
              <SwiperSlide
                key={data.id}
                style={{
                  height: "85vh",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TeamCard
                  data={data}
                  height={index === activeIndex ? "80vh" : "60vh"}
                />
              </SwiperSlide>
            ))}
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
