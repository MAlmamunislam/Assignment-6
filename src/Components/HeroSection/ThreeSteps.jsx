import React from "react";

const ThreeSteps = () => {
  return (
    <div className="bg-[#eceef1] mt-20 p-10 ">
      <div className=" container mx-auto">
        <h1 className="text-4xl font-bold  text-center pt-10">
          Get Started in 3 Steps
        </h1>
        <p className="text-[16px] text-center text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="flex justify-around mt-10 gap-10 flex-wrap">
          <div className="relative bg-white p-10 rounded-[20px] border border-gray-100  flex flex-col items-center text-center max-w-sm">
           
            <div className="absolute top-6 right-6 w-8 h-8 bg-[#6366f1] text-white text-xs font-bold rounded-full flex items-center justify-center">
              01
            </div>

            <div className="w-24 h-24 bg-[#f3f4ff] rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-[#6366f1]">👤</span>
            </div>

        
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Create Account
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="relative bg-white p-10 rounded-[20px] border border-gray-100  flex flex-col items-center text-center max-w-sm">
   
            <div className="absolute top-6 right-6 w-8 h-8 bg-[#6366f1] text-white text-xs font-bold rounded-full flex items-center justify-center">
              02
            </div>

            <div className="w-24 h-24 bg-[#f3f4ff] rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-[#6366f1]">👤</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Choose Products
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
             Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="relative bg-white p-10 rounded-[20px] border border-gray-100  flex flex-col items-center text-center max-w-sm">

            <div className="absolute top-6 right-6 w-8 h-8 bg-[#6366f1] text-white text-xs font-bold rounded-full flex items-center justify-center">
              03
            </div>


            <div className="w-24 h-24 bg-[#f3f4ff] rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-[#6366f1]">👤</span>
            </div>


            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Start Creating
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
             Download and start using your premium  tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
