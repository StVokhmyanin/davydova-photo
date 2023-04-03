import styled from "styled-components";

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  width: 100%;
  z-index: 1;

  h4 {
    max-width: 1000px;
    color: rgba(0, 0, 0, 1);
    line-height: 1.5;
    letter-spacing: 0em;
    font-size: 33px;
    text-align: center;
    font-family: "Playfair";
    font-weight: 400;
    font-style: normal;

    @media (max-width: 1023px) {
      max-width: 70%;
      font-size: 26px;
      line-height: 33px;
    }

    @media (max-width: 767px) {
      max-width: 70%;
      font-size: 21px;
      line-height: 26px;
    }
  }

  h3 {
    font-family: "Playfair";
    font-size: 14px;
  }



`;

export default StyledAbout;
