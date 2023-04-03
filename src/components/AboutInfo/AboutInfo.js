import React from "react";
import StyledAboutInfo from "./AboutInfo.styled";
import me from "../../assets/images/me2.jpg";

const AboutInfo = () => {
  return (
    <StyledAboutInfo>
      <img src={me} alt="Татьяна Давыдова" />
      <p>
      Меня зовут Таня Давыдова, я профессиональный фотограф из Санкт-Петербурга.
      Вот уже более 3 лет я снимаю разные истории своих героев.
      </p>
    </StyledAboutInfo>
  );
};

export default AboutInfo;
