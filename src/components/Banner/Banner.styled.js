import styled from "styled-components";

const StyledBanner = styled.div`
position: relative;
width: 100%;
max-width: none;
height: 100vh;
max-height: 650px;
background-color: #000;
display: flex;
flex-direction: column;
margin-top: ${props => props.marginTop || '0px'};

a,
div {
  font-family: 'Playfair';
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  color: #fff;
  transition: all .4s linear;
}

a:hover {
  background-color: rgba(0, 0, 0, 0.2);

}

h2 {
  padding-bottom: 50px;
  font-family: 'Playfair';
  z-index: 10;
  color: #fff;
  max-width: 800px;
  text-transform: uppercase;
  text-align: center;
  font-size: 60px;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: left;

  @media (max-width: 1023px) {
    font-size: 48px;
  }

  @media (max-width: 767) {
    font-size: 40px;
  }
}

h3 {
  font-family: 'Playfair';
  max-width: 600px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: .5px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 28px;
  z-index: 10;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    max-width: 80%;
  }
}

p {
  padding-top: 100px;
}

img {
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
export default StyledBanner;