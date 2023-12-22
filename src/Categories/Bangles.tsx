import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bangle1 from '../assets/Bangle1.jpg';
import Bangle2 from '../assets/Bangle2.jpg';
import Bangle3 from '../assets/Bangle3.jpg';

const Bangles = () => {
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
          <img src={Bangle1} alt="Bangles 1" className="" />
        </div>
        <div>
          <img src={Bangle2} alt="Bangles 2" className="" />
        </div>
        <div>
          <img src={Bangle3} alt="Bangles 3" className="" />
        </div>
      </Slider>
    </div>
  );
};

export default Bangles;
