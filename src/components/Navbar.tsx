import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="fixed bg-zinc-800 w-full z-[9999]">
      <div className="container py-4">
        <div className="h-full flex justify-between items-center md:hidden">
          {/* MOBILE */}
          <Link href="/">
            <div className="text-2xl tracking-wide">Optical Store</div>
          </Link>
          <Menu />
        </div>
        {/* DESKTOP */}
        <div className="hidden md:flex justify-between items-center gap-8 h-full">
          {/* Logo */}
          <div className=" flex items-center justify-between gap-12">
            <Link href="/" className="flex items-center gap-4">
              <div className="text-3xl tracking-wide">Optical Store</div>
            </Link>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center gap-10 font-medium text-lg">
            <Link href="/sunglasses">Lentes de Sol</Link>
            <Link href="/oftaglasses">Lentes Oftálmicos</Link>
            <Link href="/contactlens">Lentes de Contacto</Link>
            <Link href="/">Créditos</Link>
          </div>
          {/* Icons */}
          <div className="flex items-center justify-between gap-8">
            <NavIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
