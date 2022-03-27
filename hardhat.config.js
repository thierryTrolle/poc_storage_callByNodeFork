
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const alchemyUrl = process.env.URL_MUMBAI;

module.exports = {
  solidity: {
    version: "0.8.8",
  },
  networks: {
    hardhat: {
      forking: {
        url: alchemyUrl,
      }
    }
  }
}