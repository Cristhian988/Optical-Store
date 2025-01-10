"use client";
import React, { useContext } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CartContext } from "@/features/ContextProvider";

interface Props {
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData;
  id: number;
  quantity: number;
}

export default function CardSunGlass({
  name,
  price,
  description,
  image,
  id,
}: Props) {
  const { dispatch } = useContext(CartContext);
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-4 justify-center flex-wrap">
      <Link
        href="/[slug]"
        as={`/${id}`}
        className="w-full flex flex-col gap-4 md:w-[90%]"
      >
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={image}
            alt="sunglasses"
            fill
            className="absolute object-contain rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{name}</span>
          <span>S/. {price}</span>
        </div>
        <div className="text-sm text-gray-500">{description}</div>
      </Link>
      <button
        className="mx-4 w-full rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-primary"
        onClick={() =>
          dispatch({
            type: "Add",
            product: { id, name, price, description, image },
          })
        }
      >
        Añadir al carrito
      </button>
    </div>
  );
}
