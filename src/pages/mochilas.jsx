// Mochilas.jsx

import React from 'react';
import CardMochilas  from "../components/CardMochilas"



const Mochilas = () => {
  //  array de datos de mochilas
  const mochilasData = [
    { imageUrl: '../imagenes/mochilas/mochila1 (1).jpeg', category:'Mochila Unicolor', title: 'Mochila 1', price: 16.0 },
    { imageUrl: '../imagenes/mochilas/mochila1 (10).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },
    { imageUrl: '../imagenes/mochilas/mochila1 (11).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },
    { imageUrl: '../imagenes/mochilas/mochila1 (12).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },
    { imageUrl: '../imagenes/mochilas/mochila1 (13).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },
    { imageUrl: '../imagenes/mochilas/mochila1 (14).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },
    { imageUrl: '../imagenes/mochilas/mochila1 (15).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },
    { imageUrl: '../imagenes/mochilas/mochila1 (16).jpeg', category:'Mochila Unicolor', title: 'Mochila 2', price: 21.15 },


];

  return (
    <section className="text-gray-600 body-font">
      <div className="  container px-5 py-24 mx-auto w-full ">
        <div className=" flex flex-wrap -m-4">
          {mochilasData.map((mochila, index) => (
            <CardMochilas key={index} {...mochila} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mochilas;
