import GlobalStyles from "./style/GlobalStyles";
import colors from "./style/colors";
import styled from "styled-components";

// import HeaderText from "./components/HeaderText";
import BackgroundImg from "./components/BackgroundImg";
import ButtonGrid from "./components/ButtonGrid";
import Form from "./components/Form";

import { loginIn } from "./api/verification";

function App() {
  const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${colors.main};
    padding-top: 220px;
  `;

  const arrayTable = [
    {
      text: "Blik",
      version: "gradient",
    },
    {
      text: "Zaloguj się za pomocą loginu",
      version: "gradient",
    },
  ];

  const dataForm = {
    buttons: [
      {
        label: "Login",
      },
      {
        label: "hasło",
      },
    ],
    submitButton: {
      text: "Zaloguj",
      version: "white",
      onSumbit: loginIn,
      errorMessage: "Nie poprawne dane",
    },
  };

  return (
    <Wrapper className="App">
      <GlobalStyles />
      {/* <HeaderText {...{ coloredTittle, tittle, description }} /> */}
      <BackgroundImg />
      <ButtonGrid {...{ arrayTable }} />
      <Form {...{ dataForm }} />
    </Wrapper>
  );
}

export default App;
