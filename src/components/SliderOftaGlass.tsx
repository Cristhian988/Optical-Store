import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import OftaGlasses1 from "../../public/SunGlasses/Glasses1.jpg";
import OftaGlasses2 from "../../public/SunGlasses/Glasses2.jpg";
import OftaGlasses3 from "../../public/SunGlasses/Glasses3.jpg";
import OftaGlasses4 from "../../public/SunGlasses/Glasses4.jpg";
import OftaGlassesHover1 from "../../public/SunGlasses/GlassesHover1.jpg";
import OftaGlassesHover2 from "../../public/SunGlasses/GlassesHover2.jpg";
import OftaGlassesHover3 from "../../public/SunGlasses/GlassesHover3.jpg";
import OftaGlassesHover4 from "../../public/SunGlasses/GlassesHover4.jpg";
import CardOftaGlass from "./CardOftaGlass";

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

const oftaGlasses = [
  {
    id: 1,
    name: "Jean Monnier",
    price: 109.99,
    description: "J84150 Café Mujer",
    image: OftaGlasses1,
    hover: OftaGlassesHover1,
  },
  {
    id: 2,
    name: "Ralph",
    price: 239.99,
    description: "RA5286U Crema Mujer",
    image: OftaGlasses2,
    hover: OftaGlassesHover2,
  },
  {
    id: 3,
    name: "Bvlgari",
    price: 849.99,
    description: "BV8255B Negro Mujer",
    image: OftaGlasses3,
    hover: OftaGlassesHover3,
  },
  {
    id: 4,
    name: "Bvlgari",
    price: 1049.99,
    description: "BV6176 Dorado Mujer",
    image: OftaGlasses4,
    hover: OftaGlassesHover4,
  },
  {
    id: 5,
    name: "Jean Monnier",
    price: 109.99,
    description: "J84150 Café Mujer",
    image: OftaGlasses1,
    hover: OftaGlassesHover1,
  },
  {
    id: 6,
    name: "Ralph",
    price: 239.99,
    description: "RA5286U Crema Mujer",
    image: OftaGlasses2,
    hover: OftaGlassesHover2,
  },
  {
    id: 7,
    name: "Bvlgari",
    price: 849.99,
    description: "BV8255B Negro Mujer",
    image: OftaGlasses3,
    hover: OftaGlassesHover3,
  },
  {
    id: 8,
    name: "Bvlgari",
    price: 1049.99,
    description: "BV6176 Dorado Mujer",
    image: OftaGlasses4,
    hover: OftaGlassesHover4,
  },
];

const product = oftaGlasses.map((product) => (
  <CardOftaGlass
    key={product.id}
    name={product.name}
    price={product.price}
    description={product.description}
    image={product.image}
    hover={product.hover}
  />
));

export default function SliderOftaGlass() {
  return (
    <div className="container mx-auto py-14">
      <h1 className="text-3xl md:text-4xl font-bold">Lentes de Oftálmicos</h1>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
