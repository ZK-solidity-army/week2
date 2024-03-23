import * as dotenv from "dotenv";
dotenv.config();

const config = {
  PRIVATE_KEY: process.env.PRIVATE_KEY || "",
  ALCHEMY_KEY: process.env.ALCHEMY_API_KEY || "",
  ALCHEMY_URL: `https://eth-sepolia.g.alchemy.com/v2/${
    process.env.ALCHEMY_API_KEY || ""
  }`,
};

export default config;
