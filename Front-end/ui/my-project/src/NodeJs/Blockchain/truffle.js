module.exports = {
  networks: {
    localhost: {
       host: "localhost",
       port: 8545,
       network_id: "*"
    },
    geth: {
      host: "localhost",
      port: 8545,
      network_id: "987",
      gas: 4600000
    }
  }
};