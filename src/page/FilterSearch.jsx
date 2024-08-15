import React from 'react';

const FilterSearch = ({setSearch}) => {
    return (
        <div className='max-w-[800px] mx-auto'>
                <input 
          type="text" 
          placeholder="Search products..." 
          className=" outline-0 border py-4 rounded-lg px-4 w-full"
          onChange={(e) => setSearch(e.target.value)} 
        />
        </div>
    );
};

export default FilterSearch;