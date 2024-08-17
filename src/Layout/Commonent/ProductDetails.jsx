import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Payment from './Payment';

const ProductDetails = () => {
//   const [product, setProduct] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

  const details = useLoaderData([]);
  const { _id, sessionId } = useParams();
  const product = details.find(
    (detail) => detail._id === _id || detail._id === sessionId
  );

  console.log(product);

  if (!product) return <p>Loading...</p>;


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
        <Navbar></Navbar>
        <div className="h-32"></div>
    <section className="min-h-screen">
    <div className="lg:flex md:flex gap-10 max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
        <img src={product?.image} alt={product?.name} className="lg:w-1/2 md:w-1/2 w-5/6 mx-auto rounded-lg" />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl lg:text-left text-center font-bold mb-4">{product?.name}</h1>
            <p className="text-gray-700 mb-2"><strong>Brand:</strong> {product?.brand}</p>
            <p className="text-gray-700 mb-2"><strong>Category:</strong> {product?.category}</p>
            <p className="text-gray-700 mb-4"><strong>Price:</strong> {product?.price} BDT</p>
            <p className="text-gray-700 mb-4"><strong>Rating:</strong> {product?.rating}</p>
            <p className="text-gray-700 mb-4"><strong>Published:</strong> {product?.date_time}</p>
            <p className="text-gray-700 mb-4"><strong>Features:</strong> {product?.features}</p>
          </div>
      <div className='flex gap-3 justify-between'>
      <Link onClick={openModal}  className="w-full text-center px-4 py-2 bg-[#1ad1ff] text-white rounded-sm hover:bg-[#1aabff] ">
            Buy Now
          </Link>
          <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-sm hover:bg-orange-600 ">
            Add to Cart
          </button>
      </div>
        </div>
      </div>
    </section>
    <Payment isOpen={isModalOpen} onClose={closeModal} title="Modal Title"></Payment>
    </div>
  );
};

export default ProductDetails;
