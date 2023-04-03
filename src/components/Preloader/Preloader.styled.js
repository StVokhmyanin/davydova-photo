import styled from "styled-components";

const StyledPreloader = styled.div`
  z-index: 100;
  position: absolute;
  top: 135px;
  width: 100%;
  height: 100%;

  .center {
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 1;
    animation: center 2.1s linear;
  }

  @keyframes center {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 100%;
    }
    51% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }

  .left {
    position: absolute;
    width: 60%;
    transform: translateX(-110%);
    height: 100%;
    background-color: #909090;
    animation: left 1.1s ease-in-out;
  }

  .right {
    position: absolute;
    transform: translateX(110%);
    right: 0;
    width: 60%;
    height: 100%;
    background-color: #909090;
    animation: right 1.1s ease-in-out;
  }

  @keyframes left {
    0% {
      left: 0%;
    }
    40% {
      left: 60%;
    }
    60% {
      left: 60%;
    }
    100% {
      left: 0%;
    }
  }

  @keyframes right {
    0% {
      right: 0%;
    }
    40% {
      right: 60%;
    }
    60% {
      right: 60%;
    }
    100% {
      right: 0%;
    }
  }
`;

export default StyledPreloader;
