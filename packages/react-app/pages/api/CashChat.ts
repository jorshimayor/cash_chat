import express from "express";
import { ethers } from "ethers";
import CashChatABI from "./CashChatABI.json"; // Replace with your ABI path
import cUSDABI from "./cUSDABI.json"; // Replace with your cUSD ABI path

const app = express();
app.use(express.json());

// Initialize ethers providers and contracts
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // Update with your Ethereum node URL
const signer = provider.getSigner();
const CashChatAddress = "YOUR_CASHCHAT_CONTRACT_ADDRESS"; // Replace with your CashChat contract address
const cUSDAddress = "YOUR_CUSD_CONTRACT_ADDRESS"; // Replace with your cUSD contract address

const cashChatContract = new ethers.Contract(
  CashChatAddress,
  CashChatABI,
  signer
);
const cUSDContract = new ethers.Contract(cUSDAddress, cUSDABI, signer);

// Transfer cUSD
app.post("/transfer", async (req: any, res: any) => {
  const { to, amount } = req.body;
  try {
    const tx = await cUSDContract.transfer(to, amount);
    await tx.wait();
    res.send("Transfer successful");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Create installment plan
app.post("/createInstallmentPlan", async (req: any, res: any) => {
  const { borrower, totalAmount, numInstallments } = req.body;
  try {
    const tx = await cashChatContract.createInstallmentPlan(
      borrower,
      totalAmount,
      numInstallments
    );
    await tx.wait();
    res.send("Installment plan created");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Pay installment
app.post("/payInstallment", async (req: any, res: any) => {
  const { borrower } = req.body;
  try {
    const tx = await cashChatContract.payInstallment(borrower);
    await tx.wait();
    res.send("Installment paid");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Create borrow request
app.post("/createBorrowRequest", async (req: any, res: any) => {
  const { lender, amount } = req.body;
  try {
    const tx = await cashChatContract.createBorrowRequest(lender, amount);
    await tx.wait();
    res.send("Borrow request created");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Accept borrow request
app.post("/acceptBorrowRequest", async (req: any, res: any) => {
  const { borrower } = req.body;
  try {
    const tx = await cashChatContract.acceptBorrowRequest(borrower);
    await tx.wait();
    res.send("Borrow request accepted");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Create invoice
app.post("/createInvoice", async (req: any, res: any) => {
  const { serviceProvider, amount } = req.body;
  try {
    const tx = await cashChatContract.createInvoice(serviceProvider, amount);
    await tx.wait();
    res.send("Invoice created");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Pay invoice
app.post("/payInvoice", async (req: any, res: any) => {
  const { id } = req.body;
  try {
    const tx = await cashChatContract.payInvoice(id, {
      value: ethers.utils.parseEther("1"),
    }); // Assuming you want to pay 1 Ether
    await tx.wait();
    res.send("Invoice paid");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Get invoice
app.get("/getInvoice/:id", async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const invoice = await cashChatContract.getInvoice(id);
    res.send(invoice);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
