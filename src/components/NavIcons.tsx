"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartModal from "./CartModal";
import { useRouter } from "next/navigation";
import { CartContext } from "@/features/ContextProvider";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const router = useRouter();

  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex items-center gap-4 lg:gap-6 relative">
      <Link href="/" onClick={handleProfile}>
        <FaRegCircleUser style={{ fontSize: 24 }} />
      </Link>
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-primary shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      <Link href="/cart" className="relative" onClick={handleCart}>
        <MdOutlineShoppingCart style={{ fontSize: 24 }} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-center">
          {cart.length}
        </div>
      </Link>
      {/* {isCartOpen && <CartModal />} */}
    </div>
  );
}
