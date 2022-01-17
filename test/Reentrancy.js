const Reentrancy = artifacts.require("Reentrancy");
const Reentrancy_Attacker = artifacts.require("Reentrancy_Attacker");

let vulnerable, attacker;

contract("Reentrancy", () => {
	it("deploys the contracts - vulnerable with 10 ETH and attacker with 1 ETH", async () => {
		vulnerable = await Reentrancy.deployed({
			value: web3.utils.toWei("10", "ether")
		});
		attacker = await Reentrancy_Attacker.deployed(vulnerable.address, {
			value: web3.utils.toWei("1", "ether")
		});
	});

	it("deposits 1 ETH from the attacker to the vulnerable contract", async () => {
		await attacker.deposit();
	});

	it("performs the attack", async () => {
		await attacker.startAttack();
	});

	it("checks that the attacker now has 11 ETH", async () => {
		const balance = await web3.eth.getBalance(attacker.address);
		assert.equal(balance, web3.utils.toWei("11", "ether"));
	});
});
