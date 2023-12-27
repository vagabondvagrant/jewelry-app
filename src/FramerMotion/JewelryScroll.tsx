import AnimatedScrollComponent from './ScrollAnimation';
import First from './First.jpg';
import Sec from './Sec.jpg';
import Thi from './Thi.jpg';
import Fou from './Fou.jpg';
import Five from './Five.jpg';
import Six from './Six.jpg';
import Sev from './Sev.jpg';
import Eight from './Eight.jpg';

const JewelryScroll: React.FC = () => {
  const jewelryData: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
  }[] = [
    { id: 1, image: First, name: 'Expensive Jewelry 1', description: 'This is a beautiful piece of jewelry with intricate design.', price: 1000 },
    { id: 2, image: Sec, name: 'Expensive Jewelry 2', description: 'A stunning and elegant jewelry piece that catches everyone\'s attention.', price: 1200 },
    { id: 3, image: Thi, name: 'Expensive Jewelry 3', description: 'Elevate your style with this unique and eye-catching jewelry.', price: 800 },
    { id: 4, image: Fou, name: 'Expensive Jewelry 4', description: 'Make a statement with this bold and luxurious jewelry.', price: 1500 },
    { id: 5, image: Five, name: 'Expensive Jewelry 5', description: 'An exquisite piece of jewelry that adds a touch of sophistication.', price: 900 },
    { id: 6, image: Six, name: 'Expensive Jewelry 6', description: 'This jewelry is a perfect blend of modern and classic design.', price: 1100 },
    { id: 7, image: Sev, name: 'Expensive Jewelry 7', description: 'Unique and timeless, this jewelry complements any outfit.', price: 1300 },
    { id: 8, image: Eight, name: 'Expensive Jewelry 8', description: 'Experience elegance and charm with this captivating jewelry.', price: 1000 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      <div className="col-span-4 flex justify-center items-center mt-7">
        <h1 className="text-4xl font-bold">Expensive Jewelry Collection</h1>
      </div>
      {jewelryData.map((jewelry) => (
        <AnimatedScrollComponent
          key={jewelry.id}
          image={jewelry.image}
          name={jewelry.name}
          description={jewelry.description}
          price={jewelry.price}
        />
      ))}
    </div>
  );
};

export default JewelryScroll;
