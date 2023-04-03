import styled from "styled-components";

const StyledMainSwiper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box;
  height: ${props => props.height || '100vh'};
  position: relative;
  padding-bottom: 50px;

  .styled-swiper {
    margin: 0;
    height: 100%;
  }

  #swiper-categories {
    display: flex;
    flex-direction: column-reverse;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 25% 25%;
  }

  .swiper-pagination {
    position: static;
    display: flex;
    justify-content: space-between;
    column-gap: 30px;

    @media (max-width: 1023px) {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }

  .swiper-pagination-bullet {
    width: auto;
    border: none;
    height: 30px;
    background: none;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    transition: all 0.2s linear;
  }
  
  .swiper-pagination-bullet-active {
    color: #000;
    font-weight: bold;
  }
`;

export default StyledMainSwiper;
