import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { IoCartOutline } from 'react-icons/io5'; // Import the cart icon

const SavedItems: React.FC = () => {
  const { items, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <button onClick={toggleCart}>
        <IoCartOutline />
      </button>
      {isCartOpen && (
        <div>
          <h2>Saved Items</h2>
          {items.length === 0 ? (
            <p>You haven't saved any items yet.</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                  </div>
                  <div>
                    {item.name}
                    <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedItems;
