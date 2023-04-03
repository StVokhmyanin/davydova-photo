import React from "react";
import StyledLastProjectList from "./LastPostsList.styled";
import LastPost from "../LastPost/LastPost";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import LastPostButton from "../LastPostButton/LastPostButton";

const LastPostsList = ({ lastPosts }) => {
  console.log(lastPosts);
  return (
    <StyledLastProjectList>
      <p>последние работы</p>
      <h3>THE JOURNAL</h3>
      <Swiper
        id="swiper1"
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        speed={2000}
        slidesPerView={1}
        effect="fade"
        tag="div"
        className="styled-swiper"
      >
        {lastPosts.map((lastPost, i) => {
          return (
            <SwiperSlide key={i} tag="li" className="styled-slide">
              <LastPost key={i} lastPost={lastPost} />
            </SwiperSlide>
          );
        })}
        <ul>
          {lastPosts.map((lastPost, i) => {
            return(
              <LastPostButton lastPost={lastPost} key={i} />
            ); 
          })}
        </ul>
      </Swiper>
    </StyledLastProjectList>
  );
};

export default LastPostsList;
