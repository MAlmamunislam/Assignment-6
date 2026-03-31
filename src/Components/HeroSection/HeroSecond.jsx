import React from "react";

const HeroSecond = () => {
  return (
    <div className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6  px-50">
        <div>
          <h2 className="text-4xl font-bold text-white">50K+</h2>
          <p className="text-white">Active Users</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">200+</h2>
          <p className="text-white">Premium Tools </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">4.9</h2>
          <p className="text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
