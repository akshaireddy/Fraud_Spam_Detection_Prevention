// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FraudDetection {
    address public owner;
    uint256 public reportThreshold; // Number of reports needed to flag an address
    mapping(address => uint256) public reportCounts;
    mapping(address => bool) public flaggedAddresses;

    constructor(uint256 _reportThreshold) {
        owner = msg.sender;
        reportThreshold = _reportThreshold;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function reportAddress(address _reportedAddress) external {
        require(!flaggedAddresses[_reportedAddress], "Address is already flagged");
        require(msg.sender != _reportedAddress, "You cannot report your own address");

        reportCounts[_reportedAddress]++;
        if (reportCounts[_reportedAddress] >= reportThreshold) {
            flaggedAddresses[_reportedAddress] = true;
        }
    }

    function unflagAddress(address _addressToUnflag) external onlyOwner {
        flaggedAddresses[_addressToUnflag] = false;
        reportCounts[_addressToUnflag] = 0;
    }

    // Add more functions and logic as needed for your specific use case
}
