import React from "react";
import styled from "styled-components";

const FaqTitle = () => {
    return (
        <StyledFaqText>
            <h2 className="section-title">FAQ</h2>
            <h3 className="subtitle-section">
                Questions and Answers on Professional Traffic Permits:
            </h3>
        </StyledFaqText>
    );
};

const StyledFaqText = styled.div`
    margin-bottom: 3rem;

    h3.subtitle-section {
        font-family: DM Serif Display;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 140%;
        color: #592720;
    }

    @media (max-width: 830px) {
        h3.subtitle-section {
            font-size: 30px;
        }
    }
`;

export default FaqTitle;
