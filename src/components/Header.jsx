import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { toggleCart } = useContext(CartContext);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white z-50 shadow-md">
      <div className="flex items-center justify-between w-full px-4 md:px-8 py-8">
        {/* Logo */}
        <div className="text-lg font-bold uppercase tracking-wider">
          <a href="#home">XIAO MI <span className="font-light">RESTAURANT</span></a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-28 text-lg">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#menu" className="hover:text-yellow-400">Menu</a>
          <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>

        {/* Cart Icon */}
        <button onClick={toggleCart} className="text-2xl hover:text-yellow-400">
          🛒
        </button>
      </div>
    </header>
  );
}
