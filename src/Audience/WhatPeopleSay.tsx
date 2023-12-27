import React from 'react';
import testimonialData from './TestimonialData';
const WhatPeopleSay: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="flex justify-center text-3xl font-bold hover:bg-yellow-900 hover:rounded hover:text-white">
        What People Say
      </h1>

      <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 mx-auto mt-5" />
            <h2 className="text-xl font-semibold mb-2">{testimonial.name}</h2>
            <p className="text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatPeopleSay;
