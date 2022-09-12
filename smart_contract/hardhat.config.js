require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/iFM6D_woRtn8zAjMqFH_fK1_mo4OdauS",
      accounts: [`${process.env(ACCOUNT)}`],
    },
  },
};
