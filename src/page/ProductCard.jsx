import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white hover:shadow-md shadow-lg rounded-lg p-4 card-body">
    <Link to={`/details/${product?._id}`}>
    <div className="w-44 h-44 mx-auto object-cover rounded-lg mb-4">
      <img
        src={product.image} 
        alt={product.name} 
        className="w-full h-full"
      />
      </div>
      <h2 className="text-lg font-bold mb-2 hover:text-blue-500">{product.name}</h2>
    </Link>
      <p className="text-sm text-gray-600 mb-2">{product.category} - {product.brand}</p>
      <p className="text-sm text-orange-600 mb-4">৳ {product.price} </p>
      <div className="flex items-center justify-between">
        <span className="text-yellow-500">{product.rating} ★</span>
        <span className="text-sm text-blue-400">{new Date(product.date_time).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default ProductCard;
