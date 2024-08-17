import React from 'react';

const FilterBrand = ({setCategory, setBrand, brand}) => {
    return (
        <div>
            <h1 className='py-2 font-bold'>Brand</h1>

{
    brand === "Smartphones" && 
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
}

  {
    brand === 'Electronics' &&
    <form onChange={(e) => setBrand(e.target.value)}>
    <label className='cursor-pointer flex gap-2'><input type="radio"  value=""  name="brand" id="" /><span>All</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio" value="Sony"  name="brand" id="Sony" /><span>Sony</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"  value="Bose"  name="brand" id="Bose" /><span>Bose</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"  value="Apple"  name="brand" id="Apple" /><span>Apple</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"    value="Samsung"  name="brand" id="Samsung" /><span>Samsung</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"    value="JBL"  name="brand" id="JBL" /><span>JBL</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Canon"  name="brand" id="Canon" /><span>Canon</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Dyson"  name="brand" id="Dyson" /><span>Dyson</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Nespresso"  name="brand" id="Nespresso" /><span>Nespresso</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="LG"  name="brand" id="LG" /><span>LG</span></label>
    </form>
  }

  {
   brand === "Women Fashion" && 
    <form onChange={(e) => setBrand(e.target.value)}>
    <label className='cursor-pointer flex gap-2'><input type="radio"  value=""  name="brand" id="" /><span>All</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio" value="Michael Kors"  name="brand" id="Michael Kors" /><span>Michael Kors</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"  value="Steve Madden"  name="brand" id="Steve Madden" /><span>Steve Madden</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"  value="Zara"  name="brand" id="Zara" /><span>Zara</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"    value="Levi's"  name="brand" id="Levi's" /><span>Levi's</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"    value="Hermès"  name="brand" id="Hermès" /><span>Hermès</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Tiffany & Co."  name="brand" id="Tiffany & Co." /><span>Tiffany & Co.</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="H&M"  name="brand" id="H&M" /><span>H&M</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Mango"  name="brand" id="Mango" /><span>Mango</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Burberry"  name="brand" id="Burberry" /><span>Burberry</span></label>
    <label className='cursor-pointer flex gap-2'><input type="radio"   value="Max Mara"  name="brand" id="Max Mara" /><span>Max Mara</span></label>
    </form>
  }

      {
        brand === "Men Fashion" &&
        <form onChange={(e) => setBrand(e.target.value)}>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value=""  name="brand" id="" /><span>All</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio" value="Tommy Hilfiger"  name="brand" id="Tommy Hilfiger" /><span>Tommy Hilfiger</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Armani"  name="brand" id="Armani" /><span>Armani</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"  value="Gap"  name="brand" id="Gap" /><span>Gap</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Nike"  name="brand" id="Nike" /><span>Nike</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Hugo Boss"  name="brand" id="Hugo Boss" /><span>Hugo Boss</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Ray-Ban"  name="brand" id="Ray-Ban" /><span>Ray-Ban</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Ralph Lauren"  name="brand" id="Max Mara" /><span>Ralph Lauren</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Levi's"  name="brand" id="Levi's" /><span>Levi's</span></label>
        <label className='cursor-pointer flex gap-2'><input type="radio"   value="Lacoste"  name="brand" id="Lacoste" /><span>Lacoste</span></label>
        </form>
      }

        </div>
    );
};

export default FilterBrand;