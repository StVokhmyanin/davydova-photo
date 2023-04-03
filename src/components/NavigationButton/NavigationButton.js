import React from "react";
import { NavLink } from "react-router-dom";
import StyledNavigationButton from "./NavigationButton.styled";

const NavigationButton = ({ slug, name }) => {
  return (
    <StyledNavigationButton>
      <NavLink to={`/${slug}`}>{name}</NavLink>
    </StyledNavigationButton>
  );
};

export default NavigationButton;
