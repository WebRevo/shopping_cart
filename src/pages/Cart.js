import React, { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-between p-2">
              {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-semibold text-lg text-black-800">
                  Cart Details
                </h1>
                <p>
                  <span className="text-gray-700 font-semibold">
                    Total Items
                  </span>{" "}
                  : {cart.length}
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-semibold">
                    Total Amount
                  </span>{" "}
                  : ${totalAmount}
                </p>
                <button className="bg-green-700 hover:bg-yellow-200 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-black-600 font-bold hover:text-black-700 p-3">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link to={"/"}>
              <button className="bg-green-700 hover:bg-red-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-black-600 font-bold hover:text-red-700 p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
