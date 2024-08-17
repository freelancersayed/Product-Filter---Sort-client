import React, { useEffect, useState } from 'react';

const FilterCategory = ({setCategory}) => {

    // const [product, setProducts]= useState([])

    // useEffect(() => {
    //     fetch("http://localhost:5000/product")
    //     .then((response) =>response.json())
    //     .then((data) =>setProducts(data))
    // },[])

    // console.log(product);

    return (
        <div>
            <h1 className='py-2 font-bold'>Category</h1>

        <form onChange={(e) => setCategory(e.target.value)}>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value=""  name="category" id="" /><span>All</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio" value="Smartphones"  name="category" id="Smartphones" /><span>SmartPhone</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Electronics"  name="category" id="Electronics" /><span>Electronics</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Men Fashion"  name="category" id="Men Fashion" /><span>Men Fashion</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Women Fashion"  name="category" id="Women Fashion" /><span>Women Fashion</span></label>
        </form>
        </div>
    );
};

export default FilterCategory;