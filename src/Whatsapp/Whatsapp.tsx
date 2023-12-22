import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsappContact: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const openWhatsapp = () => {
    window.open('https://wa.me/923414433662', '_blank');
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="fixed bottom-6 left-6">
      {isPopupVisible && (
        <div className="bg-green-500 text-black py-2 px-4 rounded-full cursor-pointer text-2xl shadow-lg hover:bg-green-700">
          <FaWhatsapp onClick={openWhatsapp} />
          <div className="absolute bottom-16 left-16 bg-white p-2 rounded-lg shadow-md">
            <p>Contact developer:</p>
            <a href="https://wa.me/923414433662" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> +92 341 4433662
            </a>
            <span className="cursor-pointer absolute top-2 right-2" onClick={closePopup}>
              <FaTimes />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappContact;
