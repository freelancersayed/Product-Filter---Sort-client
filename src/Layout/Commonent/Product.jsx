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
import { Helmet } from "react-helmet";
import TimeOut from "../../page/TimeOut";


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
        const response = await axios.get("https://server-side-nine-inky.vercel.app/products", {
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

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="px-">
 <Helmet>
        <title>Home - Product-Nest Site</title>
        <meta name="description" content="This is the home page of my product nest site." />
        <meta name="keywords" content="react, helmet, SEO, homepage" />
      </Helmet>

      <div className="">
        <Navbar setSearch={setSearch} ></Navbar>
        </div>
       
        <div className="h-32"></div>
    

      {/*main section  */}
 <section className="max-w-[1280px] mx-auto px-2">
         
 <div className="lg:hidden md:hidden mb-5">
 <FilterOptions 
        setSearch={setSearch}
        setCategory={setCategory}
        setBrand={setBrand}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSort={setSort}
        setOrder={setOrder}
      />
      <hr />
 </div>


<section className=" container flex gap-2">

    {/* sidbar */}
    <div className="w-52 hidden md:block lg:block">
    {/* <FilterSearch setSearch={setSearch}></FilterSearch> */}
    <FilterCategory setCategory={setCategory}></FilterCategory>
    <FilterBrand brand={category} setBrand={setBrand}></FilterBrand>
    <FilterPrice setMinPrice={setMinPrice} product={products} setMaxPrice={setMaxPrice}></FilterPrice>
    <SortRatingDate setSort={setSort}></SortRatingDate>
    <button
        onClick={reloadPage} 
        className=" rounded-md mt-5 text-red-500 hover:text-red-700 underline"
      >
        Clear search
      </button>
    </div>


      <div className="w-full">
      <div className="hidden md:block lg:block">
      <div className=" h-20 flex justify-end border-b mb-2 ">
        
        <PriceSrot setOrder={setOrder}></PriceSrot>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        { products.map((product) => (
          <ProductCard key={product._id} product={product} />
        )) 

        }
        <div className="col-span-4"><TimeOut data={products}></TimeOut></div>
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
