import React from 'react';

const ProductInfoShimmer = () => {
  return (
    <div className="animate-pulse p-5">
      <div className="flex gap-5">
        <div className="w-1/2 h-80 bg-gray-300 rounded"></div>
        <div className="flex flex-col gap-5 w-1/2">
          <div className="h-10 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-20 bg-gray-300 rounded w-full"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
      <div className="mt-10">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
      </div>
    </div>
  );
};

export default ProductInfoShimmer;
