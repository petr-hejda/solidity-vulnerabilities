const FailedCallDos_Attacker = artifacts.require("FailedCallDos_Attacker");
const FailedCallDos = artifacts.require("FailedCallDos");

const winner = "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF";

module.exports = async (deployer) => {
	await deployer.deploy(FailedCallDos_Attacker);
	const attacker = await FailedCallDos_Attacker.deployed();

	await deployer.deploy(FailedCallDos, [attacker.address, winner]);
};
