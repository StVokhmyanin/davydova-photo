import React, { useState, useEffect } from "react";
import { mainApi } from "../utils/Api";

export function useData() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [lastPosts, setLastPosts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      const postData = await mainApi.getPosts();
      const categoriesData = await mainApi.getCategories();
      setPosts(postData.data);
      setCategories(categoriesData.data);
      const getLastPosts = () => {
        setLastPosts(
          categoriesData.data.map((category) => {
            return postData.data.find((post) => post.categories == category.id);
          })
        );
      };
      getLastPosts();
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { posts, categories, lastPosts, loading, error };
}
