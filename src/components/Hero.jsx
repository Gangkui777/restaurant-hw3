import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}banner.jpg')` }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Xiao Mi Restaurant</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Experience the authentic taste of modern Chinese cuisine, crafted with fresh ingredients and traditional flavors.
      </p>
      <a
        href="#menu"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg"
      >
        Order Now
      </a>
    </section>
  );
}
