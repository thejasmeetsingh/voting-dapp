import { createContext, useCallback, useState } from "react";
import uploadFile from "../utils/ipfs";

const CandidateContext = createContext();

function Provider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = useCallback(async () => {
    setCandidates([
      {
        name: "Candidate 1",
        slogan: "Lorem Ipsum",
        totalVotes: 9000,
        logoHash: "",
      },
      {
        name: "Candidate 2",
        slogan: "Lorem Ipsum",
        totalVotes: 150,
        logoHash: "",
      },
      {
        name: "Candidate 3",
        slogan: "Lorem Ipsum",
        totalVotes: 10,
        logoHash: "",
      },
      {
        name: "Candidate 4",
        slogan: "Lorem Ipsum",
        totalVotes: 0,
        logoHash: "",
      },
    ]);
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
