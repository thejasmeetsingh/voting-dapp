import { createContext, useCallback, useState } from "react";
import { getCurrWalletAccount, getContract } from "../utils/web3";
import uploadFile from "../utils/ipfs";

const CandidateContext = createContext();

function Provider({ children }) {
  const [candidates, setCandidates] = useState([]);
  const contract = getContract();

  const fetchCandidates = useCallback(async () => {
    const candidateList = await contract.methods.getCandidates().call();

    for (let index = 0; index < candidateList.length; index++) {
      setCandidates([
        ...candidates,
        {
          name: candidateList[index].name,
          slogan: candidateList[index].slogan,
          totalVotes: candidateList[index].voterCount,
          logoHash: candidateList[index].logoHash,
        },
      ]);
    }
  }, []);

  const addCandidate = async (name, slogan, logo, totalVotes = 0) => {
    const logoHash = await uploadFile(name, logo);
    if (logoHash) {
      setCandidates([...candidates, { name, slogan, totalVotes, logoHash }]);
    }
  };

  const updateCandidateVote = async (idx) => {
    setCandidates(
      candidates.map((candidate, index) => {
        if (index == idx) {
          return { ...candidate, totalVotes: candidate.totalVotes + 1 };
        }
        return candidate;
      })
    );
  };

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        fetchCandidates,
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
