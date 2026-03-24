'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { cart } = cartContext;
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-slate-950/90 backdrop-blur-lg border-b border-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.16)] z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
            ElectricBikes Store
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-100">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-white transition">
              Products
            </Link>
            <Link href="/cart" className="relative hover:text-white transition">
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}