import { useContext } from "react";
import CandidateContext from "../context/candidate";

const useCandidateContext = () => {
  return useContext(CandidateContext);
};

export default useCandidateContext;
