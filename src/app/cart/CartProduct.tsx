"use client";
import { CartContext } from "@/features/ContextProvider";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export default function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  //   const Increase = (id) => {
  //     const Index = cart.findIndex((product) => product.id === id);
  //     if (cart[Index].quantity < 10) {
  //       dispatch({ type: "Increase", id });
  //     }
  //   };
  //   const Decrease = (id) => {
  //     const Index = cart.findIndex((product) => product.id === id);
  //     if (cart[Index].quantity > 1) {
  //       dispatch({ type: "Decrease", id });
  //     }
  //   };
  return (
    <>
      <Image src={product.image} alt="" className="object-contain rounded-md" />
      <p>Titulo</p>
      <div>S/. {product.price}</div>

      <div className="ring-2 ring-primary px-3 py-1 rounded-3xl flex items-center justify-between w-24 mx-auto">
        <button
          className="text-xl cursor-pointer"
          onClick={() => handleQuantity("d")}
        >
          -
        </button>
        <button>{quantity}</button>
        <button
          className="text-xl cursor-pointer"
          onClick={() => handleQuantity("i")}
        >
          +
        </button>
      </div>
      <p>total</p>
      <button
        className="cursor-pointer mx-auto"
        onClick={() => dispatch({ type: "Remove", id: product.id })}
      >
        <RiCloseFill className="text-3xl" />
      </button>
    </>
  );
}
