import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* OVERLAY */}

        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            THE <span className="text-orange-500">BEST</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mt-2">
            FOODS <span className="text-gray-200">DELIVERED</span>
          </h1>
        </div>

        <img
          className="w-full h-[500px] object-cover z-0"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hero_img"
        />
      </div>
    </div>
  );
};

export default Hero;
