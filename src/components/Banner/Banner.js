import React from "react";
import { NavLink } from "react-router-dom";
import StyledBanner from "./Banner.styled";

const Banner = ({ props, marginTop }) => {
  const bannerTag = () => {
    if (props.link) {
      return (
        <NavLink to={props.link}>
          <h2>{props.title}</h2>
          {props.text.map((item, i) => {
            return <h3 key={i}>{item}</h3>;
          })}
        </NavLink>
      );
    } else {
      return (
        <div>
          <h2>{props.title}</h2>
          {props.text.map((item, i) => {
            return <h3 key={i}>{item}</h3>;
          })}
        </div>
      );
    }
  };

  return (
    <StyledBanner marginTop={marginTop}>
      {bannerTag()}
      <img src={props.image} alt={props.title} />
    </StyledBanner>
  );
};

export default Banner;
