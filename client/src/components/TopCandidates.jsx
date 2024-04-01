export default function TopCandidates(params) {
  const candidates = [
    "Candidate 1",
    "Candidate 2",
    "Candidate 3",
    "Candidate 4",
    "Candidate 5",
    "Candidate 6",
    "Candidate 7",
    "Candidate 8",
    "Candidate 9",
    "Candidate 10",
  ];

  const renderCandidates = candidates.map((candidate, index) => {
    return <div key={index}>{candidate}</div>;
  });

  return <div>{renderCandidates}</div>;
}
