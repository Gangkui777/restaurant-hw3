import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import CartPopup from './components/CartPopup';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="font-sans">
        <Header />
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Contact />
        <CartPopup />
      </div>
    </CartProvider>
  );
}
