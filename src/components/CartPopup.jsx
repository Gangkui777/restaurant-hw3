import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartPopup() {
  const { cartItems, removeFromCart, clearCart, isCartOpen } = useContext(CartContext);

  if (!isCartOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-20 right-4 w-80 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                className="ml-2 text-red-500 hover:text-red-700 text-xs"
                onClick={() => removeFromCart(item.name)}
              >
                Remove
              </button>
            </div>
          ))}
          <p className="font-bold text-right mt-2">Total: ${total.toFixed(2)}</p>
          <button
            onClick={clearCart}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md mt-4 text-sm"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
