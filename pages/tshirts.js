import { apiSlice, useGetProdectsQuery } from "@/store/apiSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Tshirts = () => {
  const dispatch = useDispatch();
  // dispatch(apiSlice.util.resetApiState());
  const { data: productArray = [] } = useGetProdectsQuery();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 justify-center">
            {productArray.map((item) => {
              return (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8"
                  key={item.itemCode}
                >
                  <Link href={`/product/${item.itemCode}`}>
                    <div className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                        src={item.img}
                      />
                    </div>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.itemName}
                      </h2>
                      <p className="mt-1">${item.price}</p>
                    </div>
                  </Link>
                </div>
              );
            })}

            {console.log(productArray)}

            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div> */}
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-8">
              <Link href={"/product/tshirts"}>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block"
                    src="https://m.media-amazon.com/images/I/61JfsRhV+NL._AC_UL400_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirts;
