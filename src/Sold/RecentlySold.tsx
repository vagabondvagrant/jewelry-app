import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sold11 from '../Soldassets/sold11.webp';
import Sold12 from '../Soldassets/sold12.webp';
import Sold13 from '../Soldassets/sold13.webp';
import Sold14 from '../Soldassets/sold14.webp';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CustomBannerLayer {
  image: string;
  offset?: number;
}

const RecentlySold: React.FC = () => {
  const recentlySoldItems: CustomBannerLayer[] = [
    { image: Sold11, offset: 0.2 },
    { image: Sold12, offset: 0.3 },
    { image: Sold13, offset: 0.1 },
    { image: Sold14, offset: 0.4 },
  ];

  const notifyBuy = (index: number) => {
    toast.info(`Item ${index + 1} has been sold. You can't buy it right now.`, {
      position: 'top-right',
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="recently-sold-container flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-8">Recently Sold Items</h2>

      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
      >
        {recentlySoldItems.map((item, index) => (
          <div key={index} className="recently-sold-item flex flex-col items-center">
            <img src={item.image} alt={`Item ${index + 1}`} />
            <p className="text-white bg-gray-800 p-2 mt-2">{`Item ${index + 1}`}</p>
            <button
              className="bg-blue-500 text-white p-2 mt-2 cursor-pointer"
              onClick={() => notifyBuy(index)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </Carousel>

      <ToastContainer />
    </div>
  );
};

export default RecentlySold;
