import CardSunGlass from "@/components/CardSunGlass";
import React from "react";
import { all_products } from "../all_products";

export default function page() {
  const products = all_products.filter(
    (product) => product.category === "SunGlasses"
  );

  return (
    <div className="container py-24">
      <h1 className="text-3xl md:text-4xl font-bold pt-10">Lentes de Sol</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        {products.map((product, i) => (
          <CardSunGlass
            key={i}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
