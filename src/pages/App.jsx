import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      <nav className="flex justify-between px-8 py-4 bg-black shadow-md">
        <h1 className="text-2xl font-bold text-green-400">GlowRoad</h1>
        <div className="space-x-6 text-white">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/products" className="hover:text-green-400">Products</Link>
        </div>
      </nav>

      <section className="text-center px-4 py-12">
        <h2 className="text-4xl font-bold text-green-300 mb-4">The Future of Night Visibility</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Our fluorescent road markings ensure safety for drivers and pedestrians by providing better visibility at night.
        </p>
      </section>

      <section className="text-center py-10">
        <form className="space-y-4 max-w-md mx-auto" action="https://formspree.io/f/mnnvzapd" method="POST">
          <input name="name" placeholder="Your Name" className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" required />
          <input name="email" type="email" placeholder="Email Address" className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" required />
          <textarea name="message" placeholder="Message" className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" rows="4" required></textarea>
          <button type="submit" className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-xl">Send Message</button>
        </form>
      </section>

      <footer className="text-center text-gray-400 py-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} GlowRoad. All rights reserved.
      </footer>
    </main>
  );
}
