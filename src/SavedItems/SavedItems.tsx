import  { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { IoCartOutline } from 'react-icons/io5';
import Modal from 'react-modal';

const SavedItems: React.FC = () => {
  const { items, removeFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>
        <IoCartOutline />
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Saved Items Modal"
      >
        <h2>Saved Items</h2>
        {items.length === 0 ? (
          <p>You haven't saved any items yet.</p>
        ) : (
          <form>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name}
                  { <img src={item.image} alt={item.name} />}
                  <button type="button" onClick={() => removeFromCart(item.id)}>
                    Remove from Cart
                  </button>
                </li>
              ))}
            </ul>
          </form>
        )}
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SavedItems;
