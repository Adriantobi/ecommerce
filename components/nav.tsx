"use client";

import { cartType } from "@/types/types";
import {
  GlobeIcon,
  InstagramIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileSideNav({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className="fixed top-0 left-0 mg:w-1/2 w-11/12 h-full bg-black z-50 flex flex-col justify-between"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="flex flex-col gap-6 p-8 pt-32">
          <li>
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <span className="flex pb-4">
          <Link href="https://instagram.com/adrian.td" className="p-3">
            <InstagramIcon size={20} strokeWidth={1} />
          </Link>
          <Link href="https://adriantd.com" className="p-3">
            <GlobeIcon size={20} strokeWidth={1} />
          </Link>
        </span>
      </div>
    </div>
  );
}

export function Nav() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartAmount, setCartAmount] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavOpen]);

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
    <>
      <div className="flex justify-center border-b border-b-white border-opacity-15 relative z-[99]">
        <nav className="!max-w-4xl w-full items-center flex justify-between mg:py-8 py-2">
          <div
            className="p-3 relative mg:hidden flex"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <XIcon strokeWidth={1} size={20} />
            ) : (
              <MenuIcon strokeWidth={1} size={20} />
            )}
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
      {isMobileNavOpen ? (
        <MobileSideNav setIsOpen={setIsMobileNavOpen} />
      ) : null}
    </>
  );
}
