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
    client.accountBalance = client.accountBalance - change;
  }

  if (operation === "add") {
    if (client.accountBalance < client.accountBalance - change) {
      window.location.pathname = "/lackOfFunds";
      alert("lackoffounds");
      return;
    }
    client.accountBalance = client.accountBalance - change;
  }

  const clientId = Number(sessionStorage.getItem("clientId"));

  clients[clientId] = client;
};

export default changeBalance;
