// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Reentrancy {
	mapping(address => uint) public balances;

	constructor() payable {}

	function deposit() external payable {
		balances[msg.sender] += msg.value;
	}

	function withdraw() external {
		uint balance = balances[msg.sender];
		payable(msg.sender).call{value: balance}("");
		balances[msg.sender] = 0;
	}
}
