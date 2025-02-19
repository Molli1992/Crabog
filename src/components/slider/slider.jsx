import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import CardServices from "../cards/cardServices/cardServices";

export default function Slider({ arrayServices }) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        breakpoints={{
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
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#ffffff",
          "--swiper-pagination-color": "#ffffff",
        }}
      >
        {arrayServices &&
          arrayServices.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <CardServices data={data} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
