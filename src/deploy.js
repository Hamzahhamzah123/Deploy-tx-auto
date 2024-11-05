require('colors');
const ethers = require('ethers');
const { generateContractCode } = require('./contractCode');

async function deployContract(network, name, symbol, supply, iterations = 100) {
  const provider = new ethers.JsonRpcProvider(network.rpcUrl);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  for (let i = 0; i < iterations; i++) {
    try {
      console.log(`\nDeploying contract iteration ${i + 1} to ${network.name}...`.yellow);

      const { bytecode, abi } = generateContractCode(name, symbol, supply);
      const factory = new ethers.ContractFactory(abi, bytecode, wallet);
      const contract = await factory.deploy();

      console.log(`\nContract deployed successfully!`.green);
      console.log(`Contract address: ${contract.target}`.cyan);
      console.log(
        `Explorer URL: ${network.explorer}/address/${contract.target}`.blue
      );
    } catch (error) {
      console.error(`Error deploying contract in iteration ${i + 1}: ${error.message}`.red);
    }
  }
}

module.exports = { deployContract };
