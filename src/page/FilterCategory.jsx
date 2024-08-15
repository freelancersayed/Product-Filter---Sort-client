import React from 'react';

const FilterCategory = ({setCategory, setBrand}) => {
    return (
        <div>
            <h1 className='py-2 font-bold'>Brand</h1>

        <form onChange={(e) => setBrand(e.target.value)}>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value=""  name="brand" id="" /><span>All</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio" value="Samsung"  name="brand" id="Samsung" /><span>Samsung</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Xiaomi"  name="brand" id="Xiaomi" /><span>Xiaomi</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Realme"  name="brand" id="Realme" /><span>Realme</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"    value="Vivo"  name="brand" id="Vivo" /><span>Vivo</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"    value="Oppo"  name="brand" id="Oppo" /><span>Oppo</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Nokia"  name="brand" id="Nokia" /><span>Nokia</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Tecno"  name="brand" id="Tecno" /><span>Tecno</span></label>
        
        </form>
        </div>
    );
};

export default FilterCategory;