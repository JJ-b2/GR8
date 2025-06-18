import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-10">
      <Link to="/" className="text-green-400 text-sm">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mt-6 mb-4">About GlowRoad</h1>
      <p className="text-gray-300 max-w-3xl">
        GlowRoad is a leading innovator in road safety products. Our mission is to make roads safer using advanced fluorescent technologies.
        We believe every street and highway should be clearly visible at night — for the safety of drivers, cyclists, and pedestrians alike.
      </p>
    </main>
  );
}
