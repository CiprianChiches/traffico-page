import React from "react";
import styled from "styled-components";

const TextAboutUs= () => {
  return (
    <StyledTextAboutUs>
      <h2 className='section-title'>About Us</h2>
      <p className='section-paragraph'>
        The occupational traffic permit is one of the most important things in
        the company when carrying out freight transport. In fact, it is a
        prerequisite for doing business traffic at all.
      </p>
    </StyledTextAboutUs>
  );
};

const StyledTextAboutUs = styled.div`
  margin-bottom: 3rem;
`;

export default TextAboutUs;
