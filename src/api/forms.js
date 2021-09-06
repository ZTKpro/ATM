import { loginIn, blikPayment } from "./verification";

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
