import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as Center } from "../../images/loadingCenter.svg";
import { ReactComponent as Gear } from "../../images/loadingGear.svg";

const LoadingStyled = styled.div<{
  height?: string;
  width?: string;
  color?: string;
}>`
  display: grid;
  place-items: center;
  height: ${({ height }) => (height ? height : "300px")};
  width: ${({ width }) => (width ? width : "300px")};
  position: relative;
  svg {
    height: 100%;
    width: 100%;
    fill: ${({ color }) => (color ? color : "black")};
  }
  div {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const Loading = ({
  height,
  width,
  color,
}: {
  height?: string;
  width?: string;
  color?: string;
}) => {
  return (
    <LoadingStyled height={height} width={width} color={color}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className='gear'
      >
        <Gear />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className='center'
      >
        <Center />
      </motion.div>
    </LoadingStyled>
  );
};

export default Loading;
