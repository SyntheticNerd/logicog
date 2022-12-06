import React from "react";

import styled from "styled-components";

const InnovationStyled = styled.div`
  background-image: url(${require("../../../images/home/home-banner-lightsync-1.jpg")});
  height: 100vh;
  max-height: 500px;
  display: grid;
  place-items: center;
  background-size: cover;
  background-position: center;
  .contentWrapper {
    width: 100%;
    max-width: 1220px;
    .article {
      max-width: 300px;
      color: white;
      h3 {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.7);
        background-image: linear-gradient(
          to right,
          #cacaca 18%,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: bottom;
        background-size: 5px 1px;
        background-repeat: repeat-x;
        width: fit-content;
        padding: 8px 0px;
        margin-bottom: 20px;
      }
      h2 {
        text-transform: uppercase;
        font-size: 40px;
        margin-bottom: 16px;
      }
      a {
        display: flex;
        align-items: center;
        color: var(--brand-color);
        text-decoration: none;
        border: none;
        outline: none;
        padding: 16px 0px;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 20px;
        text-transform: uppercase;
        position: relative;
        &::after{
            content: "►";
            /* position: absolute; */
            font-family: 'Courier New', Courier, monospace;
            font-size: 16px;
            margin-left: 8px;
        }
        &:hover {
          /* background-color: var(--brand-color-dark); */
        }
      }
    }
  }
`;

const Innovation = () => {
  return (
    <InnovationStyled>
      <div className='contentWrapper'>
        <div className='article'>
          <h3>Innovation</h3>
          <h2>Lightsync RGB</h2>
          <p>
            Synchronized lighting technology that immerses you into the action
            with reactive game-driven effects and more.
          </p>
          <a href=''>Find more information</a>
        </div>
      </div>
    </InnovationStyled>
  );
};

export default Innovation;
