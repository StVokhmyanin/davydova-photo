import React, { useState, useEffect } from 'react';
import { mainApi } from '../utils/Api';

export function useCategory(slug) {

  const [category, setCategory] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  const getData = async () => {
    setLoading(true);
    try {
      const categoryData = await mainApi.getCategory(slug);
      setCategory(categoryData.data['0']);
      const categoryPosts = await mainApi.getCategoryPosts(categoryData.data['0'].id);
      setPosts(categoryPosts.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [slug]);

  return { category, posts, loading, error };
}