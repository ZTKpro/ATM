import React from "react";

import styled from "styled-components";

import clients from "../api/clients";

function HeaderText({ currentClient }) {
  const Wrapper = styled.section`
    z-index: 1;
    margin: 0 auto;
    width: 60%;
    text-align: center;
  `;

  const Content = styled.h2`
    font-size: 70px;
  `;

  setInterval(function () {
    console.log(currentClient?.accountBalance);
  }, 3000);

  setInterval(function () {
    console.log(
      clients.find(({ id }) => `${id}` === sessionStorage.getItem("clientId"))
        .accountBalance
    );
  }, 3000);

  return (
    <Wrapper>
      <Content> {currentClient?.accountBalance + " zł"}</Content>
    </Wrapper>
  );
}

export default HeaderText;
