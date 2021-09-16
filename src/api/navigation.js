import { loginOut } from "./verification";
import changeBalance from "../functions/changeBalance";

const cancelButton = {
  text: "Anuluj",
  version: "gradient",
  onClick: loginOut,
  goTo: "/",
};

const backButton = {
  text: "Wróć",
  version: "gradient",
  goTo: "/menu",
};

export const cancelButtons = [cancelButton];

export const backButtons = [backButton];

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

export const menuButtons = [
  cancelButton,
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
  {
    text: "Wpłać",
    version: "gradient",
    goTo: "/deposit",
  },
];

export const depositButtons = [
  backButton,
  {
    text: "Inna",
    version: "gradient",
    goTo: "/depositForm",
  },
  {
    text: "50 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [50, null, "add"],
  },
  {
    text: "100 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [100, null, "add"],
  },
  {
    text: "200 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [200, null, "add"],
  },
  {
    text: "500 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [500, null, "add"],
  },
  {
    text: "1 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [1000, null, "add"],
  },
  {
    text: "2 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [2000, null, "add"],
  },
];

export const withdrawButtons = [
  backButton,
  {
    text: "Inna",
    version: "gradient",
    goTo: "/withdrawForm",
  },
  {
    text: "50 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [50, null, "minus"],
  },
  {
    text: "100 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [100, null, "minus"],
  },
  {
    text: "200 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [200, null, "minus"],
  },
  {
    text: "500 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [500, null, "minus"],
  },
  {
    text: "1 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [1000, null, "minus"],
  },
  {
    text: "2 000 zł",
    version: "gradient",
    onClick: changeBalance,
    varFun: [2000, null, "minus"],
  },
];
