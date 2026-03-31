import React from "react";
import Picture from "../../assets/9214780.jpg";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const handleDelete = (item) => {
    const updatedCart = cart.filter((items) => items.id !== item.id);
    console.log(updatedCart);
    setCart(updatedCart);
    toast.error(`You have removed the ${item.name} plan from your cart!`);
  };
  const handleCheckout = () => {
    setCart([]);
    toast.success("Your checkout was successful! Thank you for your purchase.");
  }
  return (
    <div className="border p-10 rounded-2xl border-[#d1cbcb]">
      <h2 className=" text-[24px] font-bold text-[#101727] ">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <div className="w-77 flex justify-center mx-auto  items-center ">
            <img className="rounded-2xl" src={Picture} alt="" />
          </div>
          <h2 className="text-[30px] font-extrabold text-red-400">
            No Card Selected yet{" "}
          </h2>
          <p className="text-gray-500 text-3xl">
            {" "}
            Get started by adding a plan to your cart!
          </p>
        </div>
      ) : (
        cart.map((item, ind) => {
          return (
            <div
              className="flex items-center bg-[#F9FAFC] gap-3.5 justify-between p-10 rounded-2xl mt-2.5"
              key={ind}
            >
              <div className="flex  gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <img src={item.icon} alt="" />
                </div>
                <div>
                  <h3 className="text-[15px] md:text-[20px] md:font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-[16px] text-[#627382] ">${item.price}</p>
                </div>
              </div>
              <button
                className="text-red-700 btn"
                onClick={() => handleDelete(item)}
              >
                remove
              </button>
            </div>
          );
        })
      )}
      <div>
        {cart.length === 0 ? (
          ""
        ) : (
          <div>
            <div className="flex items-center justify-between  mt-5">
              <p className="text-[16px] text-[#627382] ">Total:</p>
              <h2 className="font-bold text-[24px]"> $ {cart.reduce((total, item) => total + item.price, 0)} </h2>
            </div>
            <button onClick={handleCheckout} className="btn rounded-full w-full  text-white text-[16px] mt-2.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"  >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
