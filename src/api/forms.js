import { loginIn, blikPayment } from "./verification";
import changeBalance from "../functions/changeBalance";

export const loginForm = {
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

export const blikForm = {
  buttons: [
    {
      label: "Podaj blik",
    },
  ],
  submitButton: {
    text: "Akceptuj",
    version: "white",
    onSumbit: blikPayment,
    errorMessage: "Nie poprawne dane",
  },
};

export const depositForm = {
  buttons: [
    {
      label: "Podaj kwote",
    },
  ],
  submitButton: {
    text: "Akceptuj",
    version: "white",
    onSumbit: changeBalance,
    errorMessage: "Brak srodków",
    varFun: "add",
  },
};

export const withdrawForm = {
  buttons: [
    {
      label: "Podaj kwote",
    },
  ],
  submitButton: {
    text: "Akceptuj",
    version: "white",
    onSumbit: changeBalance,
    errorMessage: "Brak srodków",
    varFun: "minus",
  },
};
