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

  const jewelryNames = [
    'Elegant Diamond Necklace',
    'Sapphire Dream Earrings',
    'Golden Sunset Bracelet',
    'Ruby Heart Pendant',
    'Pearl Harmony Ring',
    'Emerald Serenity Anklet',
    'Amethyst Cascade Brooch',
    'Opal Twilight Tiara',
  ];

  const notifyBuy = (index: number) => {
    toast.info(`${jewelryNames[index]} has been sold. You can't buy it right now.`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-screen-lg p-4">
      <h2 className="text-2xl sm:text-4xl mb-4 sm:mb-10">Recently Sold Items</h2>

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
            <img src={item.image} alt={`Item ${index + 1}`} className="max-w-full" />
            <p className="text-white bg-customcolor p-2 mt-8 rounded-lg hover:bg-blue-500">{jewelryNames[index]}</p>
            <button
              className="bg-blue-700 text-white p-2 mt-4 cursor-pointer rounded-lg hover:bg-blue-500"
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
