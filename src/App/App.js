import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useData } from "../hooks/useData";
import StyledApp from "./App.styled";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const App = () => {
  const { posts, categories, lastPosts, loading, error } = useData();

  const links = [
    {
      slug: "portfolio",
      name: "portfolio",
    },
    {
      slug: "backstage",
      name: "backstage",
    },
    {
      slug: "me",
      name: "about me",
    },
    {
      slug: "contacts",
      name: "contacts",
    },
  ];

  return (
    <ScrollToTop>
      <StyledApp>
        {loading ? <Preloader /> : ""}
        <Header categories={categories} links={links} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                posts={posts}
                categories={categories}
                lastPosts={lastPosts}
              />
            }
          />
          <Route path="/me" element={<About />} />
        </Routes>
        <Footer categories={categories} links={links} />
      </StyledApp>
    </ScrollToTop>
  );
};

export default App;
