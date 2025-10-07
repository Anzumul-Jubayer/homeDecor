import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { updateList } from "../Utils/localStorage";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  const productDetails = products.find(
    (product) => product.id === parseInt(id)
  );
  if (loading) {
    return <p>Loading....</p>;
  }
  const { name, image, price, category, description } = productDetails;

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-6">Product details</h1>
      <div className="flex justify-center">
        <div className="card bg-gray-100 w-200 shadow-sm border-1 border-gray-300 mb-10">
          <div className="flex flex-col lg:flex-row items-center">
            <figure className="px-10 py-10">
              <img
                src={image}
                alt={name}
                className="rounded-xl w-full h-90 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <p className="font-bold">
                Price: $ <span className="font-semibold">{price}</span>
              </p>
              <p className="font-bold">
                Category: <span className="font-semibold">{category}</span>
              </p>
              <div className="card-actions">
                <button
                  onClick={() => updateList(productDetails)}
                  className="btn btn-primary"
                >
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
