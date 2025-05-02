import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-[#761414] mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Message"
          rows="5"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
