import styled from "styled-components";

const StyledAboutFacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding: 40px 0 0 0;

  h2 {
    font-family: 'Playfair';
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
  }

  h3 {
    font-weight: 400;
    font-size: 28px;
  }

  ul {
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 300px);

    @media (max-width: 1023px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 100px;
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 100px;
    }
  }

  h4 {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, .2);
  }

  h5 {
    color: rgba(51, 51, 51, 1);
    line-height: 1.5;
    letter-spacing: 1px;
    font-size: 21px;
    text-align: center;
    font-family: "Playfair Display";
    font-weight: 400;
    font-style: normal;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }

  li {
    padding: 30px 0;
    width: 100%;
  }

  li:nth-child(n):nth-child(-n+3) {
    padding-top: 0;

    @media (max-width: 767px) {
      padding-top: 30px;
    }
  }

  li:nth-child(n+6):nth-child(-n+9) {
    padding-bottom: 0;

    @media (max-width: 767px) {
      padding-bottom: 30px;
    }
  }
`;

export default StyledAboutFacts;
