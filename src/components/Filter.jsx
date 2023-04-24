import React, { useState } from "react";
import Menu from "./Menu";
import { data } from "../data";

const Filter = () => {
  const [items, setItems] = useState(data);

  const filterCategory = (category) => {
    setItems(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-9 p-12">
      <h1 className="text-orange-500 font-bold text-center text-4xl">MENU</h1>

      {/* CATEGORY FILTER */}

      <div className="flex flex-col lg:flex-row justify-between px-9">
        <div>
          <p className="font-bold text-gray-700 mt-9 ml-2">Categories</p>
          <div className="flex justify-between flex-wrap mt-3">
            <button
              onClick={() => setItems(data)}
              className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterCategory("burger")}
              className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Burger
            </button>

            <button
              onClick={() => filterCategory("pizza")}
              className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Pizza
            </button>

            <button
              onClick={() => filterCategory("salad")}
              className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Salad
            </button>

            <button
              onClick={() => filterCategory("chicken")}
              className="m-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
      </div>

      <Menu items={items} />
    </div>
  );
};

export default Filter;
