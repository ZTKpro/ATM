import {
  homepageButtons,
  cancelButtons,
  menuButtons,
  depositButtons,
  withdrawButtons,
  backButtons,
} from "../api/navigation";

const switchNav = () => {
  switch (window.location.pathname) {
    case "/":
      return homepageButtons;
    case "/menu":
      return menuButtons;
    case "/deposit":
      return depositButtons;
    case "/withdraw":
      return withdrawButtons;
    case "/depositForm":
    case "/withdrawForm":
    case "/accountBalance":
      return backButtons;
    case "/thanksText":
    case "/login":
    case "/blik":
    case "/lackOfFunds":
      return cancelButtons;
    default:
      return homepageButtons;
  }
};

export default switchNav;
