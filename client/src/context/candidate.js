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

  const addCandidate = async (name, slogan) => {
    setCandidates([...candidates, { name, slogan, totalVotes: 0 }]);
  };

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        fetchCandidates,
        addCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export { Provider };
export default CandidateContext;
