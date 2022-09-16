const { expect } = require("chai");

describe("Reentrancy", () => {
	let vulnerable, attacker;

	it("deploys the contracts - vulnerable with 10 ETH and attacker with 1 ETH", async () => {
		const VulnerableFactory = await ethers.getContractFactory("Reentrancy");
		const AttackerFactory = await ethers.getContractFactory("Reentrancy_Attacker");

		vulnerable = await VulnerableFactory.deploy({
			value: ethers.utils.parseEther("10")
		});
		attacker = await AttackerFactory.deploy(vulnerable.address, {
			value: ethers.utils.parseEther("1")
		});
	});

	it("deposits 1 ETH from the attacker to the vulnerable contract", async () => {
		await attacker.deposit();
	});

	it("performs the attack", async () => {
		await attacker.startAttack();
	});

	it("checks that the attacker now has 11 ETH", async () => {
		const balance = await ethers.provider.getBalance(attacker.address);
		expect(balance).to.equal(ethers.utils.parseEther("11"));
	});
});
