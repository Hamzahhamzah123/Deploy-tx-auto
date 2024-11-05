const { deployContract } = require("./deploy");

const network = {
  name: "Your Network Name",
  rpcUrl: "YOUR_RPC_URL",
  explorer: "https://explorer_url_here"
};
const name = "TokenName";
const symbol = "TKN";
const supply = 1000000; // Adjust the supply as needed

deployContract(network, name, symbol, supply, 100);
