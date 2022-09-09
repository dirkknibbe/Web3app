require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/iFM6D_woRtn8zAjMqFH_fK1_mo4OdauS",
      accounts: [
        "69200facc0fd3c6cacd5f5b97c315e269dbe12ad20b2671fa4751e5fbaeb6975",
      ],
    },
  },
};
