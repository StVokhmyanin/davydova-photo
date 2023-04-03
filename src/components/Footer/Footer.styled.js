import styled from "styled-components";

const StyledFooter = styled.footer`
  max-width: 900px;
  width: 100%;
  padding: 100px 0 50px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "links contact"
    "logo logo";
    row-gap: 50px;
  }

  ul {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    @media (max-width: 767px) {
      border: none;
      grid-area: logo;
    }
  }

  a {
    max-width: 200px;
    text-decoration: none;
  }

  h3 {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #000;
  }
`;

export default StyledFooter;
