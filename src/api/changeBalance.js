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
    if (client.accountBalance < change) {
      window.location.pathname = "/lackOfFunds";
      return;
    }
    client.accountBalance = client.accountBalance - change;
  }

  if (operation === "add") {
    client.accountBalance = client.accountBalance + change;
  }

  const clientId = Number(sessionStorage.getItem("clientId"));

  clients[clientId] = client;
};

export default changeBalance;
