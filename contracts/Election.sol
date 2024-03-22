// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Election {
    // State varriables
    address admin;
    uint candidateCount;
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

    modifier isValidVoter(address _voterAddress) {
        require(
            startElection == true &&
                endElection == false &&
                !voters[_voterAddress].hasVoted
        );
        _;
    }

    // Modeling Candidate
    struct Candidate {
        uint id;
        uint voterCount;
        string name;
        string slogan;
    }
    mapping(uint => Candidate) candidates;

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
    mapping(address => Voter) voters;

    // Get info regarding election is started or not
    function getStartElection() public view returns (bool) {
        return startElection;
    }

    // Get info regarding election is ended or not
    function getEndElection() public view returns (bool) {
        return endElection;
    }

    // Start election
    function setStartElection() public onlyAdmin {
        startElection = true;
        endElection = false;
    }

    // End election
    function setEndElection() public onlyAdmin {
        startElection = false;
        endElection = true;
    }

    // Add a candidate
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

    // Get all candidates added by admin
    function getCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory _candidates = new Candidate[](candidateCount);

        for (uint index = 0; index < candidateCount; index++) {
            _candidates[index] = candidates[index];
        }

        return _candidates;
    }

    // Retrive election details
    function getElectionDetail() public view returns (ElectionDetail memory) {
        return electionDetail;
    }

    // Add election details
    function setElectionDetail(
        string memory _title,
        string memory _description
    ) public onlyAdmin {
        electionDetail.title = _title;
        electionDetail.description = _description;
    }

    // Add a voter
    function addVoter(
        string memory _name,
        string memory _email
    ) public isValidVoter(msg.sender) {
        voters[msg.sender] = Voter(_name, _email, false);
    }

    // Give vote to a candidate
    function vote(uint candidateID) public isValidVoter(msg.sender) {
        candidates[candidateID].voterCount++;
        voters[msg.sender].hasVoted = true;
    }
}