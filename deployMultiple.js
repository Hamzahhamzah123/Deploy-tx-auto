require('dotenv').config(); // Ini akan memuat file .env
const { deployContract } = require("./src/deploy");
const fs = require("fs");
const path = require("path");

function getUserInput() {
    // Nilai default untuk token
    const defaultName = 'DefaultToken';
    const defaultSymbol = 'DTK';
    const defaultSupply = 1000000;

    return {
        name: defaultName,
        symbol: defaultSymbol,
        supply: defaultSupply,
    };
}

// Mengambil nilai default dari getUserInput
const { name, symbol, supply } = getUserInput();

// Konfigurasi jaringan
const networkConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "chains", "Testnet.json"), "utf8"));
const network = networkConfig[0]; // Mengambil jaringan pertama dari array

// Menjalankan deploy sebanyak 100 kali
deployContract(network, name, symbol, supply, 100);
