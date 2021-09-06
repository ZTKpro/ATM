import clients from "./clients";

export const loginIn = (loginInput, passwordInput) => {
  const client = clients.find(({ login }) => login === loginInput);

  if (client === undefined) {
    return false;
  }

  if (client.password !== passwordInput) {
    return false;
  }

  sessionStorage.setItem("clientId", client.id);
  window.location.pathname = "/menu";
  return true;
};

export const loginOut = () => {
  sessionStorage.removeItem("clientId");
};

export const blikPayment = (blikInput) => {
  // eslint-disable-next-line eqeqeq
  const client = clients.find(({ blikCode }) => blikCode == blikInput);

  if (client === undefined) {
    return false;
  }

  sessionStorage.setItem("clientId", client.id);
  window.location.pathname = "/deposit";
  return true;
};
