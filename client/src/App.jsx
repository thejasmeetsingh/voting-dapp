import { useEffect } from "react";
import AddCandidate from "./components/AddCandidate";
import CandidateList from "./components/CandidateList";
import ElectionDetail from "./components/ElectionDetail";
import useCandidateContext from "./hooks/use-candidate-context";

export default function App() {
  const { initWeb3 } = useCandidateContext();

  useEffect(() => {
    initWeb3();
  }, []);

  return (
    <div className="md:container md:mx-auto m-8">
      <h1 className="text-6xl text-center font-bold uppercase mb-20">
        Decentralized Election
      </h1>
      <div className="mb-8">
        <ElectionDetail />
      </div>
      <div className="mb-8">
        <CandidateList />
      </div>
      <div>
        <AddCandidate />
      </div>
    </div>
  );
}
