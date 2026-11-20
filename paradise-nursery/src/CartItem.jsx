import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';
import './CartItem.css';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // Cost for a single plant line (unit price x quantity)
  const calculateTotalCost = (item) => item.cost * item.quantity;

  // Total of the whole cart
  const calculateTotalAmount = () =>
    items.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Going below 1 removes the plant
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Checkout: Coming Soon!');
  };

  return (
    <div className="cart-page">
      <Navbar onNavigate={onNavigate} active="cart" />

      <main className="cart-container">
        <h2 className="cart-total">Total Cart Amount: ${calculateTotalAmount()}</h2>

        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty. Pick a plant to get started.</p>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-cost">Unit price: ${item.cost}</p>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => handleDecrement(item)}
                    >
                      −
                    </button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-item-total">Total: ${calculateTotalCost(item)}</p>
                </div>

                <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-btn" onClick={() => onNavigate('plants')}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
