const { expect } = require("chai");

describe("FailedCallDos", () => {
	let attacker, vulnerable;
	const winner = "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF";

	it("deploys the contracts", async () => {
		const AttackerFactory = await ethers.getContractFactory("FailedCallDos_Attacker");
		const VulnerableFactory = await ethers.getContractFactory("FailedCallDos");

		attacker = await AttackerFactory.deploy();
		vulnerable = await VulnerableFactory.deploy([
			attacker.address,
			winner
		]);
	});

	it("performs batch payout to winners including to the attacker", async () => {
		await expect(
			vulnerable.payout()
		).to.be.reverted;
	});

	it("checks that an eligible winner did not get their payout", async () => {
		const balance = await ethers.provider.getBalance(winner);
		expect(balance).to.equal(0);
	});
});
