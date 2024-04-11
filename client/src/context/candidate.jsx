import { createContext, useCallback, useState } from "react";
import Web3 from "web3";
import ElectionContract from "../abi/Election.json";
import uploadFile from "../utils/ipfs";

const CandidateContext = createContext();

function Provider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const web3 = new Web3(import.meta.env.VITE_WEB3_PROVIDER);
  const contract = new web3.eth.Contract(
    ElectionContract.abi,
    ElectionContract.contractAddress
  );

  const initWeb3 = useCallback(async () => {
    const accounts = await web3.eth.getAccounts();

    // Fetch candidate list from blockchain
    const candidateList = await contract.methods.getCandidates().call();
    setCandidates(
      candidateList.map((candidate, _) => {
        return { ...candidate, voterCount: Number(candidate.voterCount) };
      })
    );

    // Add Voter in blockchain
    await contract.methods
      .addVoter()
      .send({ from: accounts[0] })
      .on("receipt", (receipt) => {
        console.log("Voter Added: ", receipt);
      })
      .on("error", (error) => {
        console.log("Error while adding voter: ", error);
      });

    // Start Election
    await contract.methods
      .setStartElection()
      .send({ from: accounts[0] })
      .on("receipt", (receipt) => {
        console.log("Election Started: ", receipt);
      })
      .on("error", (error) => {
        console.log("Error while starting election: ", error);
      });
  }, []);

  const addCandidate = async (name, slogan, logo, voterCount = 0) => {
    const logoHash = await uploadFile(name, logo);

    if (logoHash) {
      const accounts = await web3.eth.getAccounts();

      // Add candidate in blockchain
      await contract.methods
        .addCandidate(name, slogan, logoHash)
        .send({ from: accounts[0] })
        .on("receipt", (receipt) => {
          console.log("Candidate Added");

          // Update candidate state
          setCandidates([
            ...candidates,
            { name, slogan, voterCount, logoHash },
          ]);
        })
        .on("error", (error) => {
          console.log("Error while adding candidate: ", error);
        });
    }
  };

  const updateCandidateVote = async (idx) => {
    const accounts = await web3.eth.getAccounts();

    // Update vote count on blockchain
    await contract.methods
      .vote(idx)
      .send({ from: accounts[0] })
      .on("receipt", (receipt) => {
        console.log("Voted!");

        // Update vote count in the state
        setCandidates(
          candidates.map((candidate, index) => {
            if (index == idx) {
              return { ...candidate, voterCount: candidate.voterCount + 1 };
            }
            return candidate;
          })
        );
      })
      .on("error", (error) => {
        console.log("Error caught while voting: ", error);
      });
  };

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        initWeb3,
        addCandidate,
        updateCandidateVote,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export { Provider };
export default CandidateContext;
