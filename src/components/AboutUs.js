import React from "react";
import styled from "styled-components";
import AboutUsCard from "./AboutUsCard";
import TextAboutUs from "./TextAboutUs";
import SideImage from "./EdgeImage";
import manWithTruck from "../assets/manWithTruck.png";
import { enterFromRight } from "../animations/Animations";
import { useScroll } from "../animations/Scroll";
import { motion } from "framer-motion";

const About = () => {
  const [element, controls] = useScroll();

  return (
    <StyledAboutUs ref={element} className='my-10' id='about'>
      <div className='main-container'>
        <div className='flex-container'>
          <div className='flex-left'>
            <TextAboutUs/>
            <AboutUsCard />
          </div>
          <motion.div
            variants={enterFromRight}
            animate={controls}
            initial='hidden'
            className='flex-right'
          >
            <SideImage img={manWithTruck} imgAlt='Man with truck' />
          </motion.div>
        </div>
      </div>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.section`
  div.main-container {
    div.flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .flex-left,
      .flex-right {
        width: 50%;
      }

      .flex-left {
        align-self: flex-end;
      }
    }
  }

  @media (max-width: 830px) {
    div.flex-container {
      flex-direction: column;

      .flex-left,
      .flex-right {
        min-width: 100%;
      }

      .flex-right {
        aside {
          margin-top: 2rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default About;
