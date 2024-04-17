import useCandidateContext from "../hooks/use-candidate-context";

export default function ShowCandidate({ index, candidate }) {
  const { updateCandidateVote } = useCandidateContext();
  const logoURL = `${import.meta.env.VITE_GATEWAY_URL}/ipfs/${
    candidate.logoHash
  }`;

  const makeTotalVotesReadable = (voterCount) => {
    if (voterCount >= 1e9) {
      return (voterCount / 1e9).toFixed(1) + "B";
    } else if (voterCount >= 1e6) {
      return (voterCount / 1e6).toFixed(1) + "M";
    } else if (voterCount >= 1e3) {
      return (voterCount / 1e3).toFixed(1) + "K";
    } else {
      return voterCount.toString();
    }
  };

  return (
    <div className="candidate-card">
      <div className="grid grid-rows-4 gap-3">
        <div className="row-span-2">
          <img
            className="rounded sm:w-60 sm:h-20"
            src={logoURL}
            alt={candidate.name}
          />
        </div>
        <div>
          <div className="font-bold">{candidate.name}</div>
          <div>
            <p className="line-clamp-3">{candidate.slogan}</p>
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={(e) => {
                updateCandidateVote(index);
              }}
              className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Vote
            </button>
            <div className="mt-2">
              {makeTotalVotesReadable(candidate.voterCount)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
