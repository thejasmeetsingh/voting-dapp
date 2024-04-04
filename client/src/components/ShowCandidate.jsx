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
    <div className="candidate-card">
      <div className="mt-12 font-bold">{candidate.name}</div>
      <div>
        <p className="line-clamp-3">{candidate.slogan}</p>
      </div>
      <div className="mt-12">
        <button className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
          Vote
        </button>
        <div className="mt-2">
          {makeTotalVotesReadable(candidate.totalVotes)}
        </div>
      </div>
    </div>
  );
}
