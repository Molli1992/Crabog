import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import CardServices from "../cards/cardServices/cardServices";
import CardLawyers from "../cards/cardLawyers/cardLawyers";

export default function Slider({ arrayServices, arrayLawyers }) {
  const swiperStyles = {
    "--swiper-navigation-color": arrayLawyers ? "#192d2f" : "#ffffff",
    "--swiper-pagination-color": arrayLawyers ? "#192d2f" : "#ffffff",
  };
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

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        breakpoints={breakpoints}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        style={swiperStyles}
      >
        {arrayServices &&
          arrayServices.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <CardServices data={data} />
              </SwiperSlide>
            );
          })}

        {arrayLawyers &&
          arrayLawyers.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <CardLawyers data={data} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
