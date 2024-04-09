//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BorrowingRequest {
    struct Request {
        address borrower;
        address lender;
        uint256 amount;
        bool accepted;
    }

    mapping(address => mapping(address => Request)) public requests;

    event RequestSent(
        address indexed borrower,
        address indexed lender,
        uint256 amount
    );
    event RequestAccepted(
        address indexed borrower,
        address indexed lender,
        uint256 amount
    );

    function sendRequest(address _lender, uint256 _amount) external {
        // Implement request sending logic
    }

    function acceptRequest(address _borrower) external {
        // Implement request acceptance logic
    }
}
