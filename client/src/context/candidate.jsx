import { createContext, useCallback, useState } from "react";

const CandidateContext = createContext();

function Provider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = useCallback(async () => {
    setCandidates([
      {
        name: "Candidate 1",
        slogan: "Lorem Ipsum",
        totalVotes: 9000,
      },
      {
        name: "Candidate 2",
        slogan: "Lorem Ipsum",
        totalVotes: 150,
      },
      {
        name: "Candidate 3",
        slogan: "Lorem Ipsum",
        totalVotes: 10,
      },
      {
        name: "Candidate 4",
        slogan: "Lorem Ipsum",
        totalVotes: 0,
      },
    ]);
  }, []);

  const addCandidate = async (name, slogan, totalVotes = 0) => {
    setCandidates([...candidates, { name, slogan, totalVotes }]);
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
