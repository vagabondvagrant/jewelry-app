// FiCategory.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useCart, Item as CartItem } from '../Context/CartContext';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import item1 from '../Marketassets/item1.webp';
import item2 from '../Marketassets/item2.webp';
import item3 from '../Marketassets/item3.webp';

export interface Item extends CartItem {
  content: string;
  image: string; 
}

const FiCategory: React.FC = () => {
  const { addToCart } = useCart();

  const items: Item[] = [
    { id: 1, content: 'Elegant Diamond Ring', name: 'Diamond Ring', image: item1 },
    { id: 2, content: 'Luxury Gold Necklace', name: 'Gold Necklace', image: item2 },
    { id: 3, content: 'Sapphire Gemstone Earrings', name: 'Gemstone Earrings', image: item3 },
  ];

  const handleAddToCart = (item: Item) => {
    addToCart(item as CartItem);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div>
      <Carousel>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={`Item ${item.id}`} />
            <h3>{item.content}</h3>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </Carousel>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default FiCategory;
