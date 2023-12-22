import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pearl4 from '../assets/Pearl4.jpg';
import Pearl2 from '../assets/Pearl2.jpg';
import Pearl3 from '../assets/Pearl3.jpg';

const CarouselComponent = () => {
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
        <div className='h-10 flex'>
          <img src={Pearl4} alt="Pearl 1" className="" />
        </div>
        <div>
          <img src={Pearl2} alt="Pearl 2" className="" />
        </div>
        <div>
          <img src={Pearl3} alt="Pearl 3" className="" />
        </div>
      </Slider>

     
    </div>
  );
};

export default CarouselComponent;
