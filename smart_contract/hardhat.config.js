require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/qj0Xun4aBLtqsK0pP1KbRJe9KSyYkeAI",
      accounts: [
        "69200facc0fd3c6cacd5f5b97c315e269dbe12ad20b2671fa4751e5fbaeb6975",
      ],
    },
  },
};
