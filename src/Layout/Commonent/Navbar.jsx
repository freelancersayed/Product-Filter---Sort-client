import React from 'react';
import FilterSearch from '../../page/FilterSearch';

const Navbar = ({setSearch}) => {
    return (
        <div className='lg:py-4 py-6  bg-orange-500 text-center text-black fixed w-full'>
        <FilterSearch setSearch={setSearch}></FilterSearch>
        </div>
    );
};

export default Navbar;