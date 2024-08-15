import React from 'react';

const PriceSrot = ({setSort}) => {
    return (
        <div className='w-52 flex items-center gap-2'>
            <span>Sort By:</span>
                <select 
          className="rounded px-2 h-10 border border-gray-300 outline-0 w-36 "
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="date_time">Date</option>
        </select>
        </div>
    );
};

export default PriceSrot;