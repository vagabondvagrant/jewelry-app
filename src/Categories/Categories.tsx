import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CarouselComponent from './Diamond';
import Gold from './Gold';
import Bangles from './Bangles';
import CommentSection from '../Comment/Comment';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type CategoriesProps = {};

type SelectedCategories = 'Diamond' | 'Gold' | 'Bangles';

const Categories: React.FC<CategoriesProps> = () => {
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories[]>([]);
  const [categoryVisibility, setCategoryVisibility] = useState<{ [key in SelectedCategories]: boolean }>({
    Diamond: false,
    Gold: false,
    Bangles: false,
  });

  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(3)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  const handleCategoryClick = (category: SelectedCategories) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });

    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  return (
    <animated.div style={fadeIn} className="py-8">
      <h1 className="flex justify-center text-3xl font-bold hover:bg-yellow-900 hover:rounded hover:text-white">
        Jewelry Categories
      </h1>

      <h1
        className="text-3xl font-bold mb-4 cursor-pointer hover:bg-yellow-900 hover:rounded hover:text-white"
        onClick={() => handleCategoryClick('Diamond')}
      >
        Diamond Categories
        {categoryVisibility.Diamond ? <FiChevronUp /> : <FiChevronDown />}
      </h1>
      {categoryVisibility.Diamond && selectedCategories.includes('Diamond') && <CarouselComponent />}

      <h1
        className="text-3xl font-bold mb-4 cursor-pointer hover:bg-yellow-900 hover:rounded hover:text-white"
        onClick={() => handleCategoryClick('Gold')}
      >
        Gold Categories
        {categoryVisibility.Gold ? <FiChevronUp /> : <FiChevronDown />}
      </h1>
      {categoryVisibility.Gold && selectedCategories.includes('Gold') && <Gold />}

      <h1
        className="text-3xl font-bold mb-4 cursor-pointer hover:bg-yellow-900 hover:rounded hover:text-white"
        onClick={() => handleCategoryClick('Bangles')}
      >
        Bangles Categories
        {categoryVisibility.Bangles ? <FiChevronUp /> : <FiChevronDown />}
      </h1>
      {categoryVisibility.Bangles && selectedCategories.includes('Bangles') && <Bangles />}

      <CommentSection />
    </animated.div>
  );
};

export default Categories;
