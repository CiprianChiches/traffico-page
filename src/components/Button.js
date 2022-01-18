import React from "react";
import styled from "styled-components";

const Button = ({ text, icon, longBtn }) => {
    return (
        <div>
            {longBtn ? (
                <StyledReusableButton className={longBtn ? "long-btn" : ""}>
                    <span>{text}</span>
                    {icon ? (
                        <i className="las la-long-arrow-alt-right la-2x"></i>
                    ) : (
                        ""
                    )}
                </StyledReusableButton>
            ) : (
                <StyledSecondReusableButton
                    className={longBtn ? "long-btn" : ""}
                >
                    {text}
                    {icon ? (
                        <i className="las la-long-arrow-alt-right la-2x"></i>
                    ) : (
                        ""
                    )}
                </StyledSecondReusableButton>
            )}
        </div>
    );
};

const StyledReusableButton = styled.button`
    cursor: pointer;
    background: #ee4d47;
    border: none;
    border-radius: 5px;
    height: 60px;
    /* height: 3.5rem; */
    width: 158px;

    font-family: "Rubik", sans-serif;
    font-weight: bold;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;

    transition: all 0.5s ease;

    &:hover {
        background: #402b2b;
        transform: scale(1.1);
    }
`;

const StyledSecondReusableButton = styled.button`
    cursor: pointer;
    background: #ee4d47;
    border: none;
    border-radius: 5px;
    height: 60px;
    /* height: 3.5rem; */
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-family: "Rubik", sans-serif;
    font-weight: bold;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.5s ease;

    &:hover {
        background: #402b2b;
        transform: scale(1.1);
    }
`;

export default Button;
