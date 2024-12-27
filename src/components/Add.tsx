"use client";
import React, { useState } from "react";

export default function Add() {
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

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Elija la Cantidad</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="ring-2 ring-primary py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            ¡Solo quedan <span className="text-orange-500">4 artículos!</span>{" "}
            <br /> No te lo pierdas!
          </div>
        </div>
        <button className="text-sm rounded-3xl py-2 px-8 bg-primary text-white ">
          AÑADIR AL CARRO
        </button>
      </div>
    </div>
  );
}
