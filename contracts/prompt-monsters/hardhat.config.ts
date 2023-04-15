import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import { HardhatUserConfig } from "hardhat/config";

require("dotenv").config();

const { POLYGON_MUMBAI_ALCHEMY_KEY, PRIVATE_KEY, POLYGONSCAN_API } =
  process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY as string],
    },
    linea: {
      url: `https://rpc.goerli.linea.build/`,
      accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API,
  },
};

export default config;
