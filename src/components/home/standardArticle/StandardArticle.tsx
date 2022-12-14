import React from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const StandardArticleStyled = styled.div<{ backgroundImage?: string }>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-height: 800px;
  display: grid;
  place-items: center;
  overflow: hidden;
  .contentWrapper {
    display: flex;
    align-items: center;
    img {
      height: 192px;
      /* width: 192px; */
      padding: 0px 40px;
    }
    .article {
      padding: 0px 40px;
      border-left: 1px dotted white;
      max-width: 350px;
      color: white;
      h2 {
        text-transform: uppercase;
      }
      a {
        display: inline-block;
        background-color: var(--brand-color);
        text-decoration: none;
        color: black;
        border: none;
        outline: none;
        padding: 16px 32px;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 20px;
        text-transform: uppercase;
        &:hover {
          background-color: var(--brand-color-dark);
        }
      }
    }
  }
  .miniHr {
    margin: 20px 0px;
    height: 6px;
    position: relative;
    .after {
      content: "";
      background-color: #c3c6c8;
      height: 100%;
      position: absolute;
      width: 100%;
    }
  }
`;

const StandardArticle = ({
  title,
  article,
  button,
  link,
  image,
  backgroundImage,
}: {
  title: string;
  article: string;
  button: string;
  link: string;
  image: string;
  backgroundImage: string;
}) => {
  const { ref, inView, entry } = useInView();
  return (
    <StandardArticleStyled backgroundImage={backgroundImage}>
      <div className='contentWrapper'>
        <img src={image} alt='' />
        <div ref={ref} className='article'>
          <motion.h2
            animate={{
              transform: inView ? "translateX(0px)" : "translateX(2000px)",
              opacity: inView ? "1" : "0",
            }}
            transition={{ delay: 0.5, type: "just" }}
          >
            {title}
          </motion.h2>
          <div className='miniHr'>
            <motion.div
              animate={{
                width: inView ? "86px" : "100%",
                opacity: inView ? "1" : "0",
              }}
              transition={{ delay: 0.5, type: "just" }}
              className='after'
            />
          </div>
          <motion.p
            animate={{
              transform: inView ? "translateX(0px)" : "translateX(2000px)",
              opacity: inView ? "1" : "0",
            }}
            transition={{ delay: 0.5, type: "just" }}
          >
            {article}
          </motion.p>
          <a href={link}>{button}</a>
        </div>
      </div>
    </StandardArticleStyled>
  );
};

export default StandardArticle;
