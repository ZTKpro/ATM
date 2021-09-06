import clients from "./clients";

const changeBalance = (change, operation) => {
  const client = sessionStorage.getItem("clientId")
    ? clients.find(({ id }) => `${id}` === sessionStorage.getItem("clientId"))
    : false;

  if (client === false) {
    window.location.pathname = "/";
    return;
  }

  if (operation === "minus") {
    window.location.pathname = "/accountBalance";
    client.accountBalance = client.accountBalance - change;
  }

  if (operation === "add") {
    if (client.accountBalance < client.accountBalance - change) {
      window.location.pathname = "/lackOfFunds";
    }
    window.location.pathname = "/accountBalance";
    client.accountBalance = client.accountBalance - change;
  }

  // return clients.find(({ id }) => `${id}` === sessionStorage.getItem("clientId")) = client
};

export default changeBalance;
