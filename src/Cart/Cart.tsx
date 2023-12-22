import { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  console.log(cartItems);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    console.log('Stored Cart Items:', storedCartItems);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); 

  const handleRemoveFromCart = (item: string) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  console.log('Current Cart Items:', cartItems);

  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="flex justify-center">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
