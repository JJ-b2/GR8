import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-10">
      <Link to="/" className="text-green-400 text-sm">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mt-6 mb-4">Our Products</h1>
      <img src="/glow-road.jpg" alt="Glowing Road" className="rounded-xl shadow-lg mb-6 max-w-2xl w-full" />
      <ul className="text-gray-300 list-disc list-inside">
        <li>GlowRoad™ Paint – High-reflective road marking paint</li>
        <li>GlowTape™ – Flexible fluorescent road tape</li>
        <li>EcoMark™ – Sustainable non-toxic night markers</li>
        <li>Custom Kits – Tailored solutions for highways and cities</li>
      </ul>
    </main>
  );
}
