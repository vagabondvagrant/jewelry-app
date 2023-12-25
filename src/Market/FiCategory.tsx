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
    <div className="mx-auto max-w-screen-xl p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Wanna Buy?</h1>
      <Carousel className="sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.image} alt={`Item ${item.id}`} className="max-w-full h-auto" />
            <h3 className="text-lg mt-2">{item.content}</h3>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-blue-600 text-white py-2 px-4 rounded-full mt-2 hover:bg-blue-400 hover:text-white hover:font-semibold"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </Carousel>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default FiCategory;
