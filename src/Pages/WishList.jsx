import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { loadWishlist, removeFromWishlist } from "../Utils/localStorage";
const WishList = () => {
  const [wishList, setWishList] = useState(()=>loadWishlist());
  const [sortOrder, setSortOrder] = useState("none");
 
  if(wishList.length===0){
    return <h1 className="text-4xl font-bold mt-20 text-center">No Data Available!!!</h1>
  }
  const sortItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishList].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishList].sort((a, b) => b.price - a.price);
    } else {
      return wishList;
    }
  })();
  const handleRomoveWishlist = (id) => {
    removeFromWishlist(id)
    setWishList(prev=>prev.filter(p=>p.id !==id));
  
  };
  // generate data
  const totalsByCategory={}
  wishList.forEach(product=>{
    const category=product.category
     totalsByCategory[category]=(totalsByCategory[category]||0)+product.price
  })
 const chartData=Object.keys(totalsByCategory).map(category=>({
  category:category,
  total:totalsByCategory[category]
 }))

  return (
    <div>
      <div className="flex justify-between my-6">
        <h1 className="font-bold text-2xl">
          WishList{" "}
          <span className="text-xl text-gray-500">
            ({sortItem.length}) product found
          </span>
        </h1>
        <div>
          <label className="from-control w-full max-w-xs">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="cursor-pointer select select-bordered"
            >
              <option value="none">Sort by price</option>
              <option value="price-asc">Low -&gt; High</option>
              <option value="price-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
      </div>
      {sortItem.map((list) => (
        <div
          key={list.id}
          className="card card-side bg-base-100 lg:w-150 flex flex-col lg:flex-row  items-center shadow-sm my-4"
        >
          <figure className="p-4">
            <img src={list.image} alt="" className="h-30" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{list.name}</h2>
            <p className="font-semibold text-gray-400">{list.category}</p>
            <p className="font-semibold text-gray-500">$ {list.price}</p>
            <div className="card-actions">
              <button
                onClick={() => handleRomoveWishlist(list.id)}
                className="btn btn-primary"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* chart */}
      <div className="space-y-3 mb-10 ">
        <h1 className="text-xl font-semibold">WishList Summary</h1>
        <div className="bg-base-100 border border-gray-200 rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              
              data={chartData}
              
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              
              <Bar
                dataKey="total"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WishList;
