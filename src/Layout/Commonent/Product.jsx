import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterOptions from "../../page/FilterOptions";
import ProductCard from "../../page/ProductCard";
import Pagination from "../../page/Pagination";
import FilterCategory from "../../page/FilterCategory";
import FilterBrand from "../../page/FilterBrand";
import FilterSearch from "../../page/FilterSearch";
import FilterPrice from "../../page/FilterPrice";
import PriceSrot from "../../page/PriceSrot";
import SortRatingDate from "../../page/SortRatingDate";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


function Product() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("rating");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchProducts();
  }, [page, search, category, brand, minPrice, maxPrice, sort, order, ]);

  const fetchProducts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/products", {
            params: {
                page,
                search,
                category,
                brand,
                minPrice,
                maxPrice,
                sort,
                order,
              
            },
        });

        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / response.data.limit));
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

  return (
    <div className="px-">


      <div className="">
        {/* <FilterSearch setSearch={setSearch}></FilterSearch> */}
        <Navbar setSearch={setSearch}></Navbar>
        </div>
       
        <div className="h-44"></div>

      {/*main section  */}
 <section className="max-w-[1280px] mx-auto ">
         
 <div className="lg:hidden">
 <FilterOptions 
        setSearch={setSearch}
        setCategory={setCategory}
        setBrand={setBrand}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSort={setSort}
        setOrder={setOrder}
      />
 </div>


<section className=" container flex gap-2">

    {/* sidbar */}
    <div className="w-52">
    {/* <FilterSearch setSearch={setSearch}></FilterSearch> */}
    <FilterCategory setCategory={setCategory}></FilterCategory>
    {category=== "Smartphones" && <FilterBrand brand={products} setBrand={setBrand}></FilterBrand>}
    <FilterPrice setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}></FilterPrice>
    <SortRatingDate setSort={setSort}></SortRatingDate>
    </div>


      <div className="w-full">
        <div className=" h-20 flex justify-end border-b mb-2">
        <PriceSrot setOrder={setOrder}></PriceSrot>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      
      <Pagination 
        page={page} 
        setPage={setPage} 
        totalPages={totalPages} 
      />
      </div>
</section>
 </section>

    </div>
  );
}

export default Product;
