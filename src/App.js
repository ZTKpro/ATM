import React, { useEffect, useState } from "react";

import GlobalStyles from "./style/GlobalStyles";
import colors from "./style/colors";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { homepageButtons } from "./api/navigation";
import switchNav from "./functions/switchNav";

import SEO from "./components/Helmet";
import SwitchRoute from "./components/SwitchRoute";
import BackgroundImg from "./components/BackgroundImg";
import ButtonGrid from "./components/ButtonGrid";

function App() {
  const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${colors.main};
    padding-top: 220px;
  `;

  const location = useLocation();
  const [currentNavigation, setCurrentNavigation] = useState(homepageButtons);

  useEffect(() => {
    setCurrentNavigation(switchNav(location));
  }, [location]);

  return (
    <Wrapper className="App">
      <SEO />
      <GlobalStyles />
      <BackgroundImg />

      <SwitchRoute />

      <ButtonGrid buttons={currentNavigation} />
    </Wrapper>
  );
}

export default App;
