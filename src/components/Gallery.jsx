import React from 'react';

const images = [
  '/food1.jpg',
  '/food2.jpg',
  '/food3.jpg',
  '/food4.jpg',
  '/food5.jpg',
  '/food6.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#eac9a5] to-[#fce7d3]">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Dish ${index + 1}`}
            className="rounded-xl w-full h-48 object-cover"
          />
        ))}
      </div>
    </section>
  );
}
