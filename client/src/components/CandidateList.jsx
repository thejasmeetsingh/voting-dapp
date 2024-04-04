import useCandidateContext from "../hooks/use-candidate-context";
import ShowCandidate from "./ShowCandidate";

export default function CandidateList(params) {
  const { candidates } = useCandidateContext();

  const renderCandidates = candidates.map((candidate, index) => {
    return <ShowCandidate key={index} index={index} candidate={candidate} />;
  });

  return (
    <div className="grid sm:grid-cols-4 gap-4 text-center">
      {renderCandidates}
    </div>
  );
}
