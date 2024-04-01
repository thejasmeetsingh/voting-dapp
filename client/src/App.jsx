import AddCandidate from "./components/AddCandidate";
import CandidateList from "./components/CandidateList";
import ElectionDetail from "./components/ElectionDetail";
import TopCandidates from "./components/TopCandidates";

export default function App() {
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
      <div className="grid grid-cols-2 gap-12 text-center">
        <div>
          <AddCandidate />
        </div>
        <div>
          <TopCandidates />
        </div>
      </div>
    </div>
  );
}
