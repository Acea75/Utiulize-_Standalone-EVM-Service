import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address, "Balance:", (await deployer.getBalance()).toString());

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();

  console.log("Counter deployed to:", await counter.getAddress());

  const tx = await counter.increment();
  await tx.wait();
  console.log("Counter value:", (await counter.value()).toString());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});