import Web3 from "web3";
import ElectionABI from "../abi/Election.json";

function web3() {
  return new Web3(window.ethereum);
}

async function getCurrWalletAccount() {
  const accounts = await web3().eth.getAccounts();
  return accounts[0];
}

function getContract() {
  const web3js = web3();
  return new web3js.eth.Contract(ElectionABI.abi, ElectionABI.contractAddress);
}

export { getCurrWalletAccount, getContract };
