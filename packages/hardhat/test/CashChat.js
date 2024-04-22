const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CashChat", function () {

  let CashChat, cashChat, cUSD, owner, addr1, addr2;

  beforeEach(async () => {

    // Deploy mock cUSD token
    const ERC20 = await ethers.getContractFactory("IERC20");
    cUSD = await ERC20.deploy("cUSD", "cUSD");

    // Deploy CashChat contract
    CashChat = await ethers.getContractFactory("CashChat");
    cashChat = await CashChat.deploy(cUSD.address);
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });

  describe("Transfer", function () {
    it("Should transfer tokens", async function () {
      await cUSD.mint(addr1.address, ethers.utils.parseEther("100"));
      await cUSD
        .connect(addr1)
        .approve(cashChat.address, ethers.utils.parseEther("50"));
      await cashChat
        .connect(addr1)
        .transfer(addr2.address, ethers.utils.parseEther("50"));
      expect(await cUSD.balanceOf(addr2.address)).to.equal(
        ethers.utils.parseEther("50")
      );
    });
  });

  describe("Installment Plan", function () {
    it("Should create an installment plan", async function () {
      await cUSD.mint(addr1.address, ethers.utils.parseEther("100"));
      await cUSD
        .connect(addr1)
        .approve(cashChat.address, ethers.utils.parseEther("100"));
      await cashChat
        .connect(addr1)
        .createInstallmentPlan(
          addr2.address,
          ethers.utils.parseEther("100"),
          4
        );
      const plan = await cashChat.installmentPlans(addr2.address);
      expect(plan.totalAmount).to.equal(ethers.utils.parseEther("100"));
      expect(plan.installmentsLeft).to.equal(4);
    });

    it("Should pay an installment", async function () {
      await cUSD.mint(addr2.address, ethers.utils.parseEther("100"));
      await cUSD
        .connect(addr2)
        .approve(cashChat.address, ethers.utils.parseEther("25"));
      await cashChat.connect(addr2).payInstallment(addr2.address);
      const plan = await cashChat.installmentPlans(addr2.address);
      expect(plan.installmentsLeft).to.equal(3);
    });
  });

  describe("Borrow Request", function () {
    it("Should create a borrow request", async function () {
      await cUSD.mint(addr1.address, ethers.utils.parseEther("100"));
      await cUSD
        .connect(addr1)
        .approve(cashChat.address, ethers.utils.parseEther("50"));
      await cashChat
        .connect(addr1)
        .createBorrowRequest(addr2.address, ethers.utils.parseEther("50"));
      const request = await cashChat.borrowRequests(addr1.address);
      expect(request.amount).to.equal(ethers.utils.parseEther("50"));
      expect(request.isAccepted).to.be.false;
    });

    it("Should accept a borrow request", async function () {
      await cUSD.mint(addr2.address, ethers.utils.parseEther("100"));
      await cUSD
        .connect(addr2)
        .approve(cashChat.address, ethers.utils.parseEther("50"));
      await cashChat
        .connect(addr2)
        .createBorrowRequest(addr1.address, ethers.utils.parseEther("50"));
      await cashChat.connect(addr1).acceptBorrowRequest(addr2.address);
      const request = await cashChat.borrowRequests(addr2.address);
      expect(request.isAccepted).to.be.true;
    });
  });

  describe("Invoicing", function () {
    it("Should create and pay an invoice", async function () {
      await cashChat
        .connect(addr1)
        .createInvoice(addr2.address, ethers.utils.parseEther("1.0"));
      await cUSD.mint(addr2.address, ethers.utils.parseEther("2.0"));
      const tx = await cashChat
        .connect(addr2)
        .payInvoice(1, { value: ethers.utils.parseEther("1.0") });
      await tx.wait();
      const invoice = await cashChat.getInvoice(1);
      expect(invoice.paid).to.be.true;
    });
    it("Should get an invoice", async function () {
      const invoice = await cashChat.getInvoice(1);
      expect(invoice.id).to.equal(1);
    });
  });

});