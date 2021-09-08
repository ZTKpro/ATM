import React, { useEffect, useState } from "react";

import { Switch, Route, useLocation } from "react-router-dom";

import GlobalStyles from "./style/GlobalStyles";
import colors from "./style/colors";
import styled from "styled-components";

import HeaderText from "./components/HeaderText";
import AccountBalance from "./components/AccountBalance";
import BackgroundImg from "./components/BackgroundImg";
import ButtonGrid from "./components/ButtonGrid";
import Form from "./components/Form";
import SEO from "./components/Helmet";

import clients from "./api/clients";
import {
  coloredTittle,
  tittle,
  description,
  thanksText,
  lackOfFundsText,
} from "./api/text";
import { loginForm, blikForm, depositForm, withdrawForm } from "./api/forms";
import { homepageButtons } from "./api/navigation";
import blikGenerator from "./functions/blikGenerator";

import switchNav from "./functions/switchNaviBtn";

function App() {
  const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${colors.main};
    padding-top: 220px;
  `;

  const location = useLocation();
  const [currentNavigation, setCurrentNavigation] = useState(homepageButtons);

  const currentClient =
    sessionStorage.getItem("clientId") === null
      ? false
      : clients.find(
          ({ id }) => `${id}` === sessionStorage.getItem("clientId")
        );

  useEffect(() => {
    setCurrentNavigation(switchNav(location));
  }, [location]);

  setInterval(blikGenerator(), 3000);

  return (
    <Wrapper className="App">
      <SEO />
      <GlobalStyles />
      <BackgroundImg />

      <Switch>
        <Route path="/" exact>
          <HeaderText {...{ coloredTittle, tittle, description }} />
        </Route>
        <Route path="/login">
          <Form forms={loginForm} />
        </Route>
        <Route path="/blik">
          <Form forms={blikForm} />
        </Route>
        <Route path="/depositForm">
          <Form forms={depositForm} />
        </Route>
        <Route path="/withdrawForm">
          <Form forms={withdrawForm} />
        </Route>
        <Route path="/accountBalance">
          <AccountBalance {...{ currentClient }} />
        </Route>
        <Route path="/thanksText">
          <HeaderText tittle={thanksText} smallerFont />
        </Route>
        <Route path="/lackOfFunds">
          <HeaderText tittle={lackOfFundsText} smallerFont />
        </Route>
      </Switch>
      <ButtonGrid buttons={currentNavigation} />
    </Wrapper>
  );
}

export default App;
