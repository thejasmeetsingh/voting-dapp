export default function ShowCandidate({ candidate }) {
  return (
    <div>
      <div>{candidate.name}</div>
      <div>{candidate.slogan}</div>
      <div>
        <button>Vote</button>
      </div>
      <div>{candidate.totalVotes}</div>
    </div>
  );
}
