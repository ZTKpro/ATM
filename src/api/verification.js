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
  return true;
};

export const loginOut = () => {
  sessionStorage.removeItem("clientId");
};
