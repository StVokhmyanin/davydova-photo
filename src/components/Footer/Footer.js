import React, { useContext } from "react";
import StyledFooter from "./Footer.styled";
import FooterLink from "../FooterLink/FooterLink";
import { NavLink } from "react-router-dom";
import { CategoryContext } from "../../App/App";


const Footer = ({ links }) => {

  const categories = useContext(CategoryContext);

  return (
    <StyledFooter>
      <ul>
        <FooterLink props={{ name: "home", slug: "/" }} />
        {categories.map((link, i) => {
          return <FooterLink key={i} props={link} />;
        })}
        {links.map((link, i) => {
          return <FooterLink key={i} props={link} />;
        })}
      </ul>
      <div>
        <NavLink to={"/"}>
          <h3>TATYANA DAVYDOVA</h3>
        </NavLink>
      </div>
      <ul>
        <FooterLink props={{ name: "my-mail@gmail.com", slug: "mailto:my-mail@gmail.com" }} />
        <FooterLink props={{ name: "+7 999 123 45 67", slug: "tel:+79991234567" }} />
        <FooterLink props={{ name: "@tv.davydova", slug: "https://instagram.com/tv.davydova" }} />
      </ul>
    </StyledFooter>
  );
};

export default Footer;
