import React from "react";
import styled from "styled-components";

const EdgeImage = ({ img, imgAlt }) => {
  return (
    <StyledSideImg>
      <img src={img} alt={imgAlt} />
    </StyledSideImg>
  );
};

const StyledSideImg = styled.aside``;

export default EdgeImage;
