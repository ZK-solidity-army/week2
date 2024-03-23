import {createPublicClient, createWalletClient, http} from "viem";
import {sepolia} from "viem/chains";
import {privateKeyToAccount} from "viem/accounts";

/** FOR READ CONTRACTS*/
export const publicClient = createPublicClient({
    batch: {
        multicall: true,
    },
    chain: sepolia,
    transport: http(),
})

/** FOR WRITE CONTRACTS*/
export type HexStringType = `0x${string}`;

const privateKey: HexStringType = `0x${process.env.PRIVATE_KEY}`;
const account = privateKeyToAccount(privateKey)
export const privateClient = createWalletClient({
    account,
    chain: sepolia,
    transport: http()
})
