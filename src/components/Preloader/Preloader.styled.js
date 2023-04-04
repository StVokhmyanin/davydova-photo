import styled from "styled-components";

const StyledPreloader = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  animation: open 1s linear;
  background: #fff;

  @keyframes open {
    0%: {
      opacity: 1;
    }

    100%: {
      opacity: 0;
    }
  }
`;

export default StyledPreloader;
