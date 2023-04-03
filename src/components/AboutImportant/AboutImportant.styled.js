import styled from "styled-components";

export const StyledAboutImportant = styled.ul`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media (max-width: 767px) {
    row-gap: 60px;
  }

  li {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content 5px 1fr;
    grid-template-areas:
      "image title"
      "image line"
      "image info";
    justify-items: center;
    column-gap: 60px;
    row-gap: 40px;

    @media (max-width: 1023px) {
      column-gap: 40px;
      row-gap: 30px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-template-rows: min-content min-content 1fr;
      grid-template-areas:
      "title"
      "image"
      "info";
      justify-items: center;

    }
  }

  li:nth-child(2n) {
    grid-template-areas:
      "title image"
      "line image"
      "info image";

    @media (max-width: 767px) {
      grid-template-areas:
      "title"
      "image"
      "info";
    }
  }

  h3 {
    grid-area: title;
    text-align: center;
    font-weight: 400;
    font-size: 28px;

    @media (max-width: 1023px) {
      font-size: 21px;
      line-height: 26px;
    }

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 21px;
    }
  }

  p {
    max-width: 80%;
    letter-spacing: 0.5px;
    font-family: "Playfair";
    text-align: center;
    grid-area: info;
    font-size: 14px;
    line-height: 21px;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  div {
    grid-area: line;
    width: 100px;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);

    @media (max-width: 767px) {
      display: none;
    }
  }

  img {
    grid-area: image;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
