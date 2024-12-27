"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Link href="/" onClick={() => setOpen(!open)}>
        <RiMenu3Fill style={{ fontSize: 28 }} />
      </Link>
      {open && (
        <div className="absolute bg-black text-white left-0 top-16 flex flex-col justify-center items-center w-full h-[calc(100vh-80px)] gap-8 text-xl z-[9999]">
          <Link href="/">Home</Link>
          <Link href="/">Lentes de Sol</Link>
          <Link href="/">Lentes Oftálmicos</Link>
          <Link href="/">Lentes de Contacto</Link>
          <Link href="/">Créditos</Link>
        </div>
      )}
    </div>
  );
}
