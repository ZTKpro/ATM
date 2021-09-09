const blockRedirect = () => {
  const client = JSON.parse(sessionStorage.getItem("client"));

  if (client !== null) return;

  switch (window.location.pathname) {
    case "/":
    case "/login":
    case "/blik":
      return;
    default:
  }

  window.location.pathname = "/";
};

export default blockRedirect;
