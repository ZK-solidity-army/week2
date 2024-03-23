import { createPublicClient, http, hexToString } from "viem";
import { sepolia } from "viem/chains";

import { abi } from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import {viemConfiguration} from "../../configs/viemConfig";
import {connectionConfiguration} from "../../configs/rpcConfig";


async function main() {
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 1)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0] as `0x${string}`;

  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  await readContract(contractAddress);
}

async function readContract(contractAddress: `0x${string}`) {
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`${connectionConfiguration.alchemyBaseUri}/${viemConfiguration.ALCHEMY_API_KEY}`),
  });
  const winningProposal = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "winningProposal",
  })) as any[];
  const winnerName = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "winnerName",
  })) as `0x${string}`;
  const name = hexToString(winnerName, { size: 32 });
  console.log("Winning proposal:", name, winningProposal);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
