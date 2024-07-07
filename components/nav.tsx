"use client";
import { SearchIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

export function Nav() {
  const currentPage = window.location.pathname.replace("/", "") || "home";
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
        <span className="flex gap-6 items-center">
          <SearchIcon strokeWidth={1} size={20} />
          <ShoppingBagIcon strokeWidth={1} size={20} />
        </span>
      </nav>
    </div>
  );
}
