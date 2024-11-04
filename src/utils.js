require('colors');
const fs = require('fs');
const readlineSync = require('readline-sync');

function loadNetworkConfig() {
  const filePath = `./chains/fhenix.json`;  // Gunakan fhenix.json secara langsung
  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error loading network configuration: ${error.message}`.red);
    process.exit(1);
  }
}


function getUserInput() {
  // Nilai default untuk token
  const defaultName = 'DefaultToken';
  const defaultSymbol = 'DTK';
  const defaultSupply = '1000000';

  // Menggunakan nilai default jika pengguna tidak memasukkan input
  const name = readlineSync.question(`Enter token name [${defaultName}]: `.cyan) || defaultName;
  const symbol = readlineSync.question(`Enter token symbol [${defaultSymbol}]: `.cyan) || defaultSymbol;
  const supply = readlineSync.question(`Enter token supply [${defaultSupply}]: `.cyan) || defaultSupply;

  return { name, symbol, supply };
}

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.rainbow);
  console.log('=       🚀🎮 EVM Auto Deploy 🎮🚀      ='.cyan.bold);
  console.log('=    Created by HappyCuanAirdrop 🧙♂️   ='.magenta);
  console.log('=   https://t.me/HappyCuanAirdrop 🌐   ='.blue);
  console.log('========================================'.rainbow);
  console.log();
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = { loadNetworkConfig, getUserInput, displayHeader, delay };
