import React from "react";
import { Link } from "react-router";

const FurnitureCard = ({data}) => {
    const {name,image,price,category,id}=data
    
  return (
    <div className="card bg-gray-100 shadow-sm border-1 border-gray-300 hover:scale-105 transition ease-linear">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-90 h-90"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        
        <p className="font-bold">
         Price: $ <span className="font-semibold">{price}</span>
        </p>
        <p className="font-bold">
         Category: <span className="font-semibold">{category}</span>
        </p>
        <div className="card-actions">
            <Link to={`/product/${id}`} className="btn btn-primary">View Details</Link>
          
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
