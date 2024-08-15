import React from 'react';

const FilterPrice = ({setMinPrice, setMaxPrice}) => {
    return (
        <div>
             <div className="flex space-x-4 my-2">
          <input 
            type="number" 
            placeholder="Min Price" 
            className=" rounded px-2 h-8 border border-red-100 outline-0 w-full"
            onChange={(e) => setMinPrice(e.target.value)} 
          />
          -
          <input 
            type="number" 
            placeholder="Max" 
            className="rounded px-2 h-8 border border-red-100 outline-0 w-full"
            onChange={(e) => setMaxPrice(e.target.value)} 
          />
        </div>
        </div>
    );
};

export default FilterPrice;