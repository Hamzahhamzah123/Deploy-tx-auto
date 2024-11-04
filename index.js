require('dotenv').config();
require('colors');
const {
  loadNetworkConfig,
  getUserInput,
  displayHeader,
  delay,
} = require('./src/utils');
const { deployContract } = require('./src/deploy');
const readlineSync = require('readline-sync');

async function main() {
  displayHeader();
  console.log(`Please wait...\n`.yellow);

  await delay(3000);

  console.log(`Welcome to EVM Auto Deploy!`.green.bold);

  const networks = loadNetworkConfig();  // Langsung gunakan konfigurasi jaringan

  // Langsung tetapkan ke jaringan fhenix tanpa pilihan
  const selectedNetwork = networks[0];

  if (!selectedNetwork) {
    console.error('Invalid network selection'.red);
    process.exit(1);
  }

  const { name, symbol, supply } = getUserInput();

  const contractAddress = await deployContract(
    selectedNetwork,
    name,
    symbol,
    supply
  );

  console.log(`\nDeployment completed!`.green.bold);
  console.log(`Token Name: ${name}`);
  console.log(`Token Symbol: ${symbol}`);
  console.log(`Token Supply: ${supply}`);
  console.log(`Contract Address: ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
