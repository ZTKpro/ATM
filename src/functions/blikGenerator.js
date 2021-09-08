import clients from "../api/clients";

const blikGenerator = () => {
  clients.forEach((element, index) => {
    clients[index].blikCode = Math.floor(Math.random() * 1000000);
    console.log(clients[index].blikCode);
  });
};

export default blikGenerator;
