"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "@/features/ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "@/features/CartReducer";

export default function Cartpage() {
  const { cart } = useContext(CartContext);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="container py-24 flex items-center gap-8">
      {/* {isOpen ? "Close" : "Open"} */}
      <div className="w-2/3">
        <div className="hidden md:grid grid-cols-6 gap-4 pt-10 font-bold text-center text-lg">
          <p>Producto</p>
          <p>Titulo</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Remover</p>
        </div>
        <hr className="border-gray-300 mt-4" />
        <div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-8 pt-10 text-center items-center">
            {cart.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
          </div>
          <hr className="border-gray-300 mt-8" />
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex flex-col gap-6 bg-zinc-900 text-white p-4 rounded-md">
          <h5>Total Items: {totalItem(cart)}</h5>
          <h5>Total Price: ${totalPrice(cart)}</h5>
          <button className="bg-primary text-white rounded-md p-2">
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
}
