# Ballot project

## Usage

`npx ts-node ./scripts/viem/*.ts ...`
# Voting System Scripts

This repository contains scripts to interact with a voting system smart contract on the Ethereum blockchain.

## Prerequisites

Before running the scripts, ensure you have the following installed:

- Node.js
- TypeScript (`npm install -g typescript`)

# Voting System Scripts

## Deploy

To deploy the voting system contract with predefined proposals:

```bash
npm run deploy
```

### Test

To run tests:

```bash
npm test
```

### Vote

To cast a vote for a specific proposal:

```bash
npm run vote <address> <proposalIndex>
```

Example:

```bash
npm run vote 0x123456789abcdef123456789abcdef123456789 1
```

## Delegate

To delegate your vote to another address for a specific proposal:

```bash
npm run delegate <delegateAddress> <proposalIndex>
```

Example:

```bash
npm run delegate 0xabcdef123456789abcdef123456789abcdef123 2
```

## Winning Proposal

To get the winning proposal from a deployed voting system contract:

```bash
npm run winningProposal <address>
```

Example:

```bash
npm run winningProposal 0x123456789abcdef123456789abcdef123456789
```

## Give Right to Vote

To give the right to vote to a specific address:

```bash
npm run giveRightToVote <address> <addressToWhom>
```

Example:

```bash
npm run giveRightToVote 0x123456789abcdef123456789abcdef123456789 0xabcdef123456789abcdef123456789abcdef123
```