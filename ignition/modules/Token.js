const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ElectionModule = buildModule("ElectionModule", (m) => {
  const token = m.contract("Election");
  return { token };
});

module.exports = ElectionModule;
