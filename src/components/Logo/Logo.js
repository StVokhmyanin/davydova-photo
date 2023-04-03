import React from "react";
import { NavLink } from "react-router-dom";
import StyledLogo from "./Logo.styled";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <NavLink to={'/'}>
        <img src={logo} alt="фотограф Татьяна Давыдова" />
      </NavLink>
    </StyledLogo>
  );
};

export default Logo;
