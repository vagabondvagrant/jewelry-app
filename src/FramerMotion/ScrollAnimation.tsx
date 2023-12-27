import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedScrollComponentProps {
  image: string;
  description: string;
  price: number;
  name:string
}

const AnimatedScrollComponent: React.FC<AnimatedScrollComponentProps> = ({ image, description, price }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      borderRadius: '0%',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotate: 45,
      borderRadius: '50%',
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
      variants={variants}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="mt-6"
    >
      {image && <img src={image} alt="Jewelry" className="w-full h-auto" />}
      {description && <p>{description}</p>}
      {price && <p>Price: ${price}</p>}
    </motion.div>
  );
};

export default AnimatedScrollComponent;
