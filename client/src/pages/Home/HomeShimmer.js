import React from 'react';

const HomeShimmer = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5 items-center animate-pulse">
          <div className="w-1/3 h-14 bg-gray-300 rounded"></div>
          <div className="w-2/3 h-14 bg-gray-300 rounded"></div>
        </div>
        <div className="grid gap-5 grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
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
    </div>
  );
};

export default HomeShimmer;
