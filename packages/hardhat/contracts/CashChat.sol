// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CashChat {
    IERC20 public cUSD;

    struct Installment {
        uint256 totalAmount;
        uint256 installmentsLeft;
        uint256 installmentAmount;
    }

    struct BorrowRequest {
        address borrower;
        address lender;
        uint256 amount;
        bool isAccepted;
    }

    struct Invoice {
        uint256 id;
        address payable client;
        address payable serviceProvider;
        uint256 amount;
        bool paid;
    }

    mapping(address => Installment) public installmentPlans;
    mapping(address => BorrowRequest) public borrowRequests;

    Invoice[] public invoices;
    uint256 public nextInvoiceId = 1;

    event InstallmentPlanCreated(
        address indexed borrower,
        uint256 totalAmount,
        uint256 numInstallments
    );
    event InstallmentPaid(address indexed borrower, uint256 installmentAmount);
    event BorrowRequestCreated(
        address indexed borrower,
        address indexed lender,
        uint256 amount
    );
    event BorrowRequestAccepted(address indexed borrower);
    event InvoiceCreated(
        uint256 id,
        address indexed client,
        address indexed serviceProvider,
        uint256 amount
    );
    event InvoicePaid(uint256 id);

    constructor(address _cUSD) {
        cUSD = IERC20(_cUSD);
    }

    function transfer(address to, uint256 amount) external {
        require(cUSD.transferFrom(msg.sender, to, amount), "Transfer failed");
    }

    function createInstallmentPlan(
        address borrower,
        uint256 totalAmount,
        uint256 numInstallments
    ) external {
        require(
            cUSD.transferFrom(msg.sender, address(this), totalAmount),
            "Transfer failed"
        );
        installmentPlans[borrower] = Installment(
            totalAmount,
            numInstallments,
            totalAmount / numInstallments
        );
        emit InstallmentPlanCreated(borrower, totalAmount, numInstallments);
    }

    function payInstallment(address borrower) external {
        Installment storage plan = installmentPlans[borrower];
        require(plan.installmentsLeft > 0, "All installments paid");
        require(
            cUSD.transferFrom(borrower, msg.sender, plan.installmentAmount),
            "Transfer failed"
        );
        plan.installmentsLeft--;
        emit InstallmentPaid(borrower, plan.installmentAmount);
    }

    function createBorrowRequest(address lender, uint256 amount) external {
        borrowRequests[msg.sender] = BorrowRequest(
            msg.sender,
            lender,
            amount,
            false
        );
        emit BorrowRequestCreated(msg.sender, lender, amount);
    }

    function acceptBorrowRequest(address borrower) external {
        BorrowRequest storage request = borrowRequests[borrower];
        require(
            msg.sender == request.lender,
            "Only the lender can accept the borrow request"
        );
        require(
            cUSD.transferFrom(request.lender, request.borrower, request.amount),
            "Transfer failed"
        );
        request.isAccepted = true;
        emit BorrowRequestAccepted(borrower);
    }

    function createInvoice(
        address payable serviceProvider,
        uint256 amount
    ) external {
        invoices.push(
            Invoice(
                nextInvoiceId,
                payable(msg.sender),
                serviceProvider,
                amount,
                false
            )
        );
        emit InvoiceCreated(nextInvoiceId, msg.sender, serviceProvider, amount);
        nextInvoiceId++;
    }

    function payInvoice(uint256 id) external payable {
        require(id > 0 && id < nextInvoiceId, "Invalid invoice ID");
        Invoice storage invoice = invoices[id - 1];
        require(
            msg.sender == invoice.client,
            "Only the client can pay the invoice"
        );
        require(msg.value == invoice.amount, "Incorrect payment amount");
        invoice.paid = true;
        invoice.serviceProvider.transfer(msg.value);
        emit InvoicePaid(id);
    }

    function getInvoice(uint256 id) external view returns (Invoice memory) {
        require(id > 0 && id < nextInvoiceId, "Invalid invoice ID");
        return invoices[id - 1];
    }
}
