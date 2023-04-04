import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MainSwiper from "../../components/MainSwiper/MainSwiper";
import StyledMain from "./Main.styled";
import PostList from "../../components/PostList/PostList";
import Banner from "../../components/Banner/Banner";
import LastPostsList from "../../components/LastPostsList/LastPostsList";
import aboutImage from "../../assets/images/about.jpg";
import pricingImage from "../../assets/images/pricing.jpg";
import { PostsContext, CategoryContext } from "../../App/App";
import CategorySwiper from "../../components/CategorySwiper/CategorySwiper";

const Main = ({ lastPosts }) => {

  const posts = useContext(PostsContext);
  const categories = useContext(CategoryContext);

  const about = {
    link: "me",
    title: "обо мне",
    image: aboutImage,
    text: [
      "Моё вдохновение - люди. Меня вдохновляют мои герои, их истории, которые мне хочется рассказать.",
    ],
  };

  const pricing = {
    link: "pricing",
    title: "pricing",
    image: pricingImage,
    text: [
      "У меня художественное образование, поэтому изображать людей и их настоящие эмоции всегда было моей страстью - то, что действительно приносило и приносит удовольствие!",
    ],
  };

  return (
    <StyledMain>
      <MainSwiper posts={posts} />
      <h3>Позвольте рассказать Вашу историю</h3>
      <p>
        "Творчеству нельзя ставить рамки. Ведь, держа камеру в руках, у тебя
        появляется чудесная возможность "рассказывать" то, что ты видишь"
      </p>
      <CategorySwiper posts={posts} categories={categories} />
      <blockquote>
        «Ничего не происходит, когда вы сидите у себя дома. Я всегда ношу камеру
        с собой в любое время... Я просто снимаю то, что меня интересует в
        текущий момент»
      </blockquote>
      <h4>Эллиот Эрвитт</h4>
      <Banner props={about} marginTop={'100px'}/>
      <LastPostsList lastPosts={lastPosts} />
      <Banner props={pricing} marginTop={'100px'}/>
      <blockquote>
        Важно не просто сфотографировать человека по референсу - я стремлюсь
        раскрыть героя в кадре, показать его реальное "Я", характер и внутренний
        мир.
      </blockquote>
      <a
        className="link"
        href="https://instagram.com/tv.davydova"
        target="_blank"
        rel="noreferrer"
      >
        @tv.davydova
      </a>
    </StyledMain>
  );
};

export default Main;
