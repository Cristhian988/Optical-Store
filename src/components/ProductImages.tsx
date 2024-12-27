"use client";
import Image from "next/image";
import React, { useState } from "react";
import SunGlasses1 from "../../public/SunGlasses/product1/sunGlass3-1.jpg";
import SunGlasses2 from "../../public/SunGlasses/product1/sunGlass3-2.jpg";
import SunGlasses3 from "../../public/SunGlasses/product1/sunGlass3-3.jpg";
import SunGlasses4 from "../../public/SunGlasses/product1/sunGlass3-4.jpg";

const images = [
  {
    id: 1,
    image: SunGlasses1,
  },
  {
    id: 2,
    image: SunGlasses2,
  },
  {
    id: 3,
    image: SunGlasses3,
  },
  {
    id: 4,
    image: SunGlasses4,
  },
];

export default function ProductImages() {
  const [show, setShow] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative bg-white">
        <Image
          src={images[show].image}
          alt="sunglasses"
          fill
          sizes="50vw"
          className="object-contain rounded-md z-10"
        />
      </div>
      <div className="flex justify-between gap-4">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="w-1/4 h-32 relative gap-4"
            onClick={() => setShow(i)}
          >
            <Image
              src={image.image}
              alt="sunglasses"
              fill
              sizes="30vw"
              className="object-contain rounded-md z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
