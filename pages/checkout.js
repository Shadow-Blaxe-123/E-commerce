import React from "react";
// import CheckoutBG from "../public/CheckoutBG.png";

const Checkout = () => {
  return (
    <div className="container bg-fixed bg-center bg-cover bg-no-repeat m-auto sm:mx-3 lg:m-10 shadow-md p-2 px-8 border-4 rounded-2xl">
      <div className="font-black text-4xl text-center">Checkout</div>
      <br className="bg-slate-500" />
      <div className="details">
        <h2 className="font-bold text-xl">1. Details</h2>
        <div className="flex">
          <div className="w-1/2 px-9 py-3">
            <input type="text" />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="px-2 py-3 border-[3px] w-full border-rose-500"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
