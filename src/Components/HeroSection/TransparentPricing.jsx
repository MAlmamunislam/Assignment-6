import React from "react";
import { FaCheck } from "react-icons/fa6";

const TransparentPricing = () => {
  return (
    <div>
      <div className=" container mx-auto px-4 py-12">
        <h1 className="text-[48px] font-extrabold text-center ">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-[#627382] mt-4 text-[16px]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ">
            {/* Starter Card */}
            <div className="bg-[#F9FAFC] p-8 rounded-[32px] border border-gray-100 flex flex-col hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              <p className="text-gray-500 text-sm mt-1">
                Perfect for getting started
              </p>

              <div className="my-8 text-4xl font-bold text-gray-900">
                $0
                <span className="text-lg text-gray-400 font-normal">
                  /Month
                </span>
              </div>

              <div className="flex-grow space-y-4 mb-8 text-gray-600">
                <p className="flex gap-1 items-center"><FaCheck /> Access to 10 free tools</p>
                <p className="flex gap-1 items-center"><FaCheck /> Basic templates</p>
                <p className="flex gap-1 items-center"><FaCheck /> Community support</p>
                <p className="flex gap-1 items-center"><FaCheck /> 1 project per month</p>
              </div>

              <button className="w-full bg-[#8B5CF6] text-white font-bold py-4 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
                Get Started Free
              </button>
            </div>

            {/* Pro Card (Main Highlight) */}
            <div className="relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-8 rounded-[32px] flex flex-col text-white shadow-xl hover:scale-105 transition transform">
              {/* Most Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF9C3] text-[#854D0E] text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-200">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="opacity-80 text-sm mt-1">Best for professionals</p>

              <div className="my-8 text-4xl font-bold">
                $29
                <span className="text-lg opacity-60 font-normal">/Month</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <p className="flex gap-1 items-center"><FaCheck /> Access to all premium tools</p>
                <p className="flex gap-1 items-center"><FaCheck /> Unlimited templates</p>
                <p className="flex gap-1 items-center"><FaCheck /> Priority support</p>
                <p className="flex gap-1 items-center"><FaCheck /> Unlimited projects</p>
                <p className="flex gap-1 items-center"><FaCheck /> Cloud sync</p>
              </div>

              <button className="w-full bg-white text-[#8B5CF6] font-bold py-4 rounded-full hover:bg-gray-50 transition">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Card */}
            <div className="bg-[#F9FAFC] p-8 rounded-[32px] border border-gray-100 flex flex-col hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="text-gray-500 text-sm mt-1">
                For teams and businesses
              </p>

              <div className="my-8 text-4xl font-bold text-gray-900">
                $99
                <span className="text-lg text-gray-400 font-normal">
                  /Month
                </span>
              </div>

              <div className="flex-grow space-y-4 mb-8 text-gray-600">
                <p className="flex gap-1 items-center"><FaCheck /> Everything in Pro</p>
                <p className="flex gap-1 items-center"><FaCheck /> Team collaboration</p>
                <p className="flex gap-1 items-center"><FaCheck /> Custom integrations</p>
                <p className="flex gap-1 items-center"><FaCheck /> Dedicated support</p>
                <p className="flex gap-1 items-center"><FaCheck /> SLA guarantee</p>
              </div>

              <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 rounded-full">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
