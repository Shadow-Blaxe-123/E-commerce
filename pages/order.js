import { selectCart } from "@/store/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const cartState = useSelector(selectCart);

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                ShadowStore.com
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: #897380
              </h1>

              <p class="leading-relaxed mb-4">
                Your order has been successfully placed!!!
              </p>

              <div class="flex mb-4">
                <h2 class="font-bold flex-grow border-b-2 py-2 text-lg px-1">
                  Item Description
                </h2>
                <h2 class="font-bold flex-grow border-b-2 py-2 text-lg px-1">
                  Quantity
                </h2>
                <h2 class="font-bold flex-grow border-b-2 py-2 text-lg px-1">
                  Item Total
                </h2>
              </div>

              {cartState.itemsList.map((item) => {
                return (
                  <div
                    key={item.itemCode}
                    class="flex border-t border-gray-200 py-2"
                  >
                    <span class="text-gray-500">{item.itemName}</span>
                    <span class="text-gray-500 ml-auto">{item.quantity}</span>
                    <span class="ml-auto text-gray-900">
                      ${item.quantity * item.price}
                    </span>
                  </div>
                );
              })}

              <div class="flex flex-col">
                <span class="my-2 title-font font-medium text-2xl text-gray-900">
                  ${cartState.subTotal}
                </span>
                <button class="flex my-3 mr-auto text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/400x400"
              />
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
