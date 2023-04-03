import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import StyledMainSwiper from "./MainSwiper.styled";

const MainSwiper = ({ posts }) => {
  return (
    <StyledMainSwiper>
      <Swiper
        id="swiper"
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        speed={2000}
        slidesPerView={1}
        loop={true}
        effect="fade"
        tag="ul"
        className="styled-swiper"
      >
        {posts.map((post, i) => {
          return (
            <SwiperSlide key={i} tag="li">
              <img
                src={post._embedded["wp:featuredmedia"]["0"]["source_url"]}
                alt={post.title.rendered}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledMainSwiper>
  );
};

export default MainSwiper;
