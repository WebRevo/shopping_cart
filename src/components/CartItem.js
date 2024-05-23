import React from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-green-200 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.image} className="h-28 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-purple-700 font-semibold">
              {item.title}
            </h1>
            <p>Description:{item.description}</p>
            <p>Category:{item.category}</p>
            <p>Stock:{item.stock}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-red-300 hover:bg-black-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <Delete className="text-gray-800" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
