"use client";
import React, { useEffect, useState } from "react";
import { all_products } from "../all_products";
import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";

export default function Details({ slug }: { slug: string }) {
  const [data, setData] = useState<(typeof all_products)[0]>();

  const fetchData = () => {
    for (let i = 0; i < all_products.length; i++) {
      if (Number(slug) === all_products[i].id) {
        setData(all_products[i]);
        console.log(all_products[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container relative flex flex-col items-center lg:flex-row gap-16 pt-24">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max pt-10">
          {data?.image && <ProductImages image={data?.image} />}
        </div>
        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 pt-10">
          <h1 className="text-4xl font-medium uppercase">{data?.name}</h1>
          <p>{data?.description}</p>
          <div className="h-[2px] bg-gray-100" />
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-2xl">{data?.price}</h2>
            <small className="text-gray-500">SKU 8056597717885</small>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <div className="text-lg">
            <h4 className="font-medium mb-4">Características del producto</h4>
            <div className="flex gap-28">
              <ul className="text-sm">
                <li>
                  <span>Forma: </span>Agatado
                </li>
                <li>
                  <span>Genero: </span>Mujer
                </li>
                <li>
                  <span>Polarizado: </span>No
                </li>
                <li>
                  <span>Color Montura: </span>Negro
                </li>
                <li>
                  <span>Color de Luna: </span>Gris
                </li>
              </ul>
              <ul className="text-sm">
                <li>
                  <span>Varilla: </span>140
                </li>
                <li>
                  <span>Puente: </span>17
                </li>
                <li>
                  <span>Espejado: </span>No
                </li>
                <li>
                  <span>Calibre: </span>57
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <Add />
        </div>
      </div>
    </div>
  );
}
