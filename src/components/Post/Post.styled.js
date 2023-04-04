import styled from "styled-components";

const StyledPost = styled.div`
display: block;
width: 100%;
height: 410px;
transition: all .3s linear;

:hover {
  opacity: .6;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export default StyledPost;