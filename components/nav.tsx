"use client";
import { SearchIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    setCurrentPage(window.location.pathname.slice(1) || "home");
  }, []);

  return (
    <div className="flex justify-center border-b border-b-white border-opacity-15">
      <nav className="!max-w-4xl w-full items-center flex justify-between py-8">
        <span className="flex items-center gap-8">
          <Link href="/" className="text-base">
            Navigation
          </Link>
          <ul className="flex gap-6">
            <li
              className={`text-xs ${currentPage === "home" ? "underline" : ""}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`text-xs ${currentPage === "shop" ? "underline" : ""}`}
            >
              <Link href="/shop">Shop</Link>
            </li>
            <li
              className={`text-xs ${currentPage === "contact" ? "underline" : ""}`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </span>
        <span className="flex items-center">
          {/*<div className="p-3 cursor-pointer">
            <SearchIcon strokeWidth={1} size={20} />
          </div>*/}
          <Link href="/cart" className="p-3">
            <ShoppingBagIcon strokeWidth={1} size={20} />
          </Link>
        </span>
      </nav>
    </div>
  );
}
