import { selectCart } from "@/store/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const cartState = useSelector(selectCart);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                ShadowStore.com
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: #897380
              </h1>

              <p className="leading-relaxed mb-4">
                Your order has been successfully placed!!!
              </p>

              <div className="grid grid-cols-3 gap-1 mb-4">
                <h2 className="font-bold border-b-2 py-2 text-lg px-1 text-right">
                  Item Description
                </h2>
                <h2 className="font-bold border-b-2 py-2 text-lg px-1 text-right">
                  Quantity
                </h2>
                <h2 className="font-bold border-b-2 py-2 text-lg px-1 text-right">
                  Item Total
                </h2>
              </div>

              {/* The list of items for order page. */}

              {cartState.itemsList.map((item) => {
                return (
                  <div
                    key={item.itemCode}
                    className="grid grid-cols-3 border-t border-gray-200 py-2"
                  >
                    <span className=" text-gray-500">{item.itemName}</span>
                    <span className="text-gray-500 ml-auto">
                      {item.quantity}
                    </span>
                    <span className="ml-auto text-gray-900">
                      ${item.quantity * item.price}
                    </span>
                  </div>
                );
              })}
              <div>
                <div className="flex flex-col">
                  <span className="my-2 title-font font-medium text-2xl text-gray-900">
                    ${cartState.subTotal}
                  </span>
                  <button className="flex my-3 mr-auto text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
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
