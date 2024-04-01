import AddCandidate from "./components/AddCandidate";
import CandidateList from "./components/CandidateList";
import ElectionDetail from "./components/ElectionDetail";
import TopCandidates from "./components/TopCandidates";

export default function App() {
  return (
    <div>
      <h1>Decentralized Election</h1>
      <ElectionDetail />
      <CandidateList />
      <AddCandidate />
      <TopCandidates />
    </div>
  );
}
