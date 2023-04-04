import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useData } from "../hooks/useData";
import StyledApp from "./App.styled";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
export const PostsContext = createContext();
export const CategoryContext = createContext();

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
        <Preloader loading={loading} />
        <CategoryContext.Provider value={categories}>
          <Header categories={categories} links={links} />
          <PostsContext.Provider value={posts}>
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
              <Route path="/category/:slug" element={<CategoryPage />} />
            </Routes>
          </PostsContext.Provider>
          <Footer categories={categories} links={links} />
        </CategoryContext.Provider>
      </StyledApp>
    </ScrollToTop>
  );
};

export default App;
