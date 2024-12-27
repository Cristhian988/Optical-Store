import React from "react";

import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  price: number;
  description: string;
  image: string;
  hover: string;
}

export default function CardSunGlass({
  name,
  price,
  description,
  image,
  hover,
}: Props) {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-center flex-wrap">
      <Link href="/" className="w-full flex flex-col gap-4 md:w-[90%]">
        <div className="relative w-full h-80 bg-white rounded-md">
          <Image
            src={hover}
            alt="sunglasses"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={image}
            alt="sunglasses"
            fill
            className="absolute object-contain rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{name}</span>
          <span>{price}</span>
        </div>
        <div className="text-sm text-gray-500">{description}</div>
        <button className="rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-[#328ec5]">
          Añadir al carrito
        </button>
      </Link>
    </div>
  );
}
