import React from "react";

function Card({ productData }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <div className=" flex justify-center">
          <img
            className="w-32 bg-red-400"
            src={productData.image}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{productData.title}</div>
          <p className="text-gray-700 text-base">{productData.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {productData.price}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
