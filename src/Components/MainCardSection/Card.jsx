import React from "react";
import { IoMdCheckmark } from "react-icons/io";
const Card = ({ item }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-2xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
      <span className="absolute top-4 right-4 bg-orange-100 group-hover:bg-orange-200 text-orange-600 text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300">
        {item.tag}
      </span>

      <div className="text-4xl mb-6 flex items-center justify-center bg-gray-50 group-hover:bg-violet-100 w-16 h-16 rounded-xl transition-colors duration-300">
        <img src={item.icon} alt="icon" className="w-8 h-8"/>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-violet-700 transition-colors duration-300">
        {item.name}
      </h3>
      <p className="text-gray-500 text-sm mb-6 transition-colors duration-300 group-hover:text-gray-600">
        {item.description}
      </p>

      <div className="mb-6 transition-colors duration-300 group-hover:text-gray-900">
        <span className="text-3xl font-bold text-gray-900 group-hover:text-violet-800 transition-colors duration-300">
          ${item.price}
        </span>
        <span className="text-gray-400 text-sm">/Mo</span>
      </div>

      <ul className="space-y-3 mb-8 transition-colors duration-300 group-hover:text-gray-700">
        {item.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <div className="mr-2">
              <IoMdCheckmark className="text-green-500" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-[#7C3AED]  text-white font-semibold py-3 rounded-xl ">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
