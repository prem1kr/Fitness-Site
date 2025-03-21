import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ cart }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      setMessage('Error placing order');
    } else {
      setMessage('Order placed successfully!');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* Checkout form */}
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Zip Code" required />
        <button type="submit">Place Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
