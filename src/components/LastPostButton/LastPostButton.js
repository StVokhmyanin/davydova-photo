import React from "react";
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";
import StyledLastPostButton from "./LastPostButton.styled";

const LastPostButton = ({ lastPost }) => {
  return (
    <StyledLastPostButton>
      <NavLink to={lastPost.link}>
        <h4>{lastPost._embedded["wp:term"]["0"]["0"]["name"]}</h4>
        <h3>{lastPost.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(lastPost.excerpt.rendered)}} />
      </NavLink>
    </StyledLastPostButton>
  );
};

export default LastPostButton;
