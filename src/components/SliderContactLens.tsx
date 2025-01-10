import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardContactLens from "./CardContactLens";
import { all_products } from "@/app/all_products";

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

  const products = all_products.filter(
    (product) => product.category === "ContactLens"
  );

  return (
    <div className="container mx-auto py-14">
      <h1 className="text-3xl md:text-4xl font-bold">Lentes de Contacto</h1>
      <Carousel responsive={responsive} infinite={true}>
        {products.map((product, i) => (
          <CardContactLens
            key={i}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </Carousel>
    </div>
  );
}
