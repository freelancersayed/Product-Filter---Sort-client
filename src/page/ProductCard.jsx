import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img 
        src={product.image} 
        alt={product.name} 
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.category} - {product.brand}</p>
      <p className="text-sm text-gray-600 mb-4">${product.price}</p>
      <div className="flex items-center justify-between">
        <span className="text-yellow-500">{product.rating} ★</span>
        <span className="text-sm text-gray-600">{new Date(product.date_time).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default ProductCard;
