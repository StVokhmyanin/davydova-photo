import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategory } from '../../hooks/useCategory';
import PostList from '../../components/PostList/PostList';

const CategoryPage = () => {

  const { slug } = useParams();
  const { category, posts, loading } = useCategory(slug);

  console.log(posts);

  return (
    <div className='category'>
      <h1 className='category__title'>{category.name}</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default CategoryPage;