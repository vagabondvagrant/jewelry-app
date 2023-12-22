import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const GoDownButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY < document.documentElement.scrollHeight - window.innerHeight - 200);
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-6 right-6 bg-green-500 text-xl text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-700"
          onClick={scrollDown}
        >
          <FaArrowDown />
        </button>
      )}
    </div>
  );
};

export default GoDownButton;
