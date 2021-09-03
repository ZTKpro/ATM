import styled from "styled-components";
import colors from "../style/colors";
import React from "react";

import Button from "../components/Button";

import { loginIn } from "../api/verification";

function Form({ dataForm }) {
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

    .button {
      margin-top: 20px;
      height: 50px;
      border-radius: 10px;
      background-color: ${colors.main};
      width: 100%;
    }
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

  let errorMessage = "";

  let dataToSubmit = [];

  return (
    <Wrapper>
      {dataForm.buttons.map(({ label }, nr) => (
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
      <Button
        text={dataForm.submitButton.text}
        version={dataForm.submitButton.version}
        onClick={() => {
          dataForm.submitButton.onSumbit(...dataToSubmit)
            ? console.log(true)
            : (errorMessage = dataForm.submitButton.errorMessage);
        }}
      />
    </Wrapper>
  );
}

export default Form;
