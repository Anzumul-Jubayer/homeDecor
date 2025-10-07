import React from "react";

const LoadingSpinner = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex  flex-col gap-4">
          <div className="skeleton h-90 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
