export default function ShowCandidate({ candidate }) {
  const makeTotalVotesReadable = (totalVotes) => {
    if (totalVotes >= 1e9) {
      return (totalVotes / 1e9).toFixed(1) + "B";
    } else if (totalVotes >= 1e6) {
      return (totalVotes / 1e6).toFixed(1) + "M";
    } else if (totalVotes >= 1e3) {
      return (totalVotes / 1e3).toFixed(1) + "K";
    } else {
      return totalVotes.toString();
    }
  };

  return (
    <div className="card">
      <div className="mt-12 font-bold">{candidate.name}</div>
      <div>
        <p className="line-clamp-3">{candidate.slogan}</p>
      </div>
      <div className="mt-12">
        <button className="rounded bg-indigo-500 text-white sm:py-2 sm:px-16">
          Vote
        </button>
        <div className="mt-2">
          {makeTotalVotesReadable(candidate.totalVotes)}
        </div>
      </div>
    </div>
  );
}
