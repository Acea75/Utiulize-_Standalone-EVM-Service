import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  it("should start at 0", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();
    expect(await counter.value()).to.equal(0);
  });

  it("should increment correctly", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();

    await counter.increment();
    expect(await counter.value()).to.equal(1);
  });

  it("should set value correctly", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();

    await counter.set(42);
    expect(await counter.value()).to.equal(42);
  });
});
