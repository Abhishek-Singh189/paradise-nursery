# Paradise Nursery

**Project name:** Paradise Nursery – Shopping Cart Application

Paradise Nursery is an online plant shop built with **React** and **Redux Toolkit**.
Visitors land on a welcome page, browse houseplants grouped by category, add plants
to a shopping cart, and manage the cart (change quantities, remove items, see totals).

## Features

- Landing page with company name, short introduction and a **Get Started** button
- **About Us** section describing the company
- Product listing with **18 houseplants in 3 categories** (Air Purifying, Aromatic, Low Light)
- Each plant shows a thumbnail, name, price and an **Add to Cart** button
  - Button is disabled once the plant is in the cart
  - Cart icon in the navbar updates its count instantly
- Navbar (Home, Plants, Cart) on both the Plants page and the Cart page
- Shopping cart page with:
  - Thumbnail, name and unit price for each plant
  - Increase / decrease quantity buttons
  - Per-plant subtotal and overall cart total
  - Delete button for each item
  - **Checkout** button (shows "Coming Soon")
  - **Continue Shopping** button back to the plant list

## Tech stack

React 18 · Redux Toolkit · React-Redux · Vite

## Project structure

```
src/
  main.jsx        – entry point, Redux Provider
  store.js        – Redux store
  CartSlice.jsx   – cart slice (addItem, removeItem, updateQuantity)
  App.jsx         – landing page + view switching
  App.css         – landing page background image & global styles
  AboutUs.jsx     – company information
  Navbar.jsx      – shared navigation bar
  ProductList.jsx – plant catalogue
  CartItem.jsx    – shopping cart page
```

## Run locally

```bash
npm install
npm run dev
```
