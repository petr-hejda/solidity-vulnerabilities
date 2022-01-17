// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract FailedCallDos_Attacker {
	receive() external payable {
		revert();
	}
}
