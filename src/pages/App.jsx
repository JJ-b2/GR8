import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      <nav className="flex justify-between px-8 py-4 bg-black shadow-md">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-2xl font-bold text-green-400">
          GlowRoad
        </motion.h1>
        <div className="space-x-6 text-white">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/products" className="hover:text-green-400">Products</Link>
        </div>
      </nav>

      <section className="text-center px-4 py-12">
        <motion.h2
          className="text-4xl font-bold text-green-300 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The Future of Night Visibility
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our fluorescent road markings ensure safety for drivers and pedestrians by providing better visibility at night.
        </motion.p>
      </section>

      <motion.section
        className="text-center py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <form className="space-y-4 max-w-md mx-auto" action="https://formspree.io/f/mnnvzapd" method="POST">
          <input name="name" placeholder="Your Name" className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" required />
          <input name="email" type="email" placeholder="Email Address" className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" required />
          <textarea name="message" placeholder="Message" className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" rows="4" required></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-xl"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      <footer className="text-center text-gray-400 py-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} GlowRoad. All rights reserved.
      </footer>
    </main>
  );
}
