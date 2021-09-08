import React, { useState } from "react";

import styled from "styled-components";
import colors from "../style/colors";

function Form({ forms }) {
  const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    margin: 0 auto;
    padding: 30px;
    width: max-content;
    border: 2px solid ${colors.orange};
    border-radius: 40px;
    background: -webkit-linear-gradient(
      ${colors.lightOrange},
      ${colors.orange}
    );
  `;

  const Label = styled.label`
    font-size: 25px;
  `;

  const Input = styled.input`
    outline: none;
    margin-bottom: 5px;
    padding: 5px 0 5px 10px;
    font-size: 18px;
    width: 100%;
    background-color: ${colors.grey};
    height: 45px;
    border-radius: 10px;
    border: 1px solid ${colors.grey};
  `;

  const Error = styled.p`
    text-transform: uppercase;
    font-size: 18px;
  `;

  const ButtonSubmit = styled.button`
    margin-top: 20px;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.main};
    width: 100%;
    border: none;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
  `;

  const [errorMessage, setErrorMessage] = useState("");

  let dataToSubmit = [];

  return (
    <Wrapper>
      {forms.buttons.map(({ label }, nr) => (
        <div>
          <Label for={label}>{label}</Label>
          <Input
            id={label}
            name={label}
            onChange={(evt) => {
              dataToSubmit.splice(nr, 1, evt.target.value);
            }}
          />
        </div>
      ))}
      <Error> {errorMessage} </Error>
      <ButtonSubmit
        onClick={() => {
          if (
            forms.submitButton.onSumbit(
              ...dataToSubmit,
              forms.submitButton.varFun
            ) === false
          )
            setErrorMessage(forms.submitButton.errorMessage);
        }}
      >
        {forms.submitButton.text}
      </ButtonSubmit>
    </Wrapper>
  );
}

export default Form;
