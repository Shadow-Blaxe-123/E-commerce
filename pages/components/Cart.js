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

export const Cart = () => {
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
    <div>
      {/* Shopping Cart */}

      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-4 mx-5 font-bold md:text-xl"
      >
        <AiOutlineShoppingCart className="cursor-pointer tetxt-xl md:text-4xl" />
      </div>
      {/* Shopping Cart Sidebar */}
      <div
        ref={refSideBar}
        className="w-80 z-10 sidebar top-0 right-0 bg-violet-200 p-7 transform transition-transform translate-x-full fixed h-full"
      >
        {/* Closing sidebar icon */}
        <AiOutlineCloseSquare
          onClick={toggleCart}
          className="text-purple-700 top-2 text-3xl cursor-pointer right-2 absolute"
        />
        <h2 className="font-bold text-xl flex justify-center border-b-2 border-green-500">
          Shopping Cart
        </h2>

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
          <Link href={"../checkout"} className="mr-auto">
            <button className="flex mr-auto text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">
              <BsBagCheckFill className="my-1 mx-2" /> Checkout
            </button>
          </Link>

          <button
            onClick={handleClearCart}
            className="mr-auto text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
