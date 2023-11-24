// pijamas.jsx

import React from 'react';
import Cardpijamas  from "../components/Cardpijamas"



const Pijamas = () => {
  //  array de datos de mochilas
  const mochilasData = [
    { imageUrl: '../imagenes/pijamas/pijama1 (1).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (10).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (11).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (12).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (13).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (14).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (15).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },
    { imageUrl: '../imagenes/pijamas/pijama1 (16).jpeg', category:'pijama', title: 'pijama 1', price: 16.0 },

];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {mochilasData.map((pijama, index) => (
            <Cardpijamas key={index} {...pijama} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pijamas;
