import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar({ onNav }) {
  const items = useSelector(state => state.cart.items);
  // compute total qty
  const qty = Object.values(items).reduce((sum, it) => sum + it.qty, 0);

  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => onNav('landing')}>Paradise Nursery</div>
      <div className="nav-links">
        <button onClick={() => onNav('products')} className="link-btn">Products</button>
        <button onClick={() => onNav('cart')} className="link-btn">
          Cart {qty > 0 && <span className="cart-badge">{qty}</span>}
        </button>
      </div>
    </nav>
  );
}
