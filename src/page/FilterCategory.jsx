import React from 'react';

const FilterCategory = ({setCategory}) => {
    return (
        <div>
            <h1 className='py-2 font-bold'>Category</h1>

        <form onChange={(e) => setCategory(e.target.value)}>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value=""  name="category" id="" /><span>All</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio" value="Smartphones"  name="category" id="Smartphones" /><span>SmartPhone</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Electornic"  name="category" id="Electornic" /><span>Electornic</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Fashion"  name="category" id="Fashion" /><span>Fashion</span></label>
    
        </form>
        </div>
    );
};

export default FilterCategory;