import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import {
  coloredTitle,
  title,
  description,
  thanksText,
  lackOfFundsText,
} from "../api/text";
import { loginForm, blikForm, depositForm, withdrawForm } from "../api/forms";

import HeaderText from "../components/HeaderText";
import AccountBalance from "../components/AccountBalance";
import Form from "../components/Form";

import blockRedirect from "../functions/blockRedirect";

function SwitchRoute() {
  const location = useLocation();

  useEffect(() => {
    blockRedirect();
  }, [location]);

  return (
    <Switch>
      <Route path="/" exact>
        <HeaderText {...{ coloredTitle, title, description }} />
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
        <AccountBalance />
      </Route>
      <Route path="/thanksText">
        <HeaderText title={thanksText} smallerFont />
      </Route>
      <Route path="/lackOfFunds">
        <HeaderText title={lackOfFundsText} smallerFont />
      </Route>
    </Switch>
  );
}

export default SwitchRoute;
