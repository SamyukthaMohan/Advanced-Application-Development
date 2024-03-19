import React, { useState, useEffect } from 'react';
import './PaymentHis.css';
import UserNav from '../Components/UserNav';

const mockPaymentData = [
  { 
    id: 1, 
    organizerId: 101, 
    status: 'Success', 
    totalAmount: 500, 
    amountPaid: 500, 
    balanceAmount: 0, 
    paymentDate: '2024-03-20', 
    modeOfPayment: 'Credit Card' 
  },
  { 
    id: 2, 
    organizerId: 101, 
    status: 'Success', 
    totalAmount: 700, 
    amountPaid: 500, 
    balanceAmount: 200, 
    paymentDate: '2024-03-25', 
    modeOfPayment: 'PayPal' 
  },
  { 
    id: 3, 
    organizerId: 101, 
    status: 'Pending', 
    totalAmount: 1000, 
    amountPaid: 500, 
    balanceAmount: 500, 
    paymentDate: '2024-03-30', 
    modeOfPayment: 'Bank Transfer' 
  },
  // Add more payment data as needed
];

const PaymentHist = () => {
  const [paymentHist, setPaymentHist] = useState([]);

  useEffect(() => {
    // Simulate fetching payment data from an API
    // Replace this with actual API call
    setPaymentHist(mockPaymentData);
  }, []);

  return (
    <div>
    <UserNav />
    <div className="payment-history-container">
      <h2 className="payment-history-heading">Payment History</h2>
      <div className="payment-history-table-container">
        <table className="payment-history-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Organizer ID</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Amount Paid</th>
              <th>Balance Amount</th>
              <th>Payment Date</th>
              <th>Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map(payment => (
              <tr key={payment.id} className={`payment-status-${payment.status.toLowerCase()}`}>
                <td>{payment.id}</td>
                <td>{payment.organizerId}</td>
                <td>{payment.status}</td>
                <td>${payment.totalAmount}</td>
                <td>${payment.amountPaid}</td>
                <td>${payment.balanceAmount}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.modeOfPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default PaymentHist;