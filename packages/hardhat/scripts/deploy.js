const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account: ", deployer.address);

  const CashChat = await ethers.getContractFactory("CashChat");

  const cUSDAddress = "0x874069fa1eb16d44d622f2e0ca25eea172369bc1";

  const cashChat = await CashChat.deploy(cUSDAddress);

  await cashChat.deployed();

  console.log("CashChat deployed to: ", cashChat.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
