import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Payment = ({ isOpen, onClose, title, children }) => {

  if (!isOpen) return null;
    return (
        <div className="max-w-[700px] mx-auto h-[500px] mt-44 bg-white shadow-md rounded-sm flex flex-col items-center justify-center fixed inset-0  bg-opacity-100  z-50 border ">

<div className='w-full flex justify-end -mt-32 px-4'>
<button 
            onClick={onClose} 
            className="text-gray-500 hover:text-black hover:font-bold transition text-2xl "
          >
            ✕
          </button>
</div>

          <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Payment Method</h1>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/bkash-payment" className="bg-white shadow-lg hover:border border-orange-500 rounded-lg text-center w-44 h-28 flex items-center hover:bg-gray-50 transition hover:shadow-black">
              <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="Bkash" className="w-32 mx-auto mb-4"/>
    
            </Link>
    
            <Link to="/nagad-payment" className=" bg-white shadow-lg hover:border rounded-lg w-44 h-28 flex items-center text-center hover:bg-gray-50 transition">
              <img src="https://seeklogo.com/images/N/nagad-logo-AA1B37DF1B-seeklogo.com.png" alt="Nagad" className="w-32 mx-auto mb-4"/>

            </Link>
    
            <Link to="/rocket-payment" className="bg-white shadow-lg hover:border rounded-lg w-44 h-28 text-center hover:bg-gray-50 transition flex items-center">
              <img src="https://pngtom.com/files/preview/960x960/317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.png" alt="Rocket" className="w-32 h-28 mx-auto "/>
             
            </Link>
    
            <Link to="/credit-card-payment" className=" bg-white shadow-lg hover:border rounded-lg w-44 h-28 text-center hover:bg-gray-50 transition flex items-center">
              <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/10/visa-logo-freelogovectors.net_.png" alt="Credit Card" className="w-32 mx-auto "/>
            
            </Link>
    
            <Link to="/paypal-payment" className="block bg-white shadow-lg hover:border rounded-lg w-44 h-28 text-center hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/328109/paypal.svg" alt="PayPal" className="w-32 mx-auto mb-4"/>
              {/* <h2 className="text-xl font-semibold">PayPal</h2> */}
            </Link>
            <Link to="/paypal-payment" className="bg-white shadow-lg hover:border rounded-lg w-44 h-28 text-center hover:bg-gray-50 transition flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stripe_logo%2C_revised_2014.png/1200px-Stripe_logo%2C_revised_2014.png" alt="PayPal" className="w-32 mx-auto mb-4"/>
              {/* <h2 className="text-xl font-semibold">PayPal</h2> */}
            </Link>
          </div>
        </div>
      );
};

export default Payment;
