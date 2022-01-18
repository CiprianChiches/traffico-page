import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import ReusableButton from "../components/Button";
import SocialMedia from "../components/Social";
import background from "../assets/background.png";
import truck from "../assets/truck.png";
import { enterFromLeft } from "../animations/Animations";
import { useScroll } from "../animations/Scroll";

const Work = () => {
    const [element, controls] = useScroll();
    useEffect(() => {
        document.title = "Trafico | Work In Progress";
    }, []);

    return (
        <StyledWork>
            <img
                src={background}
                alt="background"
                className="hero-background"
            />
            <div className="container">
                <div className="flex-container">
                    <Logo />

                    <Link to="/">
                        <ReusableButton text="Homepage" />
                    </Link>
                </div>
                <div ref={element} className="truck-img-container">
                    <motion.img
                        variants={enterFromLeft}
                        initial="hidden"
                        animate={controls}
                        className="truck"
                        src={truck}
                        alt="truck"
                    />
                    <motion.div
                        variants={enterFromLeft}
                        initial="hidden"
                        animate={controls}
                        className="text-container"
                    >
                        <p>Work in Progress</p>
                    </motion.div>
                </div>
            </div>
            <footer className="footer">
                <SocialMedia />
            </footer>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    img.hero-background {
        position: absolute;
        width: 100%;
        height: 85vh;
        max-height: 85vh;
        top: 0;
        left: 0;
        z-index: -1;
        background: linear-gradient(297.17deg, #ffedba 6.67%, #ee4d47 91.82%);
        object-fit: cover;
        border-radius: 0;
    }

    .truck-img-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        .text-container {
            position: absolute;
            top: 0;
            width: 29%;
            height: 60.5%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        p {
            font-family: DM Serif Display;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 240%;
            width: 90%;
        }
    }

    .container {
        .flex-container {
            margin: 0 auto 5rem;
            padding-top: 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    footer.footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: -1;
        height: 15vh;
        max-height: 15vh;
    }

    @media (max-width: 830px) {
        .container {
            .flex-container {
                flex-direction: column;
                gap: 2rem;
                div {
                    width: 100%;
                    text-align: center;
                }
            }
        }
        .truck-img-container {
            left: 0;
            bottom: 30%;
            transform: translateX(0);
            transform: translateY(30%);
            img {
                width: 90%;
            }
        }
    }
`;

export default Work;
