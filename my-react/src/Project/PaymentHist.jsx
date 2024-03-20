// PaymentPage.jsx

import React, { useState } from 'react';
import './PaymentHis.css';

const PaymentPage = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [amountToBePaid, setAmountToBePaid] = useState('');
  const [balanceAmount, setBalanceAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handlePayment = () => {
    // Here you can implement your payment logic
    console.log('Processing payment with:', totalAmount, amountToBePaid, balanceAmount, paymentDate, paymentMode);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <div className="payment-form-group">
          <label>Total Amount:</label>
          <input type="text" placeholder="Enter total amount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
        </div>
        <div className="payment-form-group">
          <label>Amount to be Paid:</label>
          <input type="text" placeholder="Enter amount to be paid" value={amountToBePaid} onChange={(e) => setAmountToBePaid(e.target.value)} />
        </div>
        <div className="payment-form-group">
          <label>Balance Amount:</label>
          <input type="text" placeholder="Enter balance amount" value={balanceAmount} onChange={(e) => setBalanceAmount(e.target.value)} />
        </div>
        <div className="payment-form-group">
          <label>Payment Date:</label>
          <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
        </div>
        <div className="payment-form-group">
          <label>Mode of Payment:</label>
          <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
            <option value="">Select Payment Mode</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
            <option value="qrscan">QR Scan</option>
          </select>
        </div>
        <button type="submit">Pay Now</button>
      </form>
      <div>
      <imag src=""></imag>
      </div>
    </div>
  );
};

export default PaymentPage;
