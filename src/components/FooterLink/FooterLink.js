import React from "react";
import { NavLink } from "react-router-dom";
import StyledFooterLink from "./FooterLink.styled";

const FooterLink = ({ props }) => {
  return (
    <StyledFooterLink>
      <NavLink
        to={props.slug}
        className={({ isActive }) => (isActive ? 'footer-link__active' : undefined)}
      >
        {props.name}
      </NavLink>
    </StyledFooterLink>
  );
};

export default FooterLink;
