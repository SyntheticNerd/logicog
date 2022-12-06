import React from "react";
import styled from "styled-components";

const LevelsToPlayStyled = styled.div`
  background-image: url(${require("../../../images/home/feature-7-banner-desktop.webp")});
  min-height: calc(100vh - 122px);
  display: grid;
  place-items: center;
  .contentWrapper {
    max-width: 590px;
    color: white;
    text-align: center;
    h2 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
    .buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      button {
        background-color: var(--brand-color);
        border: none;
        outline: none;
        padding: 16px;
        border-radius: 8px;
        font-weight: bold;
        &:hover {
          background-color: var(--brand-color-dark);
        }
      }
    }
  }
`;

const LevelToPlay = () => {
  return (
    <LevelsToPlayStyled>
      <div className='contentWrapper'>
        <h2>THERE'S LEVELS TO PLAY</h2>
        <p>
          We all play. In our way. For our own reasons. And that’s what makes
          this community we’ve built together so amazing. More than levels in
          games, there’s levels to all of us. And where we go next, is up to us
        </p>
        <div className='buttons'>
          <button>LET'S GO</button>
          <button>WATCH THE FILM</button>
        </div>
      </div>
    </LevelsToPlayStyled>
  );
};

export default LevelToPlay;
