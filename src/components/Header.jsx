import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiShoppingCart, GiWallet } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaTruck, FaThumbsUp, FaUserFriends } from "react-icons/fa";
import { AiFillHeart, AiFillTag } from "react-icons/ai";
import { MdHelp } from "react-icons/md";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "sticky top-0 left-0 z-10 bg-gray-400/90 max-w-[1640px] mx-auto flex justify-between items-center p-4"
          : "sticky top-0 left-0 z-10 bg-white max-w-[1640px] mx-auto flex justify-between items-center p-4"
      }
    >
      {/* LEFT */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <BiMenuAltLeft onClick={() => setDrawer(true)} size={35} />
        </div>

        <h1 className="text-2xl sm:text-2xl lg:text-4xl px-2 flex">
          BEST <span className="font-bold px-2 text-orange-500">FOODS</span>
        </h1>
      </div>
      {/* SEARCH */}
      <div
        className="bg-gray-200 rounded-full flex items-center
       px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
      >
        <input
          className="bg-transparent p-2 pl-3 w-full border-none outline-none"
          type="text"
          placeholder="Search Foods"
        />
        <FiSearch size={20} className="mr-2 cursor-pointer" />
      </div>
      {/* CART */}
      <div className="relative ml-[20px] inline-block cursor-pointer md:mr-4">
        <GiShoppingCart size={28} className="font-bold">
          <path
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
        </GiShoppingCart>
        <span
          className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 
        text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2
         bg-orange-500 rounded-full"
        >
          0
        </span>
      </div>

      {/* MOBILE MENU */}

      <div
        onClick={() => setDrawer(false)}
        className={`fixed top-0 w-screen h-screen cursor-pointer bg-black/80 ${
          drawer ? "left-0" : "left-[-200%]"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 w-[300px] h-screen cursor-default bg-white z-20 duration-300 ${
            drawer ? "left-0" : "left-[-100%]"
          }`}
        >
          <GrClose
            size={20}
            onClick={() => setDrawer(!drawer)}
            className="absolute right-4 cursor-pointer top-4"
          />
          <h2 className="text-2xl p-4">
            BEST <span className="font-bold text-orange-500">EATS</span>
          </h2>

          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaTruck size={25} className="mx-4" /> Orders
              </li>

              <li className="text-xl py-4 flex cursor-pointer">
                <AiFillHeart size={25} className="mx-4" /> Favoutites
              </li>

              <li className="text-xl py-4 flex cursor-pointer">
                <GiWallet size={25} className="mx-4" /> Wallet
              </li>

              <li className="text-xl py-4 flex cursor-pointer">
                <MdHelp size={25} className="mx-4" /> Help
              </li>

              <li className="text-xl py-4 flex cursor-pointer">
                <AiFillTag size={25} className="mx-4" /> Promotions
              </li>

              <li className="text-xl py-4 flex cursor-pointer">
                <FaThumbsUp size={25} className="mx-4" /> Best One
              </li>

              <li className="text-xl py-4 flex cursor-pointer">
                <FaUserFriends size={25} className="mx-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
