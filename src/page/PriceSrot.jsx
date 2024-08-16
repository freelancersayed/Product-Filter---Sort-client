import React from 'react';

const PriceSrot = ({setOrder}) => {
    return (
        <div className='w-52 flex items-center gap-2'>
            <span>Sort By:</span>
                <select 
          className="rounded px-2 h-10 border border-gray-300 outline-0 w-36 "
          onChange={(e) => setOrder(e.target.value)}
        >
       <option>Best Match</option>
          <option className="" value="asc">Price low to high</option>
          <option className="" value="desc">Price high to low</option>
        </select>
        </div>
    );
};

export default PriceSrot;