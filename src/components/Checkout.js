import React from 'react';

export default function Checkout({ onBack }) {
  return (
    <div style={{padding:20}}>
      <h1>Checkout</h1>
      <p>This is a placeholder checkout page. Integrate payment/shipping as a next step.</p>
      <button onClick={onBack}>Back to Cart</button>
    </div>
  );
}
