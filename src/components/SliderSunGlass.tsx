import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardSunGlass from "./CardSunGlass";

import SunGlasses1 from "../../public/SunGlasses/SunGlasses1.jpg";
import SunGlasses2 from "../../public/SunGlasses/SunGlasses2.jpg";
import SunGlasses3 from "../../public/SunGlasses/SunGlasses3.jpg";
import SunGlasses4 from "../../public/SunGlasses/SunGlasses4.jpg";
import SunGlassesHover1 from "../../public/SunGlasses/SunGlassesHover1.jpg";
import SunGlassesHover2 from "../../public/SunGlasses/SunGlassesHover2.jpg";
import SunGlassesHover3 from "../../public/SunGlasses/SunGlassesHover3.jpg";
import SunGlassesHover4 from "../../public/SunGlasses/SunGlassesHover4.jpg";

export default function SliderSunGlass() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1023 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sunGlasses = [
    {
      id: 1,
      name: "Jean Monnier",
      price: 109.99,
      description: "J84150 Café Mujer",
      image: SunGlasses1,
      hover: SunGlassesHover1,
    },
    {
      id: 2,
      name: "Ralph",
      price: 239.99,
      description: "RA5286U Crema Mujer",
      image: SunGlasses2,
      hover: SunGlassesHover2,
    },
    {
      id: 3,
      name: "Bvlgari",
      price: 849.99,
      description: "BV8255B Negro Mujer",
      image: SunGlasses3,
      hover: SunGlassesHover3,
    },
    {
      id: 4,
      name: "Bvlgari",
      price: 1049.99,
      description: "BV6176 Dorado Mujer",
      image: SunGlasses4,
      hover: SunGlassesHover4,
    },
    {
      id: 5,
      name: "Jean Monnier",
      price: 109.99,
      description: "J84150 Café Mujer",
      image: SunGlasses1,
      hover: SunGlassesHover1,
    },
    {
      id: 6,
      name: "Ralph",
      price: 239.99,
      description: "RA5286U Crema Mujer",
      image: SunGlasses2,
      hover: SunGlassesHover2,
    },
    {
      id: 7,
      name: "Bvlgari",
      price: 849.99,
      description: "BV8255B Negro Mujer",
      image: SunGlasses3,
      hover: SunGlassesHover3,
    },
    {
      id: 8,
      name: "Bvlgari",
      price: 1049.99,
      description: "BV6176 Dorado Mujer",
      image: SunGlasses4,
      hover: SunGlassesHover4,
    },
  ];

  const product = sunGlasses.map((product) => (
    <CardSunGlass
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      image={product.image}
      hover={product.hover}
    />
  ));

  return (
    <div className="container mx-auto py-14">
      <h1 className="text-3xl md:text-4xl font-bold">Lentes de Sol</h1>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
