import React, { useEffect, useState } from 'react';

const images = [
  `${import.meta.env.BASE_URL}food1.jpg`,
  `${import.meta.env.BASE_URL}food2.jpg`,
  `${import.meta.env.BASE_URL}food3.jpg`,
  `${import.meta.env.BASE_URL}food4.jpg`,
  `${import.meta.env.BASE_URL}food5.jpg`,
  `${import.meta.env.BASE_URL}food6.jpg`,
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000); // 每 3 秒切换一次
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const endIndex = startIndex + 3;
    if (endIndex <= images.length) {
      return images.slice(startIndex, endIndex);
    }
    return [...images.slice(startIndex), ...images.slice(0, endIndex - images.length)];
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#eac9a5] to-[#fce7d3]">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 transition-all duration-700">
        {getVisibleImages().map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Dish ${index + 1}`}
            className="rounded-xl w-full h-60 object-cover"
          />
        ))}
      </div>
    </section>
  );
}
