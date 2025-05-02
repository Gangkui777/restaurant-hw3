import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const menuItems = [
  { name: 'Chicken Stewed with Mushrooms', price: 28 },
  { name: 'Red Braised Pork Belly', price: 28 },
  { name: 'Stir-Fried Shredded Potato', price: 18 },
  { name: 'Peking Duck', price: 38 },
  { name: 'Vermicelli with Duck Blood', price: 18 },
  { name: 'Mapo Tofu', price: 18 },
];

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#fce7d3] to-[#eac9a5]">
      <h2 className="text-3xl font-bold text-center text-[#761414] mb-10">Our Menu</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {menuItems.map((item) => (
          <div key={item.name} className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-[#761414] mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
