import React, { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineCloseSquare,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import {
  selectCart,
  toggleCartState,
  clearCart,
  manipulateQuantity,
} from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { BsCartCheckFill } from "react-icons/bs";
// import CheckoutBG from "../public/CheckoutBG.png";

const Checkout = () => {
  const refSideBar = useRef();
  const dispatch = useDispatch();
  const cartState = useSelector(selectCart);

  // All the Utility functons to change handle.
  const toggleCart = () => {
    if (!cartState.isOpen) {
      refSideBar.current.classList.remove("translate-x-full");
      refSideBar.current.classList.add("translate-x-0");
      dispatch(toggleCartState());
    } else if (cartState.isOpen) {
      refSideBar.current.classList.remove("translate-x-0");
      refSideBar.current.classList.add("translate-x-full");
      dispatch(toggleCartState());
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddQuantity = (item, type) => {
    dispatch(manipulateQuantity({ itemCode: item.itemCode, type: type }));
  };

  return (
    <div className="container h-screenjiokmxc m-auto sm:mx-3 lg:m-10 shadow-md p-2 px-8 border-4 rounded-2xl">
      <div className="font-black text-4xl text-center">Checkout</div>
      <br className="bg-slate-500" />
      <form name="delivery-details" className="details">
        <div>
          <h2 className="font-bold text-xl">1. Details</h2>
          <div className="flex">
            <div className="w-1/2 m-3">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="px-2 py-3 border-[3px] w-full rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
              />
            </div>
            <div className="w-1/2 m-3">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                name="Name"
                type="text"
                className="px-2 py-3 border-[3px] w-full rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="2"
              className="px-2 py-3 border-[3px] w-full m-3 rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
            ></textarea>
          </div>

          <div className="flex">
            <div className="w-1/2 m-3">
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="px-2 py-3 border-[3px] w-full rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
              />
            </div>
            <div className="w-1/2 m-3">
              <label htmlFor="city" className="font-semibold">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="px-2 py-3 border-[3px] w-full rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 m-3">
              <label htmlFor="state" className="font-semibold">
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                className="px-2 py-3 border-[3px] w-full rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
              />
            </div>
            <div className="w-1/2 m-3">
              <label htmlFor="pincode" className="font-semibold">
                Pincode
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                className="px-2 py-3  border-[3px] w-full rounded-xl border-violet-400 focus:outline-none focus:ring-4 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl">2. Review Cart</h2>
          <div>
            {/* Closing sidebar icon */}

            <ol className="list-decimal">
              {cartState.itemsList.length > 0 ? (
                cartState.itemsList.map((item) => {
                  return (
                    <li key={item.itemCode}>
                      <div className="flex m-2">
                        <div className="w-2/3 items-center justify-center font-semibold text-lg m-2">
                          {item.itemName}
                        </div>
                        <div className="w-1/3 flex justify-evenly items-center">
                          <AiOutlinePlusCircle
                            onClick={() => handleAddQuantity(item, "+")}
                            className="text-2xl text-pink-600 cursor-pointer hover:text-pink-800"
                          />
                          {item.quantity}
                          <AiOutlineMinusCircle
                            onClick={() => handleAddQuantity(item, "-")}
                            className="text-2xl  text-pink-600 cursor-pointer hover:text-pink-800"
                          />
                        </div>
                      </div>
                    </li>
                  );
                })
              ) : (
                <div className="font-bold text-lg">No items in the Cart!!!</div>
              )}
            </ol>

            <div className="font-medium">Subtotal: {cartState.subTotal}</div>

            <div className="flex mt-3">
              <Link href={"/payment"}>
                <button
                  type="submit"
                  className="flex m-2 text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"
                >
                  <BsCartCheckFill className="my-1 mx-2" /> Payment
                </button>
              </Link>
              <button
                onClick={handleClearCart}
                className="m-2 text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
