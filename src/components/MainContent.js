import React from "react";
import styled from "styled-components";
import About from "./AboutUs";
import FrequentlyQuestions from "./FrequentlyQuestions";
import HowToApplyForIt from "./HowToApply";

const MainContent = () => {
    return (
        <StyledMainContent>
            <About />
            <HowToApplyForIt />
            <FrequentlyQuestions />
        </StyledMainContent>
    );
};

const StyledMainContent = styled.main`
    padding-bottom: 10rem;
`;

export default MainContent;
