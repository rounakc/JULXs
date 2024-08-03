import React from 'react';

const AdminShimmer = () => {
  return (
    <div className="animate-pulse p-5">
      <div className="mb-5">
        <div className="h-10 bg-gray-300 rounded w-1/4 mb-4"></div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2"
          >
            <div className="w-full h-52 bg-gray-300 rounded-md"></div>
            <div className="px-2 flex flex-col gap-2">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-px bg-gray-300 rounded"></div>
              <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminShimmer;
