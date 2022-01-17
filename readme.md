## Description

Examples of known security vulnerabilities in Solidity code

## Install

```
npm i
```

## Test

```
npm test
```

Test result:

```
  Contract: FailedCallDos
    ✓ deploys the contracts
    ✓ performs batch payout to winners including to the attacker (1013ms)
    ✓ checks that an eligible winner did not get their payout (39ms)

  Contract: Reentrancy
    ✓ deploys the contracts - vulnerable with 10 ETH and attacker with 1 ETH (42ms)
    ✓ deposits 1 ETH from the attacker to the vulnerable contract (253ms)
    ✓ performs the attack (964ms)
    ✓ checks that the attacker now has 11 ETH

  Contract: UntrustedDelegatecall
    ✓ deploys the contracts
    ✓ checks the zero admin address (39ms)
    ✓ performs the attack (187ms)
    ✓ checks the updated admin address (70ms)


  11 passing (3s)
```
