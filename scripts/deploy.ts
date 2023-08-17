require('dotenv').config();
const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  const FraudDetection = await hre.ethers.getContractFactory('FraudDetection');
  const fraudDetection = await FraudDetection.deploy(2); // Example report threshold

  await fraudDetection.deployed();

  console.log('FraudDetection contract deployed to:', fraudDetection.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
