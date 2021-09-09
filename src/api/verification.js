import clients from "./clients";

// loginIn,Blik can be on one function. We need only add params with change log. + cardOptions

export const loginIn = (loginInput, passwordInput) => {
  const client = clients.find(({ login }) => login === loginInput);

  if (client === undefined || client.password !== passwordInput) return false;

  sessionStorage.setItem("client", JSON.stringify(client));
  window.location.pathname = "/menu";
  return true;
};

export const blikPayment = (blikInput) => {
  const client = clients.find(({ blikCode }) => blikCode === Number(blikInput));

  if (client === undefined) return false;

  sessionStorage.setItem("client", JSON.stringify(client));
  window.location.pathname = "/deposit";
  return true;
};

export const loginOut = () => {
  sessionStorage.removeItem("client");
};
