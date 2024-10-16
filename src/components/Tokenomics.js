import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  return (
    <section className="my-16 px-8">
      <h2 className="text-center navbar neon-text text-4xl mb-8">Tokenomics</h2>
      <motion.div
        className="bg-darkPanel p-8 rounded-lg max-w-3xl mx-auto shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="neon-text text-2xl mb-4">Total Supply: 1,000,000,000 WARTY</h3>
        <ul className="space-y-4">
          <li>50% - Community Rewards</li>
          <li>25% - Liquidity Pool</li>
          <li>15% - Development</li>
          <li>10% - Marketing and Partnerships</li>
          <li>Note - This Tokenomics is for the second phase of Warthog, Read About for more info.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Tokenomics;
