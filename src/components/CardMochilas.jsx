// CardMochilas.jsx

import React from 'react';

const CardMochilas = ({ imageUrl, category, title, price }) => {
  return (
    <div className=" lg:w-1/4 md:w-1/2 p-4 w-full ">
      <a className="block rounded h-1/2 overflow-hidde"> {/* Ajusta el valor según sea necesario */}
        <img alt="ecommerce" className="object-center block w-full h-full" src={imageUrl} height="100" />
      </a>

      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default CardMochilas;
