"use client";

import { cartType } from "@/types/types";
import { MenuIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartAmount, setCartAmount] = useState(0);

  const pathname = usePathname();

  const updateCartAmount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]") as cartType;
    const amount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartAmount(amount);
  };

  useEffect(() => {
    setCurrentPage(pathname.slice(1) || "home");
  }, [pathname]);

  useEffect(() => {
    updateCartAmount();

    const handleStorageChange = (event: StorageEvent) => {
      updateCartAmount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex justify-center border-b border-b-white border-opacity-15">
      <nav className="!max-w-4xl w-full items-center flex justify-between mg:py-8 py-2">
        <div className="p-3 relative mg:hidden flex">
          <MenuIcon strokeWidth={1} size={20} />
        </div>
        <span className="flex items-center gap-8">
          <Link href="/" className="text-base">
            Cool Name
          </Link>
          <ul className="mg:flex gap-6 hidden">
            <li
              className={`text-xs hover:underline ${currentPage === "home" ? "underline" : ""}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`text-xs hover:underline ${currentPage === "shop" ? "underline" : ""}`}
            >
              <Link href="/shop">Shop</Link>
            </li>
            <li
              className={`text-xs hover:underline ${currentPage === "contact" ? "underline" : ""}`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </span>
        <span className="flex items-center">
          {/*<div className="p-3 cursor-pointer">
            <SearchIcon strokeWidth={1} size={20} />
          </div>*/}
          <Link href="/cart" className="p-3 relative">
            <ShoppingBagIcon strokeWidth={1} size={20} />
            {cartAmount > 0 && (
              <span className="absolute bottom-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {cartAmount}
              </span>
            )}
          </Link>
        </span>
      </nav>
    </div>
  );
}
