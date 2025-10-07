import React from "react";
import { Link } from "react-router";
import FurnitureCard from "../Components/FurnitureCard";
import Hero from "../Components/Hero";
import LoadingSpinner from "../Components/LoadingSpinner";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const { products, loading } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <Hero />
      <h1 className="font-bold text-3xl text-center text-blue-400 mt-8">
        FEATURED PRODUCTS
      </h1>

      {loading ? (
        <LoadingSpinner count={6} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          {featuredProducts.map((data) => (
            <FurnitureCard key={data.id} data={data} />
          ))}
        </div>
      )}

      <div className="flex justify-end my-4">
        <Link to="/products" className="font-semibold btn btn-info">
          More Products...
        </Link>
      </div>
    </div>
  );
};

export default Home;
