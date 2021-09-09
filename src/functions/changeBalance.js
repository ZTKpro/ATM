import clients from "../api/clients";

const changeBalance = (params) => {
  const client = JSON.parse(sessionStorage.getItem("client"));
  const value = Number(params[0]);
  const change = Number(params[1]);

  if (change === "minus" && client.accountBalance < value) {
    window.location.pathname = "/lackOfFunds";
    return;
  }

  if (change === "add") client.accountBalance = client.accountBalance + value;
  if (change === "minus") client.accountBalance = client.accountBalance - value;

  clients[client.id] = client;
};

export default changeBalance;
