// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Election {
    // State varriables
    address admin;
    uint256 candidateCount;
    bool startElection;
    bool endElection;

    // Initialize state varriables
    constructor() {
        admin = msg.sender;
        candidateCount = 0;
        startElection = false;
        endElection = false;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }

    // Modeling Candidate
    struct Candidate {
        uint256 id;
        uint256 voterCount;
        string name;
        string slogan;
    }
    mapping(uint256 => Candidate) public candidates;

    // Modeling Election detail
    struct ElectionDetail {
        string title;
        string description;
    }
    ElectionDetail electionDetail;

    // Modeling Voter
    struct Voter {
        string name;
        string Email;
        bool hasVoted;
    }
    mapping(address => Voter) public voters;

    function getStartElection() public view returns (bool) {
        return startElection;
    }

    function getEndElection() public view returns (bool) {
        return endElection;
    }

    function setStartElection() public onlyAdmin {
        startElection = true;
        endElection = false;
    }

    function setEndElection() public onlyAdmin {
        startElection = false;
        endElection = true;
    }

    // Allow admin to add a candidate
    function addCandidate(
        string memory _name,
        string memory _slogan
    ) public onlyAdmin {
        candidates[candidateCount] = Candidate(
            candidateCount,
            0,
            _name,
            _slogan
        );
        candidateCount++;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory _candidates = new Candidate[](candidateCount);

        for (uint256 index = 0; index < candidateCount; index++) {
            _candidates[index] = candidates[index];
        }

        return _candidates;
    }

    function getElectionDetail() public view returns (ElectionDetail memory) {
        return electionDetail;
    }

    // Allow admin to add election detail
    function setElectionDetail(
        string memory _title,
        string memory _description
    ) public onlyAdmin {
        electionDetail.title = _title;
        electionDetail.description = _description;
    }

    function addVoter(string memory _name, string memory _email) public {
        if (!voters[msg.sender].hasVoted) {
            voters[msg.sender] = Voter(_name, _email, false);
        }
    }

    function vote(uint256 candidateID) public {
        if (!voters[msg.sender].hasVoted) {
            candidates[candidateID].voterCount++;
            voters[msg.sender].hasVoted = true;
        }
    }

    function getElectionWinner() public view returns (Candidate memory) {
        Candidate memory _candidate;

        if (startElection != false && endElection != false) {
            uint256 maxVoteCount = 0;

            for (uint256 index = 0; index < candidateCount; index++) {
                if (candidates[index].voterCount > maxVoteCount) {
                    maxVoteCount = candidates[index].voterCount;
                    _candidate = candidates[index];
                }
            }
        }

        return _candidate;
    }
}
