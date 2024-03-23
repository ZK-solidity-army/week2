import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";

import config from "../../config";

async function main() {
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0] as `0x${string}`;
  const voterAddress = parameters[1] as `0x${string}`;

  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  if (!/^0x[a-fA-F0-9]{40}$/.test(voterAddress))
    throw new Error("Invalid voter address");

  await giveRightToVote(contractAddress, voterAddress);
}

async function giveRightToVote(
  contractAddress: `0x${string}`,
  voterAddress: `0x${string}`
) {
  const account = privateKeyToAccount(`0x${config.PRIVATE_KEY}`);
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(config.ALCHEMY_URL),
  });
  const walletClient = createWalletClient({
    account,
    chain: sepolia,
    transport: http(config.ALCHEMY_URL),
  });

  // machinery
  const hash = await walletClient.writeContract({
    address: contractAddress as `0x${string}`,
    abi,
    functionName: "giveRightToVote",
    args: [voterAddress],
  });
  console.log("Transaction hash:", hash);
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("Transaction confirmed", { receipt });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
