const SmartContract = artifacts.require("TheArmyApes"); // Change this to what your Contract Name is in Solidity

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "TheArmyApes", "ARA", "https://"); //
};
