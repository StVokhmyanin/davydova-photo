import React, { useState, useEffect } from "react";
import StyledCategoryList from "../CategoryList/CategoryList.styled";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import NavigationButton from "../NavigationButton/NavigationButton";
import HeaderButton from "../HeaderButton/HeaderButton";
import { useLocation } from "react-router";

const Header = ({ categories, links }) => {

  const { pathname } = useLocation();
  const [activeHeader, setActiveHeader] = useState(false);

  function setHeader() {
    setActiveHeader(!activeHeader);
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setActiveHeader(false);
      }
    });
    return () => document.removeEventListener("keydown", setHeader);
  }, []);

  useEffect(() => {
    setActiveHeader(false);
  }, [pathname]);

  return (
    <>
      <HeaderButton isActive={activeHeader} setIsActive={setHeader} />
      <header className={`header ${activeHeader ? "header_opened" : ""}`}>
        <CategoryList categories={categories} />
        <Logo />
        <StyledCategoryList area="links">
          {links.map((link, i) => {
            return (
              <NavigationButton key={i} slug={link.slug} name={link.name} />
            );
          })}
        </StyledCategoryList>
      </header>
    </>
  );
};

export default Header;
