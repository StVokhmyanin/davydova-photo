import styled from "styled-components";

const StyledLastPostsList = styled.div`
width: 900px;
padding-top: 100px;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 1023px) {
  width: 100%;
}

.styled-swiper {
  position: relative;
  width: 100%;
  margin: 0;
  height: 100%;
}

p {
  text-transform: uppercase;
  text-align: left;
}

h3 {
  margin: 0;
  font-family: 'Playfair';
  text-transform: uppercase;
  font-size: 38px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
}

ul {
  max-width: 350px;
  width: 100%;
  z-index: 10;
  position: absolute;
  height: calc(100% - 50px);
  top: 50px;
  right: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1023px) {
    max-width: 280px;
  }

  @media (max-width: 767px) {
    background: rgba(255,255,255,0.8);
    padding-left: 20px;
    padding-top: 20px;
    box-sizing: border-box;
    max-width: 250px;
  }

  div:last-of-type {
    border-bottom: none;
  }
 }
`

export default StyledLastPostsList;