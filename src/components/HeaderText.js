import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import colors from "../style/colors";

function HeaderText({ coloredTittle, tittle, description, smallerFont }) {
  const Wrapper = styled.section`
    z-index: 1;
    margin: 0 auto;
    width: 60%;
    text-align: center;
  `;

  const H1 = styled.h1`
    font-size: ${smallerFont ? "50px" : "140px"};
  `;

  const P = styled.p`
    font-size: 30px;
  `;

  const animate = keyframes`
    0%,10%,100% {
      width: 0%;
    }
    
    70%,90% {
      width: 100%;
    }
    `;

  const COLORED = styled.span`
    color: ${colors.main};
    -webkit-text-stroke: 2px ${colors.lightOrange};
    position: relative;

    &::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      height: 100%;
      width: 0;
      background: -webkit-linear-gradient(
        ${colors.lightOrange},
        ${colors.orange}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      overflow: hidden;
      animation: ${animate} 4s linear infinite;
    }
  `;

  const [tittleState, setTittleStat] = useState(tittle);

  useEffect(() => {
    setTittleStat(tittle);
  }, [tittle]);

  return (
    <Wrapper>
      <H1>
        <COLORED data-text={coloredTittle}>{coloredTittle}</COLORED>{" "}
        {tittleState}
      </H1>
      <P>{description}</P>
    </Wrapper>
  );
}

export default HeaderText;
