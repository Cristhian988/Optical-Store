import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-24">
      <div className="container pt-12">
        {/* Top */}
        <div className="flex justify-between flex-wrap gap-14">
          {/* Left */}
          <div className="w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">Optical Store</div>
            </Link>
            <p className="text-sm">
              ¡Donde la visión se encuentra con el estilo! Descubre lentes
              exclusivos, gafas de sol de tendencia y cuidado visual de primera
              clase. ¡Porque ver bien nunca se vio tan bien!
            </p>
            <span className="font-semibold text-sm">
              hello@opticalstore.com
            </span>
            <div className="flex gap-6">
              <Link href="/">
                <FaFacebookF />
              </Link>
              <Link href="/">
                <LuInstagram />
              </Link>
              <Link href="/">
                <FaTiktok />
              </Link>
              <Link href="/">
                <BsTwitterX />
              </Link>
            </div>
          </div>
          {/* Center */}
          <div className="w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-xl">Nosotros</h1>
            <div>
              <ul className="space-y-4">
                <li>
                  <Link href="#">Nosotros</Link>
                </li>
                <li>
                  <Link href="#">Garantías</Link>
                </li>
                <li>
                  <Link href="#">Trabaja con nosotros</Link>
                </li>
                <li>
                  <Link href="#">Politicas de privacidad</Link>
                </li>
                <li>
                  <Link href="#">Soporte</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-xl">Contacto</h1>
            <div>
              <ul className="space-y-4">
                <li>Horario para atención:</li>
                <li>Lunes a Sábado de 10:00 a 19:00</li>
                <li>Consultas Venta Tienda: 0800-14600</li>
                <li>Horario atención venta telefónica:</li>
                <li>Lunes a Sábado de 11:00 a 19:00</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-12 py-6 space-y-4 text-center">
          <hr className="w-full border-gray-300" />
          <p>
            © 2024 Optical Store Copyright © 2024 ISIL | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
