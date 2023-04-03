import React from "react";
import { NavLink } from "react-router-dom";
import StyledPostList from "./PostList.styled";
import Post from "../Post/Post";
import StyledCategoryList from "../CategoryList/CategoryList.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import StyledMainSwiper from "../MainSwiper/MainSwiper.styled";

const PostList = ({ posts, categories }) => {

  return (
    <>
      <StyledCategoryList
        maxWidth={"900px"}
        paddingTop={"100px"}
        justifyContent={"space-evenly"}
      >
        <StyledMainSwiper height={'auto'}>
          <Swiper
            id="swiper-categories"
            modules={[EffectFade, Autoplay, Pagination]}
            // autoplay={{
            //   delay: 2000,
            // }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' + className + '">' + (categories[index]['name']) + "</span>"
                );
              },
            }}
            speed={2000}
            slidesPerView={1}
            effect="fade"
          >
            <div className="swiper-pagination"></div>
            {categories.map((category, i) => {
              const postsCategory = posts.filter(post => post.categories.find(c => c == category.id));
              console.log(category.name, postsCategory);
              return (
                <SwiperSlide key={i} tag="li">
                  <StyledPostList>
                    {postsCategory.map((post, i) => {
                      return (
                        <li key={i}>
                          <Post post={post} />
                        </li>
                      );
                    })}
                  </StyledPostList>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </StyledMainSwiper>
      </StyledCategoryList>

      <h2>Мои Работы</h2>
      <NavLink to={"/portfolio"}>Посмотреть портфолио</NavLink>
    </>
  );
};

export default PostList;
