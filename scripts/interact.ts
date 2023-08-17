require('dotenv').config();
import { ethers } from "hardhat";
const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const fraudDetectionAddress = process.env.CONTRACT_ADDRESS; // Update with your deployed contract address
  const FraudDetection = await hre.ethers.getContractFactory('FraudDetection');
  const fraudDetection = await FraudDetection.attach(fraudDetectionAddress);

  // Interact with the contract, report an address
  await fraudDetection.reportAddress('0x70997970c51812dc3a010c7d01b50e0d17dc79c8');

  console.log('Address reported successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
