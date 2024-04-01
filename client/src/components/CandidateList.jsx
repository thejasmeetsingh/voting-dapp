import ShowCandidate from "./ShowCandidate";

export default function CandidateList(params) {
  const candidates = [
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
    {
      name: "Candidate 5",
      slogan: "Lorem Ipsum",
      totalVotes: 0,
    },
  ];

  const renderCandidates = candidates.map((candidate, index) => {
    return <ShowCandidate key={index} candidate={candidate} />;
  });

  return (
    <div className="grid grid-cols-4 gap-4 text-center">{renderCandidates}</div>
  );
}
