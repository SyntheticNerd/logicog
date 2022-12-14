import React from "react";

import styled from "styled-components";

const LatestStyled = styled.div`
  background-image: url(${require("../../../images/home/battlefield2042-homepage-desktop.webp")});
  height: 100vh;
  max-height: 770px;
  display: grid;
  place-items: center;
  background-size: cover;
  padding: 0px 32px;
  .contentWrapper {
    width: 100%;
    max-width: 1280px;
    .article {
        text-align: right;
        max-width: 390px;
        color: white;
        margin-left: auto;
      h2 {
        text-transform: uppercase;
        font-size: 40px;
        margin-bottom: 16px;
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
`;

const Latest = () => {
  return (
    <LatestStyled>
      <div className='contentWrapper'>
        <div className='article'>
          <h2>Latest Games Latest Tech</h2>
          <p>
            Logitech G actively partners with game creators to achieve amazingly
            immersive gaming experiences.
          </p>
          <a href=''>More on Games</a>
        </div>
      </div>
    </LatestStyled>
  );
};

export default Latest;
