"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Link href="/" onClick={() => setOpen(!open)}>
        {open ? (
          <RiCloseFill style={{ fontSize: 30 }} />
        ) : (
          <RiMenu3Fill style={{ fontSize: 28 }} />
        )}
      </Link>
      {open && (
        <div className="absolute bg-black text-white left-0 top-16 flex flex-col justify-center items-center w-full h-[calc(100vh-80px)] gap-8 text-xl z-[9999]">
          <Link href="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link href="/sunglasses" onClick={() => setOpen(!open)}>
            Lentes de Sol
          </Link>
          <Link href="/oftaglasses" onClick={() => setOpen(!open)}>
            Lentes Oftálmicos
          </Link>
          <Link href="/contactlens" onClick={() => setOpen(!open)}>
            Lentes de Contacto
          </Link>
          <Link href="/">Créditos</Link>
        </div>
      )}
    </div>
  );
}
