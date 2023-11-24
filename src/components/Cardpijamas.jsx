// Cardpijamas.jsx

import React from 'react';

const Cardpijamas = ({ imageUrl, category, title, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block rounded overflow-hidden"> {/* Ajusta el valor según sea necesario */}
        <img alt="ecommerce" className="object-center  object-contain w-full h-full block" src={imageUrl} />
      </a>

      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default Cardpijamas;
