import React from 'react';

export default function Landing({ onStart }) {
  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Find aromatic and medicinal house plants that brighten your home.</p>
      <button className="primary" onClick={onStart}>View Plants</button>
    </div>
  );
}
