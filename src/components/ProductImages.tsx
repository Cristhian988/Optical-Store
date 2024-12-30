"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ProductImages({
  image,
}: {
  image: string | StaticImageData;
}) {
  return (
    <div className="">
      <div className="h-[500px] relative bg-white">
        <Image
          src={image}
          alt="image"
          fill
          sizes="50vw"
          className="object-contain rounded-md z-10"
        />
      </div>
    </div>
  );
}
