import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardContactLens from "./CardContactLens";

import contactLens1 from "../../public/SunGlasses/ContactLens1.jpg";
import contactLens2 from "../../public/SunGlasses/ContactLens2.jpg";
import contactLens3 from "../../public/SunGlasses/ContactLens3.jpg";
import contactLens4 from "../../public/SunGlasses/ContactLens4.jpg";

export default function SliderContactLens() {
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

  const contactLens = [
    {
      id: 1,
      name: "Jean Monnier",
      price: 109.99,
      description: "J84150 Café Mujer",
      image: contactLens1,
    },
    {
      id: 2,
      name: "Ralph",
      price: 239.99,
      description: "RA5286U Crema Mujer",
      image: contactLens2,
    },
    {
      id: 3,
      name: "Bvlgari",
      price: 849.99,
      description: "BV8255B Negro Mujer",
      image: contactLens3,
    },
    {
      id: 4,
      name: "Bvlgari",
      price: 1049.99,
      description: "BV6176 Dorado Mujer",
      image: contactLens4,
    },
    {
      id: 5,
      name: "Jean Monnier",
      price: 109.99,
      description: "J84150 Café Mujer",
      image: contactLens1,
    },
    {
      id: 6,
      name: "Ralph",
      price: 239.99,
      description: "RA5286U Crema Mujer",
      image: contactLens2,
    },
    {
      id: 7,
      name: "Bvlgari",
      price: 849.99,
      description: "BV8255B Negro Mujer",
      image: contactLens3,
    },
    {
      id: 8,
      name: "Bvlgari",
      price: 1049.99,
      description: "BV6176 Dorado Mujer",
      image: contactLens4,
    },
  ];

  const product = contactLens.map((product) => (
    <CardContactLens
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      image={product.image}
    />
  ));

  return (
    <div className="container mx-auto py-14">
      <h1 className="text-3xl md:text-4xl font-bold">Lentes de Contacto</h1>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
