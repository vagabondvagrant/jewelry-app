import React, { useState, useEffect } from 'react';

const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    image: 'path/to/john-doe-image.jpg',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const getRandomTestimonial = () => {
  const randomIndex = Math.floor(Math.random() * testimonialData.length);
  return testimonialData[randomIndex];
};

const WhatPeopleSay: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(getRandomTestimonial);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(getRandomTestimonial);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="py-8">
      <h1 className="flex justify-center text-3xl font-bold hover:bg-yellow-900 hover:rounded hover:text-white">
        What People Say
      </h1>

      <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
        <h2 className="text-xl font-semibold mb-2">{currentTestimonial.name}</h2>
        <p className="text-gray-700">{currentTestimonial.testimonial}</p>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
