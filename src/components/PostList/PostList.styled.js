import styled from "styled-components";

const StyledPostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 305px);
  grid-template-rows: repeat(2, max-content);
  gap: 25px;

  li:nth-child(n + 7) {
    display: none;
  }

  @media (max-width: 1023px) {
    padding: 30px 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, max-content);
    gap: 50px;

    li:nth-child(n + 5) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    li:nth-child(n + 4) {
      display: none;
    }
  }
`;

export default StyledPostList;
