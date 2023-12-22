import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gold1 from '../assets/Gold1.jpg';
import Gold2 from '../assets/Gold2.jpg';
import Gold3 from '../assets/Gold3.jpg';

const Gold = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="h-10 flex">
          <img src={Gold1} alt="Gold 1" className="" />
        </div>
        <div>
          <img src={Gold2} alt="Gold 2" className="" />
        </div>
        <div>
          <img src={Gold3} alt="Gold 3" className="" />
        </div>
      </Slider>
    </div>
  );
};

export default Gold;
