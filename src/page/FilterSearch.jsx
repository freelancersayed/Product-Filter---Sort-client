import React, { useState } from 'react';
import '../index.css'
import { IoIosSearch } from 'react-icons/io';

const FilterSearch = ({setSearch, search}) => {
    return (
        <div className='lg:max-w-[800px] px-5  mx-auto flex items-center  search'>
                <input 
          type="text" 
          placeholder="Search products..." 
          className=" outline-0 border py-3 rounded px-4 w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch className='w-12 h-12 relative -ml-16 icon' />
    <img className='w-10 h-10 relative -ml-12 ' src="/search.gif" alt="" /> 
        </div>
    );
};

export default FilterSearch;