const truffleAssert = require('truffle-assertions');

const FailedCallDos_Attacker = artifacts.require("FailedCallDos_Attacker");
const FailedCallDos = artifacts.require("FailedCallDos");

let attacker, vulnerable;
const winner = "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF";

contract("FailedCallDos", (accounts) => {
	it("deploys the contracts", async () => {
		attacker = await FailedCallDos_Attacker.deployed();
		vulnerable = await FailedCallDos.deployed([
			attacker.address,
			winner
		]);
	});

	it("performs batch payout to winners including to the attacker", async () => {
		await truffleAssert.fails(
			vulnerable.payout()
		);
	});

	it("checks that an eligible winner did not get their payout", async () => {
		const balance = await web3.eth.getBalance(winner);
		assert.equal(balance, "0");
	});
});
