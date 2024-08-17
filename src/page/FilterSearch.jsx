import React, { useState } from 'react';
import '../index.css'
import { IoIosSearch } from 'react-icons/io';

const FilterSearch = ({setSearch, search}) => {
    return (
        <div className='lg:max-w-[800px] px-5  mx-auto flex items-center  search'>
                <input 
          type="text" 
          placeholder="Search products..." 
          className=" outline-0 border lg:py-3 md:py-3 py-2 rounded-sm px-4 w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch className='lg:w-12 md:w-12 w-10 h-12 relative -ml-12 icon' />
    <img className='lg:w-10 md:w-10 w-8 lg:h-10 md:h-10 h-8 relative -ml-12 ' src="/search.gif" alt="" /> 
        </div>
    );
};

export default FilterSearch;