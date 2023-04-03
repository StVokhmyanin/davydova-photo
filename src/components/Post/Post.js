import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledPost from './Post.styled';

const Post = ({post}) => {
  return (
    <StyledPost>
      <NavLink to={post.link}>
        <img src={post._embedded['wp:featuredmedia']['0']['source_url']} alt={post.title.rendered} />
      </NavLink>
    </StyledPost>
  );
};

export default Post;