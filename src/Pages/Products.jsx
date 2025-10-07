import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import FurnitureCard from "../Components/FurnitureCard";
import LoadingSpinner from "../Components/LoadingSpinner";
const Products = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedProduct = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products;

  return (
    <div>
      <h1 className="font-bold my-4 text-3xl">
        ALL PRODUCTS{" "}
        <span className="text-xs text-gray-500">
          ({searchedProduct.length}) product found
        </span>
      </h1>
      <div className="flex justify-end">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            required
            placeholder="Search Products"
          />
        </label>
      </div>
      {loading ? (
        <LoadingSpinner count={16}></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 my-10">
          {searchedProduct.map((data) => (
            <FurnitureCard key={data.id} data={data}></FurnitureCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
