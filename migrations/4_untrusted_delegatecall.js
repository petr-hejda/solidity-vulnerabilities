const UntrustedDelegatecall = artifacts.require("UntrustedDelegatecall");
const UntrustedDelegatecall_Attacker = artifacts.require("UntrustedDelegatecall_Attacker");

module.exports = async (deployer) => {
	await deployer.deploy(UntrustedDelegatecall);
	await deployer.deploy(UntrustedDelegatecall_Attacker);
};
