import clients from "../api/clients";

const changeBalance = (params) => {
  const client = JSON.parse(sessionStorage.getItem("client"));
  const value = Number(params[0]);
  const change = params[2];

  if (change === "minus" && client.accountBalance < value) {
    window.location.pathname = "/lackOfFunds";
    return;
  }

  if (change === "add") client.accountBalance = client.accountBalance + value;
  if (change === "minus") client.accountBalance = client.accountBalance - value;

  clients[client.id] = client;
  sessionStorage.setItem("client", JSON.stringify(client));
  window.location.pathname = "/accountBalance";
};

export default changeBalance;
