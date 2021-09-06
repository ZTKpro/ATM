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

import clients from "./api/clients";
import {
  coloredTittle,
  tittle,
  description,
  thanksText,
  lackOfFundsText,
} from "./api/text";
import { loginForm, blikForm } from "./api/forms";
import {
  homepageButtons,
  loginButtons,
  blikButtons,
  menuButtons,
  accountBalanceButtons,
  depositButtons,
  withdrawButtons,
  thanksTextButtons,
} from "./api/navigation";

function App() {
  const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${colors.main};
    padding-top: 220px;
  `;

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentNavigation(homepageButtons);
        break;
      case "/login":
        setCurrentNavigation(loginButtons);
        break;
      case "/blik":
        setCurrentNavigation(blikButtons);
        break;
      case "/menu":
        setCurrentNavigation(menuButtons);
        break;
      case "/accountBalance":
        setCurrentNavigation(accountBalanceButtons);
        break;
      case "/deposit":
        setCurrentNavigation(depositButtons);
        break;
      case "/withdraw":
        setCurrentNavigation(withdrawButtons);
        break;
      case "/thanksText":
        setCurrentNavigation(thanksTextButtons);
        break;
      case "/lackOfFunds":
        setCurrentNavigation(thanksTextButtons);
        break;
      default:
        setCurrentNavigation(homepageButtons);
    }
  }, [location]);

  const currentClient =
    sessionStorage.getItem("clientId") === null
      ? false
      : clients.find(
          ({ id }) => `${id}` === sessionStorage.getItem("clientId")
        );

  const [currentNavigation, setCurrentNavigation] = useState(homepageButtons);

  return (
    <Wrapper className="App">
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
