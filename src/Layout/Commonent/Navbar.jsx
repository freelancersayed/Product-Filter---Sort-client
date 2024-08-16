import React from 'react';
import FilterSearch from '../../page/FilterSearch';

const Navbar = ({setSearch}) => {
    return (
        <div className='py-4 bg-orange-500 text-center text-black'>
        <FilterSearch setSearch={setSearch}></FilterSearch>
        </div>
    );
};

export default Navbar;