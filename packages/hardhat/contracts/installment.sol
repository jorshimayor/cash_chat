//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InstallmentPlan {
    struct Plan {
        uint256 totalAmount;
        uint256 remainingAmount;
        uint256 installmentFrequency; // in seconds
        uint256 lastPaymentTimestamp;
        address recipient;
        address sender;
    }

    mapping(address => mapping(address => Plan)) public plans;

    event InstallmentPaid(
        address indexed sender,
        address indexed recipient,
        uint256 amount
    );

    function createInstallmentPlan(
        address _sender,
        address _recipient,
        uint256 _totalAmount,
        uint256 _installmentFrequency
    ) external {
        // Implement plan creation logic
    }

    function makePayment(address _recipient) external payable {
        // Implement payment logic
    }
}
