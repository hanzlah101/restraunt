import React from "react";
import { categories } from "../data";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-10 py-5">
      <h1 className="font-bold text-4xl text-orange-500 text-center">
        See all categories we offer
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => {
          return (
            <div
              className="bg-gray-100 rounded-lg flex items-center justify-between pl-5"
              key={index}
            >
              <h2 className="font-bold sm:font-xl">{item.name}</h2>
              <img className="w-20 pr-5" src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
