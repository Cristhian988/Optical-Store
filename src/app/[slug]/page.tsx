import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";
import React from "react";

export default function SinglePage() {
  return (
    <div className="container relative flex flex-col items-center lg:flex-row gap-16 pt-24">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">BVLGARI</h1>
        <p>BV8255B Negro Mujer</p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-2xl">S/. 109.99</h2>
          <small className="text-gray-500">SKU 8056597717885</small>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <div className="text-lg">
          <h4 className="font-medium mb-4">Características del producto</h4>
          <div className="flex gap-28">
            <ul className="text-sm">
              <li>
                <span>Forma:</span>Agatado
              </li>
              <li>
                <span>Genero:</span>Mujer
              </li>
              <li>
                <span>Polarizado:</span>No
              </li>
              <li>
                <span>Color Montura:</span>Negro
              </li>
              <li>
                <span>Color de Luna:</span>Gris
              </li>
            </ul>
            <ul className="text-sm">
              <li>
                <span>Varilla:</span>140
              </li>
              <li>
                <span>Puente:</span>17
              </li>
              <li>
                <span>Espejado:</span>No
              </li>
              <li>
                <span>Calibre:</span>57
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <Add />
      </div>
    </div>
  );
}
