import Web3 from "web3";
import ElectionContract from "../abi/Election.json";

function loadWeb3() {
  if (!window.ethereum) {
    alert("Please install metamask");
    return;
  }
  return new Web3(window.ethereum);
}

async function getCurrWalletAccount() {
  const accounts = await loadWeb3().eth.getAccounts();
  return accounts[0];
}

function getContract() {
  const web3 = loadWeb3();
  return new web3.eth.Contract(
    ElectionContract.abi,
    ElectionContract.contractAddress
  );
}

export { getCurrWalletAccount, getContract };
