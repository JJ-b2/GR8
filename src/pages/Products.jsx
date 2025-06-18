import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-10">
      <Link to="/" className="text-green-400 text-sm">&larr; Back to Home</Link>
      <motion.h1
        className="text-4xl font-bold mt-6 mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Our Products
      </motion.h1>
      <motion.img
        src="/glow-road.jpg"
        alt="Glowing Road"
        className="rounded-xl shadow-lg mb-6 max-w-2xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      <ul className="text-gray-300 list-disc list-inside">
        <li>GlowRoad™ Paint – High-reflective road marking paint</li>
        <li>GlowTape™ – Flexible fluorescent road tape</li>
        <li>EcoMark™ – Sustainable non-toxic night markers</li>
        <li>Custom Kits – Tailored solutions for highways and cities</li>
      </ul>
    </main>
  );
}
