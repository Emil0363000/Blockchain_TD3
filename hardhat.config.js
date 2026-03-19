import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.20",
  networks: {
    // Réseau local — rapide, gratuit, pour le dev
    ganache: {
      url: "http://127.0.0.1:8545",
      chainId: 1337
    },
    // Réseau Ethereum public de test — version finale
    sepolia: {
      url: process.env.ALCHEMY_URL,
      chainId: 11155111,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  }
};