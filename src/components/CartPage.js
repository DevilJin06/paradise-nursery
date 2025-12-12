// src/components/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart, clearCart } from '../features/cart/cartSlice';

export default function CartPage({ onContinue }) {
  const itemsObj = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const lines = Object.values(itemsObj);

  const totalItems = lines.reduce((sum, it) => sum + it.qty, 0);
  const subtotal = lines.reduce((s, it) => s + it.qty * it.plant.price, 0);

  return (
    <div className="cart-page">
      <div style={{flex:1}}>
        <h1>Your Cart</h1>
        <p><strong>Total items:</strong> {totalItems}</p>

        {lines.length === 0 && (
          <>
            <p>Your cart is empty.</p>
            <button onClick={onContinue} className="primary">Continue Shopping</button>
          </>
        )}

        {lines.map(({ plant, qty }) => (
          <div className="cart-item" key={plant.id}>
            <img src={plant.thumbnail} alt={plant.name} className="thumb-small"/>
            <div className="cart-item-info">
              <h3>{plant.name}</h3>
              <p>Unit: ₹{plant.price.toFixed(2)}</p>
              <p>Total: ₹{(plant.price * qty).toFixed(2)}</p>
              <div className="qty-controls">
                <button onClick={() => dispatch(decrementQty(plant.id))}>-</button>
                <span style={{minWidth:28, textAlign:'center'}}>{qty}</span>
                <button onClick={() => dispatch(incrementQty(plant.id))}>+</button>
                <button className="danger" onClick={() => dispatch(removeFromCart(plant.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lines.length > 0 && (
        <aside className="cart-summary">
          <h3>Subtotal: ₹{subtotal.toFixed(2)}</h3>
          <div style={{marginTop:12}}>
            <button onClick={onContinue}>Continue Shopping</button>
            <button className="primary" onClick={() => { /* do nothing, show coming soon message below */ }}>Checkout</button>
            <button className="danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>

            {/* Visible Coming Soon message */}
            <div style={{marginTop:12, padding:10, background:'#fff9e6', borderRadius:6}}>
              <strong>Checkout:</strong> Coming Soon — payment integration not included in this demo.
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
