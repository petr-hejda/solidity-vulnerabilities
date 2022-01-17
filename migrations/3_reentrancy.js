const Reentrancy = artifacts.require("Reentrancy");
const Reentrancy_Attacker = artifacts.require("Reentrancy_Attacker");

module.exports = async (deployer) => {
	await deployer.deploy(Reentrancy, {
		value: web3.utils.toWei("10", "ether")
	});
	const reentrancy = await Reentrancy.deployed();

	await deployer.deploy(Reentrancy_Attacker, reentrancy.address, {
		value: web3.utils.toWei("1", "ether")
	});
};
