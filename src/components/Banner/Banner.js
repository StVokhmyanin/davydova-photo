import React from "react";
import { NavLink } from "react-router-dom";
import StyledBanner from "./Banner.styled";

const Banner = ({ props, marginTop }) => {

  const {title, image, text, link} = props;

  const bannerTag = () => {
    if (link) {
      return (
        <NavLink to={link}>
          <h2>{title}</h2>
          {text.map((item, i) => {
            return <h3 key={i}>{item}</h3>;
          })}
        </NavLink>
      );
    } else {
      return (
        <div>
          <h2>{title}</h2>
          {text.map((item, i) => {
            return <h3 key={i}>{item}</h3>;
          })}
        </div>
      );
    }
  };

  return (
    <StyledBanner marginTop={marginTop}>
      {bannerTag()}
      <img src={image} alt={title} />
    </StyledBanner>
  );
};

export default Banner;
