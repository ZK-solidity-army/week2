import * as dotenv from "dotenv";
dotenv.config();

export const deployerPrivateKey = process.env.PRIVATE_KEY || "";
export const providerApiKey = process.env.ALCHEMY_API_KEY || "";
