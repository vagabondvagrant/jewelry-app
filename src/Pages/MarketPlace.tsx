import  { useState, useEffect } from 'react';
import MarketPlace1 from '../assets/MarketPlace1.jpg';
import MarketPlace2 from '../assets/MarketPlace2.jpg';
import MarketPlace3 from '../assets/MarketPlace3.jpg';
import MarketPlace4 from '../assets/MarketPlace4.jpg';

const MarketPlace = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [products] = useState([
    { name: 'Item 1', imageUrl: MarketPlace1, rate: '$100' },
    { name: 'Item 2', imageUrl: MarketPlace2, rate: '$150' },
    { name: 'Item 3', imageUrl: MarketPlace3, rate: '$120' },
    { name: 'Item 4', imageUrl: MarketPlace4, rate: '$180' },
  ]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item: string) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      {products.map((item, index) => (
        <div key={index} className="h-10 flex mb-4">
          <img src={item.imageUrl} alt={item.name} className="h-10 w-10" />
          <div className="ml-2">
            <p>{item.name}</p>
            <p>{item.rate}</p>
          </div>
          <button onClick={() => handleAddToCart(item.name)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MarketPlace;
