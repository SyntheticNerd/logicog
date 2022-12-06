import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogidayLogo } from "../../../../images/heroSlides/logidays-logo.svg";
import checkmark from "../../../../images/icons/checkmark.svg";
const SlideStyled = styled.div`
  min-height: calc(100vh - 42px);
  background-image: url(${require("../../../../images/heroSlides/12days-deals-gaming-hpb-desktop-2.webp")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 1%;
    font-size: 40px;
    color: white;
  }
  svg {
    margin-bottom: 16px;
  }
  p {
    color: white;
    font-size: 20px;
    max-width: 500px;
    text-align: center;
  }
  .offerEnds {
    font-size: 16px;
    margin: 32px;
  }
  form {
    .mainInput {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      input {
        width: 60%;
        font-size: 24px;
        padding: 8px;
        border-radius: 4px;
        border: none;
        outline: none;
      }
      button {
        width: calc(40% + 8px);
        margin-left: -8px;
        padding: 12px;
        font-size: 20px;
        font-weight: bold;
        border: none;
        background: none;
        background-color: var(--top-bar-color);
        color: white;
        border-radius: 4px;
      }
    }
    .checkBox {
      display: flex;
      align-items: flex-start;
      input {
        height: 32px;
        width: 32px;
        border: none;
        border: 4px solid grey;
        appearance: none;
        border-radius: 4px;
        margin-right: 16px;
        position: relative;
      }
      input:checked {
        :before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          background-color: grey;
          background-image: url(${checkmark});
          background-size: 100%;
          background-position: center;
        }
      }
      label {
        color: white;
        font-weight: bold;
        max-width: 380px;
        a {
          color: var(--brand-color);
        }
      }
    }
  }
`;

const LogidaySlide = () => {
  const [email, setEmail] = useState("");
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <SlideStyled>
      <h2>HAPPY</h2>
      <LogidayLogo />
      <p>
        We're dropping email-exclusive Logidays offers to VIPs. Don't miss out
        on 12 days of deals!
      </p>
      <p className='offerEnds'>Offers end Saturday (Dec 10)</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank but this doesn't do anything yet");
        }}
      >
        <div className='mainInput'>
          <input type='text' value={email} onChange={emailChangeHandler} />
          <button>SIGN UP NOW</button>
        </div>

        <div className='checkBox'>
          <input type='checkbox' />
          <label htmlFor=''>
            Yes, I want to receive news and product emails. Read our{" "}
            <a href=''>privacy policy</a>.
          </label>
        </div>
      </form>
    </SlideStyled>
  );
};

export default LogidaySlide;
