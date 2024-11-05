const { deployContract } = require("./deploy");
const fs = require("fs");

// Membaca konfigurasi jaringan dari file JSON
const networkConfig = JSON.parse(fs.readFileSync("networkConfig.json", "utf8"));
const network = networkConfig[0]; // Mengambil jaringan pertama dari array

// Parameter token
const name = "TokenName"; // Sesuaikan nama token Anda
const symbol = "TKN"; // Sesuaikan simbol token Anda
const supply = 1000000; // Adjust the supply as needed

// Menjalankan deploy sebanyak 100 kali
deployContract(network, name, symbol, supply, 100);
