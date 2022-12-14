import styled from "styled-components";
// import bannerImage from "../../../images/banners/plp-mice-hero-desktop-2.webp";

export const BannerStyled = styled.div<{
  backgroundImageFileName?: string;
  mobileBackgroundFileName?: string;
  category?: string;
}>`
  height: 55vh;
  background-color: #2a2a2a;
  background-image: ${({ backgroundImageFileName }) =>
    backgroundImageFileName && backgroundImageFileName !== undefined
      ? `url(${require(`../../../images/banners/${backgroundImageFileName}`)})`
      : ""};
  background-size: cover;
  background-position: center;
  @media (max-width: 840px) {
    height: fit-content;
    background-size: 100%;
    background-position: center;
    background-image: ${({ mobileBackgroundFileName }) =>
      mobileBackgroundFileName && mobileBackgroundFileName !== undefined
        ? `url(${mobileBackgroundFileName})`
        : ""};
  }
  .contentWrapper {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: auto;
    padding: 0px 32px;
    display: flex;
    align-items: center;
    @media (max-width: 840px) {
      align-items: flex-end;
    }
    .grid {
      width: 33%;
      @media (max-width: 840px) {
        width: 100%;
        margin-top: 40vh;
        margin-bottom: 64px;
      }
      color: ${({ category }) =>
        category && category === "accessories"
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(255, 255, 255, 0.98)"};
      h1 {
        font-size: 42px;
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
      p {
        line-height: 1.6em;
      }
    }
  }
`;
