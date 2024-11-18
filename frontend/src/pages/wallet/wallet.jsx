import React, { useState } from 'react';
import './wallet.css';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);

  const updateBalance = (newAmount) => {
    setBalance(newAmount);
  };

  const openPaymentModal = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const completePayment = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Invalid payment amount!");
      return;
    }

    // Update balance
    setBalance((prevBalance) => prevBalance + parsedAmount);

    // Add transaction to history
    setTransactionHistory((prevHistory) => [
      ...prevHistory,
      `Added ₹${parsedAmount.toFixed(2)} via QR Payment`,
    ]);

    // Reset input and close modal
    setAmount('');
    closeModal();
  };

  return (
    <div>
      <header>
        <a href="home.html">
          <h2>FairFare</h2>
        </a>
      </header>

      <main>
        <div className="wallet-container">
          <h1><u>FairFare Wallet</u></h1>

          <div className="wallet-balance">
            <p>Current Balance: ₹<span id="balance">{balance.toFixed(2)}</span></p>
          </div>

          <div className="wallet-add-money">
            <input
              type="number"
              id="amount"
              value={amount}
              placeholder="Enter amount to add"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={openPaymentModal}>Add Money</button>
          </div>

          <div className="wallet-transaction-history">
            <div className="transaction-history">
              <h2><u>Transaction History</u></h2>
              <ul id="transaction-history">
                {transactionHistory.map((transaction, index) => (
                  <li key={index}>{transaction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div id="paymentModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>←</span>
              <h2>Scan QR</h2>
              <img width="300" height="300" src="QR.jpg" alt="QR code" />
              <button className="payment-btn" onClick={completePayment}>Complete Payment</button>
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="foot">
          <hr color="yellow" />
          <h2>FairFare</h2>
          <br />
          <p>Contact Us Online:</p>
          <br />
          <a href="https://www.instagram.com/fair_fare.official">
            <img src="insta_logo.jpg" alt="Instagram" />
          </a>
          <img src="facebook_logo.png" alt="Facebook" />
          <img src="x_logo.png" alt="X" />
        </div>
        <a href="t&c.html">Terms & Conditions</a>
        <p>&copy; 2024 FairFare. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Wallet;
