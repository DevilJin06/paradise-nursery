// src/components/ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // disabled if this plant already exists in cart (one-time add)
  const isInCart = !!cartItems[plant.id];

  return (
    <div className="card">
      <img src={plant.thumbnail} alt={plant.name} className="thumb"/>
      <div className="card-body">
        <h3>{plant.name}</h3>
        <p className="desc">{plant.description}</p>
        <div className="card-footer">
          <strong>₹{plant.price.toFixed(2)}</strong>
          <button
            onClick={() => dispatch(addToCart(plant))}
            className="small"
            disabled={isInCart}
            title={isInCart ? "Already in cart" : "Add to cart"}
          >
            {isInCart ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
