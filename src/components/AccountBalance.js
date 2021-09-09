import React from "react";

import styled from "styled-components";

function HeaderText() {
  const Wrapper = styled.section`
    z-index: 1;
    margin: 0 auto;
    width: 60%;
    text-align: center;
  `;

  const Content = styled.h2`
    font-size: 70px;
  `;

  const client = JSON.parse(sessionStorage.getItem("client"));

  return (
    <Wrapper>
      <Content> {client?.accountBalance + " zł"}</Content>
    </Wrapper>
  );
}

export default HeaderText;
