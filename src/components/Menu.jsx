import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div
      className="max-w-[1640px] m-auto px-4 p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    gap-6 pt-4"
    >
      {items.map((item, index) => {
        return (
          <div key={index}>
            <MenuItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
