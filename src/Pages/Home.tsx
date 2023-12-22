import React from 'react';
import { useSpring, animated } from 'react-spring';

const items = [
  { id: 1, name: 'Antique Ring 1', image: 'ring1.jpg' },
  { id: 2, name: 'Vintage Necklace', image: 'necklace.jpg' },
];

const Home: React.FC = () => {
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

  return (
    <animated.div style={fadeIn} className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Featured Jewelry</h1>
      <animated.div style={itemAnimation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <animated.div key={item.id} className="bg-white p-4 rounded shadow-md" style={itemAnimation}>
            <animated.img
              src={`images/${item.image}`}
              alt={item.name}
              className="w-full h-32 object-cover mb-4 rounded "
              style={itemAnimation}
            />
            <animated.h2 className="text-xl font-semibold" style={itemAnimation}>
              {item.name}
            </animated.h2>
          </animated.div>
        ))}
      </animated.div>
    </animated.div>
  );
};

export default Home;
