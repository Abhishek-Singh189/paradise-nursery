import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';
import './ProductList.css';

// Builds a small self-contained SVG thumbnail so images always load.
const plantImage = (leaf, pot) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#eaf0e4"/>
      <g fill="${leaf}">
        <ellipse cx="100" cy="80" rx="22" ry="52"/>
        <ellipse cx="68" cy="100" rx="20" ry="44" transform="rotate(-35 68 100)"/>
        <ellipse cx="132" cy="100" rx="20" ry="44" transform="rotate(35 132 100)"/>
      </g>
      <path d="M62 138h76l-10 46H72z" fill="${pot}"/>
      <rect x="56" y="130" width="88" height="12" rx="4" fill="${pot}"/>
    </svg>`
  );

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', description: 'Filters toxins and thrives on neglect.', cost: 15, image: plantImage('#3f7d4e', '#c4673f') },
      { name: 'Spider Plant', description: 'Fast-growing with arching striped leaves.', cost: 12, image: plantImage('#6aa84f', '#b5854b') },
      { name: 'Peace Lily', description: 'Glossy leaves and elegant white blooms.', cost: 18, image: plantImage('#2f6b45', '#8a8f98') },
      { name: 'Boston Fern', description: 'Lush fronds that add humidity to the air.', cost: 20, image: plantImage('#4c9a52', '#a8553a') },
      { name: 'Rubber Plant', description: 'Bold, thick leaves for a statement corner.', cost: 22, image: plantImage('#264d36', '#d0a24a') },
      { name: 'Areca Palm', description: 'A feathery palm that brightens any room.', cost: 25, image: plantImage('#7fb069', '#6c7a89') },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', description: 'Calming scent, loved by pollinators.', cost: 14, image: plantImage('#8c7ab8', '#c4673f') },
      { name: 'Jasmine', description: 'Sweet-smelling flowers in the evening.', cost: 16, image: plantImage('#5b9a6b', '#e8e1d0') },
      { name: 'Rosemary', description: 'Fragrant herb for pots and kitchens.', cost: 10, image: plantImage('#3d7a5a', '#a8553a') },
      { name: 'Mint', description: 'Cool, fresh leaves for teas and drinks.', cost: 8, image: plantImage('#58b368', '#b5854b') },
      { name: 'Lemon Balm', description: 'Citrus scent that soothes and refreshes.', cost: 11, image: plantImage('#9bc53d', '#6c7a89') },
      { name: 'Gardenia', description: 'Creamy blooms with an unforgettable perfume.', cost: 24, image: plantImage('#2e6b4f', '#d0a24a') },
    ],
  },
  {
    category: 'Low Light Plants',
    plants: [
      { name: 'ZZ Plant', description: 'Nearly indestructible, happy in dim rooms.', cost: 19, image: plantImage('#1f5c3c', '#8a8f98') },
      { name: 'Pothos', description: 'Trailing vines that tolerate shade.', cost: 9, image: plantImage('#5faa54', '#c4673f') },
      { name: 'Cast Iron Plant', description: 'Tough, deep green leaves for dark corners.', cost: 17, image: plantImage('#27533a', '#e8e1d0') },
      { name: 'Chinese Evergreen', description: 'Patterned leaves that need little light.', cost: 21, image: plantImage('#4f8f5e', '#a8553a') },
      { name: 'Parlor Palm', description: 'A compact palm for shaded shelves.', cost: 23, image: plantImage('#6fae5b', '#b5854b') },
      { name: 'Dracaena', description: 'Sword-like leaves, easy and elegant.', cost: 26, image: plantImage('#3b7a4a', '#6c7a89') },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // A plant counts as "added" while it is in the cart
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  return (
    <div className="product-page">
      <Navbar onNavigate={onNavigate} active="plants" />

      <main className="product-container">
        {plantCategories.map((group) => (
          <section key={group.category} className="category">
            <h2>{group.category}</h2>
            <div className="product-grid">
              {group.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <article className="product-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <h3>{plant.name}</h3>
                    <p className="product-desc">{plant.description}</p>
                    <p className="product-price">${plant.cost}</p>
                    <button
                      className="add-btn"
                      disabled={added}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
