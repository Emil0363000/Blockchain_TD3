import pkg from "hardhat";
const { ethers, network } = pkg;

async function main() {
  console.log("Déploiement de MonContrat...");

  const Factory = await ethers.getContractFactory("MonContrat");
  const contrat = await Factory.deploy();

  await contrat.waitForDeployment();
  const adresse = await contrat.getAddress();

  console.log("✅ Contrat déployé à :", adresse);

  if (network.name === "sepolia") {
    console.log("Etherscan :", `https://sepolia.etherscan.io/address/${adresse}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});