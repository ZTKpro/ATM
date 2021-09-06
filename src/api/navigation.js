import { loginOut } from "./verification";
import changeBalance from "./changeBalance";

const cancelButton = {
  text: "Anuluj",
  version: "gradient",
  goTo: "/",
  onClick: loginOut,
};

const backButton = {
  text: "Wróć",
  version: "gradient",
  goTo: "/menu",
};

export const homepageButtons = [
  {
    text: "Zaloguj się za pomocą loginu",
    version: "gradient",
    goTo: "/login",
  },
  {
    text: "Blik",
    version: "gradient",
    goTo: "/blik",
  },
];

export const loginButtons = [cancelButton];

export const blikButtons = [cancelButton];

export const menuButtons = [
  cancelButton,
  {
    text: "Pomoc",
    version: "gradient",
    goTo: "/help",
  },
  {
    text: "Wpłać",
    version: "gradient",
    goTo: "/deposit",
  },
  {
    text: "Wypłać",
    version: "gradient",
    goTo: "/withdraw",
  },
  {
    text: "Stan konta",
    version: "gradient",
    goTo: "/accountBalance",
  },
];

export const accountBalanceButtons = [backButton];

export const thanksTextButtons = [
  {
    text: "Wróć",
    version: "gradient",
    goTo: "/",
    onClick: loginOut,
  },
];

export const depositButtons = [
  backButton,
  {
    text: "50 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [50, "add"],
  },
  {
    text: "100 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [100, "add"],
  },
  {
    text: "200 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [200, "add"],
  },
  {
    text: "500 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [500, "add"],
  },
  {
    text: "1 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [1000, "add"],
  },
  {
    text: "2 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [2000, "add"],
  },
];

export const withdrawButtons = [
  backButton,
  {
    text: "50 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [50, "minus"],
  },
  {
    text: "100 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [100, "minus"],
  },
  {
    text: "200 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [200, "minus"],
  },
  {
    text: "500 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [500, "minus"],
  },
  {
    text: "1 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [1000, "minus"],
  },
  {
    text: "2 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [2000, "minus"],
  },
];
