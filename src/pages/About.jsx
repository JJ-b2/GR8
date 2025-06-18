import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-10">
      <Link to="/" className="text-green-400 text-sm">&larr; Back to Home</Link>
      <motion.h1
        className="text-4xl font-bold mt-6 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About GlowRoad
      </motion.h1>
      <motion.p
        className="text-gray-300 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        GlowRoad is a leading innovator in road safety products. Our mission is to make roads safer using advanced fluorescent technologies.
        We believe every street and highway should be clearly visible at night — for the safety of drivers, cyclists, and pedestrians alike.
      </motion.p>
    </main>
  );
}
