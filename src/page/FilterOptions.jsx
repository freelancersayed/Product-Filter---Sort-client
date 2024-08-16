import React from "react";

function FilterOptions({ setSearch, setCategory, setBrand, setMinPrice, setMaxPrice, setSort, setOrder }) {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* <input 
          type="text" 
          placeholder="Search products..." 
          className="input input-bordered w-full"
          onChange={(e) => setSearch(e.target.value)} 
        /> */}
        
        <select 
          className="border rounded h-10 w-full outline-0 px-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="smartphone">Smartphone</option>
          <option value="laptop">Laptop</option>
          {/* Add more categories as needed */}
        </select>
        
        <select 
          className="border rounded h-10 w-full outline-0 px-2"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="samsung">Samsung</option>
          <option value="apple">Apple</option>
          {/* Add more brands as needed */}
        </select>

        <select 
          className="border rounded h-10 w-full outline-0 px-2"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="">Hight</option>
          <option value="date_time">Date</option>
        </select>
        
        <div className="flex space-x-4 col-span-2">
          <input 
            type="number" 
            placeholder="Min Price" 
            className=" outline-0 border h-10 px-2 rounded w-full"
            onChange={(e) => setMinPrice(e.target.value)} 
          />
          <span>-</span>
          <input 
            type="number"
            placeholder="Max Price" 
            className="outline-0 border h-10 px-2 rounded w-full"
            onChange={(e) => setMaxPrice(e.target.value)} 
          />
        </div>
      
        
        <select 
          className="border rounded h-10 w-full outline-0 px-2"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option className="disabled">Best Match</option>
          <option className="" value="asc">Price low to high</option>
          <option className="" value="desc">Price high to low</option>
        </select>
      </div>
    </div>
  );
}

export default FilterOptions;
