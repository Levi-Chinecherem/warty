import React from 'react';
import { FaRocket, FaUsers, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  { icon: <FaRocket />, title: 'Speed and Agility', description: 'Inspired by the warthog’s speed, WARTY aims to be one of the fastest-growing coins.' },
  { icon: <FaUsers />, title: 'Community-Driven', description: 'Our community is at the heart of everything, focusing on growth and fun.' },
  { icon: <FaSmile />, title: 'Humor and Fun', description: 'WARTY brings laughter and warthog-themed antics to the crypto world.' }
];

const Features = () => {
  return (
    <section className="my-16 px-8">
      <h2 className="text-center navbar neon-text text-4xl mb-8">Why Choose Warthog (WARTY)?</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card p-6 rounded-lg shadow-lg max-w-sm text-center bg-darkPanel"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <div className="text-neonBlue text-3xl mb-4">{feature.icon}</div> {/* Adjusted icon size */}
            <h3 className="neon-text text-xl mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
