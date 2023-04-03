import React from "react";
import Banner from "../../components/Banner/Banner";
import StyledAbout from "./About.styled";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import AboutFacts from "../../components/AboutFacts/AboutFacts";
import me from "../../assets/images/me.jpg";
import shootingPhoto from "../../assets/images/shooting.jpg";
import photo from '../../assets/images/1.jpg';
import AboutImportant from "../../components/AboutImportant/AboutImportant";

const About = () => {
  const about = {
    title: "обо мне",
    image: me,
    text: [
      "Меня зовут Таня Давыдова, и я рада приветствовать вас.",
      "Вот уже более 3 лет я снимаю разные истории своих героев.",
    ],
  };

  const shooting = {
    title: "как я снимаю",
    image: shootingPhoto,
    text: [
      'Важно не просто сфотографировать человека по референсу - я стремлюсь раскрыть героя в кадре, показать его "Я", характер и внутренний мир.',
    ],
  };



  return (
    <StyledAbout>
      <Banner props={about} />
      <h3>Позвольте рассказать Вашу историю.</h3>
      <h4>
        Мне нравится переживать жизнь человека через объектив, показывать его
        эмоции, внутреннее состояние. 
      </h4>
      <AboutInfo />
      <AboutFacts />
      <Banner props={shooting} />
      <h3>Вещи, которые важно знать</h3>
      <AboutImportant />
    </StyledAbout>
  );
};

export default About;
