import React from 'react';
import { useSelector } from 'react-redux';
import './ProductList.css';

// Shared navbar: shown on both the Plants page and the Cart page
function Navbar({ onNavigate, active }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <button className="brand" onClick={() => onNavigate('home')}>
        Paradise Nursery
      </button>
      <ul className="nav-links">
        <li>
          <button
            className={active === 'home' ? 'active' : ''}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={active === 'plants' ? 'active' : ''}
            onClick={() => onNavigate('plants')}
          >
            Plants
          </button>
        </li>
        <li>
          <button
            className={`cart-link ${active === 'cart' ? 'active' : ''}`}
            onClick={() => onNavigate('cart')}
            aria-label={`Cart, ${totalItems} items`}
          >
            <svg viewBox="0 0 256 256" width="34" height="34" aria-hidden="true">
              <circle cx="80" cy="216" r="12" fill="currentColor" />
              <circle cx="184" cy="216" r="12" fill="currentColor" />
              <path
                d="M42.3 72H221.7l-25.7 92H66.1L42.3 72zM42.3 72L36 48H12"
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="cart-count">{totalItems}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
