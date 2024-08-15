import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterOptions from "../../page/FilterOptions";
import ProductCard from "../../page/ProductCard";
import Pagination from "../../page/Pagination";
import FilterCategory from "../../page/FilterCategory";


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
  }, [page, search, category, brand, minPrice, maxPrice, sort, order]);

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product Catalog</h1>
      
      <FilterOptions 
        setSearch={setSearch}
        setCategory={setCategory}
        setBrand={setBrand}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSort={setSort}
        setOrder={setOrder}
      />
    
<section className="grid grid-cols-5 gap-2">

    {/* sidbar */}
    <div className="pl-2">
    <FilterCategory setCategory={setCategory} setBrand={setBrand}></FilterCategory>
    </div>


      <div className=" col-span-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

    </div>
  );
}

export default Product;
