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
  FailedCallDos
    ✔ deploys the contracts (904ms)
    ✔ performs batch payout to winners including to the attacker
    ✔ checks that an eligible winner did not get their payout

  Reentrancy
    ✔ deploys the contracts - vulnerable with 10 ETH and attacker with 1 ETH (56ms)
    ✔ deposits 1 ETH from the attacker to the vulnerable contract
    ✔ performs the attack (58ms)
    ✔ checks that the attacker now has 11 ETH

  UntrustedDelegatecall
    ✔ deploys the contracts (42ms)
    ✔ checks the zero admin address
    ✔ performs the attack
    ✔ checks the updated admin address


  11 passing (1s)
```
