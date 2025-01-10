"use client";
import Image from "next/image";
import React, { useState } from "react";
// import img1 from "../../public/ejemplo.jpg";
// import img2 from "../../public/ejemplo2.jpg";

export default function CartModal() {
  const [cartItem, setcartItem] = useState(true);
  return (
    <div className="w-max absolute top-12 right-0 p-4 rounded-md bg-[#328ec5] shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
      {!cartItem ? (
        <div className="">No hay artículos en el carrito</div>
      ) : (
        <>
          <h2 className="text-xl mb-4">Carrito de Compras</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="/ejemplo.jpg"
                alt=""
                width={72}
                height={96}
                className="object-contain rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Producto</h3>
                    <div className="p-1 bg-[#1d5a87] rounded-md">
                      S/. 349.99
                    </div>
                  </div>
                  {/* Description */}
                  <div className="text-sm ">disponible</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span>Cant. 2</span>
                  <span className="text-[#132a3e] cursor-pointer">Remover</span>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="/ejemplo2.jpg"
                alt=""
                width={72}
                height={96}
                className="object-contain rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Producto</h3>
                    <div className="p-1 bg-[#1d5a87] rounded-md">
                      S/. 599.99
                    </div>
                  </div>
                  {/* Description */}
                  <div className="text-sm ">disponible</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span>Cant. 2</span>
                  <span className="text-[#132a3e]">Remover</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="mt-4">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">S/. 949.98</span>
            </div>
            <div className="flex justify-between text-sm mt-4">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver Carrito
              </button>
              <button className="rounded-md py-3 px-4  bg-[#1c425e] text-white">
                Proceder
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
