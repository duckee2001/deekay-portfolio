import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/me_2.jpg";
import AVTR2 from "../../assets/me_2.jpg";
import AVTR3 from "../../assets/me_2.jpg";
import AVTR4 from "../../assets/me_2.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Huynh Ngoc Duc",
    review:
      "I pledge to work hard to match the salary the company will pay me. I hope I will be able to work here and have the opportunity to stay for a long time in the future.",
  },
  {
    avatar: AVTR2,
    name: "Huynh Ngoc Duc",
    review:
      "I pledge to work hard to match the salary the company will pay me. I hope I will be able to work here and have the opportunity to stay for a long time in the future.",
  },
  {
    avatar: AVTR3,
    name: "Huynh Ngoc Duc",
    review:
      "I pledge to work hard to match the salary the company will pay me. I hope I will be able to work here and have the opportunity to stay for a long time in the future.",
  },
  {
    avatar: AVTR4,
    name: "Huynh Ngoc Duc",
    review:
      "I pledge to work hard to match the salary the company will pay me. I hope I will be able to work here and have the opportunity to stay for a long time in the future.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
