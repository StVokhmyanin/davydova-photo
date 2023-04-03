import styled from "styled-components";

const StyledAboutInfo = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  @media (max-width: 1023px) {
    box-sizing: border-box;
    gap: 40px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  img {
    width: 100%;
  }

  p {
    color: rgba(0, 0, 0, 1);
    line-height: 21px;
    font-size: 14px;
    text-align: left;
    font-family: "Playfair Display";
    font-weight: 400;
    font-style: normal;

    @media (max-width: 767px) {
      padding: 0 20px;
    }
  }
`;

export default StyledAboutInfo;
