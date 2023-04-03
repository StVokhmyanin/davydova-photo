import React from 'react';
import StyledLastPost from './LastPost.styled';

const LastPost = ({lastPost}) => {

  return (
    <StyledLastPost>
      <img src={lastPost._embedded['wp:featuredmedia']['0']['source_url']} />
    </StyledLastPost>
  );
};

export default LastPost;