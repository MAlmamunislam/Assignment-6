import React from "react";

const PrimiumDigitSection = ({ products, setProducts }) => {
  return (
    <div className="mt-[120px] mb-[40px] ">
      <div className=" text-center">
        <h1 className="text-[48px] font-extrabold ">Premium Digital Tools</h1>
        <p className="text-[16px] text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> boost your productivity and creativity.
        </p>
        <div className="mt-4">
          <button 
            className={`btn rounded-l-full ${products ? 'btn-primary' : ''}`}
            onClick={() => setProducts(true)}
          >
            Products
          </button>
          <button 
            className={`btn rounded-r-full ${!products ? 'btn-primary' : ''}`}
            onClick={() => setProducts(false)}
          >
            Cart (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimiumDigitSection;
