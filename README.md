# Lien contrat Etherscan
https://sepolia.etherscan.io/address/0x123Ec14DE161F3b114887BDC27b67Fed65AaF95a

# Documentation

## Introduction 
Ce document décrit le processus complet de création, test et déploiement d’un smart contract en Solidity, ainsi que son intégration avec un frontend.

## Objectifs 
  - Un smart contract fonctionnel
  - Déployé sur le réseau Sepolia
  - Connecté à un frontend React

## Stacks techniques 
  - Solidity 
  - Hardhat 
  - Ganache 
  - Alchemy
  - Sepolia 
  - Ethers.js 
  - React 

## Cloner le projet

### Cloner le projet
git clone https://github.com/Emil0363000/Blockchain_TD3.git

### Installer les dépendances
npm install

### Structure
contracts/
scripts/
test/
hardhat.config.js
package.json

## Variables d'envrionnement
Créer un fichier .env à la racine :
ALCHEMY_URL=https://eth-sepolia.g.alchemy.com/v2/TA_CLE
PRIVATE_KEY=0xTA_CLE_PRIVEE

Créer un fichier .gitignore et inclure .env

## Lancer Ganache
Ouvrir Ganache et vérifier que l'id chain soit 1337 et que le port soit 8545

## Compiler 
npx hardhat compile

## Test en local 
npx hardhat console --network ganache*

const Factory = await ethers.getContractFactory("MonContrat")
const contrat = await Factory.deploy()
await contrat.waitForDeployment()
await contrat.getAddress() // quelque chose comme "0xAbCd..."
await contrat.lireCompteur() // doit retourner 0n
const tx = await contrat.agir(5)
await tx.wait()
await contrat.lireCompteur() // doit retourner 5n
await contrat.agir(0) 

## Déployer sur Ganache
npx hardhat run scripts/deploy.js --network ganache

Noter l'adresse du contrat

## Récupérer ABI
Copier le contenu de abi.json

## Connecter le frontend
Dans le projet React: 
CONTRACT_ADDRESS = "adresse_ganache"
Et copiez ABI dans src/abi.json

## Déployer sur Sepolia 
npx hardhat run scripts/deploy.js --network sepolia

Noter l'adresse du contrat

## Connecter au frontend 
CONTRACT_ADDRESS = "adresse_sepolia"
CHAIN_ID = 11155111
