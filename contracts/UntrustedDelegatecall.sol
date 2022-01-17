// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract UntrustedDelegatecall {
	address public admin;

	function delegate(address _target, bytes calldata _data) external {
		_target.delegatecall(_data);
	}
}
