import React from "react";
import ApplyText from "./ApplyText";
import womanAtDesk2 from "../assets/womanAtDesk2.png";
import SideImage from "./EdgeImage";
import styled from "styled-components";
import { enterFromLeft } from "../animations/Animations";
import { useScroll } from "../animations/Scroll";
import { motion } from "framer-motion";

const HowToApplyForIt = () => {
    const [element, controls] = useScroll();

    return (
        <StyledHowToApplyForIt ref={element} id="apply">
            <div className="container">
                <div className="flex-container">
                    <motion.div
                        variants={enterFromLeft}
                        animate={controls}
                        initial="hidden"
                        className="flex-left"
                    >
                        <SideImage img={womanAtDesk2} imgAlt="Woman at desk" />
                    </motion.div>
                    <div className="flex-right">
                        <ApplyText />
                    </div>
                </div>
            </div>
        </StyledHowToApplyForIt>
    );
};

const StyledHowToApplyForIt = styled.section`
    div.container {
        div.flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10rem;

            .flex-left,
            .flex-right {
                width: 50%;
            }

            .flex-left {
                img {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 830px) {
        div.container {
            div.flex-container {
                flex-direction: column-reverse;
                gap: 5rem;
                .flex-left,
                .flex-right {
                    min-width: 100%;
                }

                .flex-left {
                    aside {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`;

export default HowToApplyForIt;
