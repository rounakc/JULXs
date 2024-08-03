import React from 'react';


const LoginShimmer = () => {
    
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-white p-5 rounded w-[450px] animate-pulse">
        <h1 className="text-primary text-2xl">
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
        </h1>
        <div className="h-px bg-gray-300 rounded my-4"></div>
        <div className="space-y-4">
          <div className="h-5 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
          <div className="text-center">
            <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginShimmer;
