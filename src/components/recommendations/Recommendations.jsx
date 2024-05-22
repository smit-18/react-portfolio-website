import React from "react";
import "./recommendations.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Recommendations = () => {
  return (
    <section className="recommendations container section">
      <h2 className="section__title">My peers say</h2>
      <span className="section__subtitle">Recommendations</span>

      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        className="recommendations__container"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="recommendations__card" key={id}>
              <img src={image} alt="" className="recommendations__img" />
              <h3 className="recommendations__name">{title}</h3>
              <p className="recommendations__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recommendations;
