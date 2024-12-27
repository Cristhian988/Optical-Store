import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../../public/banner/banner1.jpg";
import banner2 from "../../public/banner/banner2.jpg";
import banner3 from "../../public/banner/banner3.jpg";
import Link from "next/link";
import Image from "next/image";

export default function MainSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const banners = [
    {
      id: 1,
      image: banner1,
      alt: "First Banner",
    },
    {
      id: 2,
      image: banner2,
      alt: "Second Banner",
    },
    {
      id: 3,
      image: banner3,
      alt: "Third Banner",
    },
  ];
  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-center items-center">
            <Image
              src={banner.image}
              alt={banner.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
