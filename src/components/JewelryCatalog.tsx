import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ring1 from "../Featured/Ring1.webp";
import Ring2 from "../Featured/Ring2.webp";
import { useCart, Item as CartItem } from '../Context/CartContext';

const getRandomPrice = () => {
  return Math.floor(Math.random() * (500 - 50 + 1) + 50);
};

const items = [
  { id: 1, name: 'Antique Ring ', image: Ring1 },
  { id: 2, name: 'Vintage Bangles', image: Ring2 },
];

const JewelryCatalog: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  const itemAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 12 },
  });

  const { addToCart } = useCart(); 

  const itemsWithPrices = items.map(item => ({ ...item, price: getRandomPrice() }));

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <animated.div style={fadeIn} className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Antique Jewelry</h1>
      <animated.div style={itemAnimation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {itemsWithPrices.map((item) => (
          <animated.div key={item.id} className="bg-white p-4 rounded shadow-md" style={itemAnimation}>
            <animated.img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover mb-4 rounded"
              style={itemAnimation}
            />
            <animated.h2 className="text-xl font-semibold" style={itemAnimation}>
              {item.name}
            </animated.h2>
            <p className="text-gray-500">Price: ${item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </animated.div>
        ))}
      </animated.div>
      <ToastContainer />
    </animated.div>
  );
};

export default JewelryCatalog;
