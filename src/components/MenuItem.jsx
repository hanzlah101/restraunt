import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="cursor-pointer rounded-lg border shadow-lg hover:scale-[1.05] duration-300">
      <img
        className="w-full h-[300px] object-cover rounded-t-lg"
        src={item.image}
        alt={item.name}
      />
      <div className="flex flex-col justify-center align-center items-center px-2 py-4">
        <p className="text-orange-500 font-bold text-[32px] mr-5">
          $ {item.price}
        </p>
        <p className="font-bold text-[25px] ml-5">{item.name}</p>
      </div>
    </div>
  );
};

export default MenuItem;
