import React from "react";

import styled from "styled-components";
import { ReactComponent as Twitter } from "../../../images/icons/social/twitter.svg";
import { ReactComponent as Facebook } from "../../../images/icons/social/facebook.svg";
import { ReactComponent as Youtube } from "../../../images/icons/social/youtube.svg";
import { ReactComponent as Instagram } from "../../../images/icons/social/instagram.svg";

const FeaturedQuoteStyled = styled.div`
  background-color: #f4f4f4;
  max-height: 500px;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0px 32px;
  @media (max-width: 1080px) {
    max-height: fit-content;
  }
  .contentWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 1080px) {
      flex-direction: column-reverse;
      gap: 32px;
      padding: 40px 0px;
    }
    blockquote {
      width: 490px;
      max-width: 80vw;
      font-weight: bold;
      font-size: 20px;
      position: relative;
      &::before {
        content: '"';
        /* background: blue; */
        position: absolute;
        font-size: 120px;
        top: 0px;
        transform: translateY(-60%);
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
    }
    .theImage {
      @media (max-width: 1080px) {
        height: 500px;
      }
    }
    img {
      height: 100%;
      max-height: 500px;
    }
    .social {
      margin-top: 16px;
      display: flex;
      gap: 20px;
      img {
        height: 80px;
        width: 80px;
      }
      ul {
        list-style-type: none;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 16px;
      }
      .twitter {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(12, 117, 187, 0.8);
          }
        }
      }
      .facebook {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(0, 66, 141, 0.8);
          }
        }
      }
      .youtube {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(216, 0, 0, 0.8);
          }
        }
      }
      .instagram {
        svg {
          fill: rgba(0, 0, 0, 0.4);
        }
        &:hover {
          svg {
            fill: rgba(202, 60, 190, 0.8);
          }
        }
      }
    }
  }
`;

const FeaturedQuote = () => {
  return (
    <FeaturedQuoteStyled>
      <div className='contentWrapper'>
        <div className='article'>
          <blockquote>
            It helps me be as precise and confident as I need to be so we can
            win. I used to think wireless was too slow for gaming, but now I am
            on the world stage completely confident in the performance of my
            Logitech G LIGHTSPEED wireless mouse.
          </blockquote>
          <div className='social'>
            <img
              src={require("../../../images/home/tsm-black.png")}
              alt='TSM'
            />
            <div>
              <h2>BJERGSEN</h2>
              <ul>
                <li className='twitter'>
                  <a href='https://twitter.com'>
                    <Twitter />
                  </a>
                </li>
                <li className='facebook'>
                  <a href='https://facebook.com'>
                    <Facebook />
                  </a>
                </li>
                <li className='youtube'>
                  <a href='https://youtube.com'>
                    <Youtube />
                  </a>
                </li>
                <li className='instagram'>
                  <a href='https://instagram.com'>
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          className='theImage'
          src={require("../../../images/home/soren-bjerg.webp")}
          alt='Soren Bjerg'
        />
      </div>
    </FeaturedQuoteStyled>
  );
};

export default FeaturedQuote;
