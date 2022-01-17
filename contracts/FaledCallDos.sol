// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract FailedCallDos {
	address[] winners;

	constructor (address[] memory _winners) payable {
		winners = _winners;
	}

	function payout() external {
		uint256 amount = address(this).balance / winners.length;
		for(uint256 i = 0; i < winners.length; i++) {
			payable(winners[i]).transfer(amount);
		}
	}
}
