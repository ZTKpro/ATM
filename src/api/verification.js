import clients from "./clients";

export const loginIn = (params) => {
  const password = params[1];
  const by = params[2]; // byCard, byBlik, byLogin

  const client = clients.find(({ login, blikCode }) => {
    if (by === "byBlik") return blikCode === Number(params[0]);
    return login === params[0];
  });

  if (
    client === undefined ||
    (by === "byLogin" && client.password !== password)
  )
    return false;

  sessionStorage.setItem("client", JSON.stringify(client));
  window.location.pathname = "/menu";
  if (by === "byBlik") window.location.pathname = "/deposit";

  return true;
};

export const loginOut = () => {
  sessionStorage.removeItem("client");
};
