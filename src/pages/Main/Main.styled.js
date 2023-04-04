 import styled from "styled-components";

const StyledMain = styled.section`
font-family: 'Playfair';
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
z-index: 1;

p {
  padding-top: 20px;
  max-width: 600px;
  font-size: 16px;
  text-align: center;
  font-weight: 400;

  @media (max-width: 767px) {
    max-width: 80%;
  }
}

a {
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

.link {
  text-transform: lowercase;
}

blockquote {
  padding-top: 50px;
  max-width: 600px;
  line-height: 24px;
  text-align: center;
}
`

export default StyledMain;