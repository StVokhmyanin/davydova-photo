import React from "react";
import StyledPostList from "./PostList.styled";
import Post from "../Post/Post";

const PostList = ({ posts }) => {

  return (
    <StyledPostList>
      {posts.map((post, i) => {
        return (
          <li key={i}>
            <Post post={post} />
          </li>
        );
      })}
    </StyledPostList>
  );
};

export default PostList;
