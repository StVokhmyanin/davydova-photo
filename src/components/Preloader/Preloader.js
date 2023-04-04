import React from "react";
import StyledPreloader from "./Preloader.styled";

const Preloader = ({ loading }) => {
  return <>{loading && <StyledPreloader />}</>;
};

export default Preloader;
