'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", route: "/", active: true },
    { name: "Menu", route: "/menu", active: false },
    { name: "Blog", route: "/blog", active: false },
    { name: "Shop", route: "/shop", active: false },
    { name: "About", route: "/about", active: false },
    { name: "Chef", route: "/chef", active: false },
    { name: "Contact", route: "/contact", active: false },
  ];

  const { cartCount } = useShoppingCart();

  return (
    <header className="w-full max-w-[1920px] bg-[#0D0D0D] top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden text-white z-20 ${
            isMenuOpen ? "absolute top-4 right-4" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible z-10' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
        `}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.route}
                className={`text-[16px] leading-6 ${
                  item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                } font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div
          className= "flex items-center gap-4" >
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/search.png" alt="search" width={24} height={24} />
          </Link>
          <Link href="/signin" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/User.png" alt="user" width={24} height={24} />
          </Link>
          <Link href="/shoppingCart" className="relative text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/Tote.png" alt="cart" width={24} height={24} />
            {cartCount ? (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartCount}
              </span>
            ) : (
              ""
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
